'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Mic, Square, Play, Pause, Trash2, Loader2 } from 'lucide-react'

interface VoiceNote {
  id: string
  lead_id: string
  audio_url: string
  duration_seconds: number | null
  file_size: number | null
  mime_type: string | null
  created_at: string
}

interface VoiceNotesProps {
  leadId: string
  dashboardFetch: (url: string, options?: RequestInit) => Promise<Response>
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function timeAgo(date: string): string {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000)
  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days}d ago`
  return new Date(date).toLocaleDateString()
}

export default function VoiceNotes({ leadId, dashboardFetch }: VoiceNotesProps) {
  const [voiceNotes, setVoiceNotes] = useState<VoiceNote[]>([])
  const [loading, setLoading] = useState(true)
  const [isRecording, setIsRecording] = useState(false)
  const [recordingDuration, setRecordingDuration] = useState(0)
  const [uploading, setUploading] = useState(false)
  const [playingId, setPlayingId] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [micError, setMicError] = useState<string | null>(null)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const durationAtStopRef = useRef(0)

  const fetchVoiceNotes = useCallback(async () => {
    try {
      const res = await dashboardFetch(
        `/api/dashboard/leads/${leadId}/voice-notes`
      )
      if (res.ok) {
        const data = await res.json()
        setVoiceNotes(data.voiceNotes || [])
      }
    } catch (err) {
      console.error('Failed to fetch voice notes:', err)
    } finally {
      setLoading(false)
    }
  }, [leadId, dashboardFetch])

  useEffect(() => {
    fetchVoiceNotes()
  }, [fetchVoiceNotes])

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      audioRef.current?.pause()
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state !== 'inactive'
      ) {
        mediaRecorderRef.current.stream
          .getTracks()
          .forEach((t) => t.stop())
        mediaRecorderRef.current.stop()
      }
    }
  }, [])

  const uploadVoiceNote = useCallback(
    async (blob: Blob, mimeType: string, duration: number) => {
      setUploading(true)
      try {
        const ext = mimeType.includes('webm') ? 'webm' : 'm4a'
        const file = new File([blob], `voice-note.${ext}`, { type: mimeType })
        const formData = new FormData()
        formData.append('audio', file)
        formData.append('duration', String(duration))

        const pw = sessionStorage.getItem('dashboard_password') || ''
        const res = await fetch(
          `/api/dashboard/leads/${leadId}/voice-notes`,
          {
            method: 'POST',
            headers: { Authorization: `Bearer ${pw}` },
            body: formData,
          }
        )

        if (res.ok) {
          await fetchVoiceNotes()
        } else {
          const err = await res.json().catch(() => null)
          console.error('Upload failed:', err)
        }
      } catch (err) {
        console.error('Upload failed:', err)
      } finally {
        setUploading(false)
      }
    },
    [leadId, fetchVoiceNotes]
  )

  const startRecording = async () => {
    setMicError(null)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : MediaRecorder.isTypeSupported('audio/webm')
          ? 'audio/webm'
          : 'audio/mp4'

      const mediaRecorder = new MediaRecorder(stream, { mimeType })
      chunksRef.current = []

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data)
      }

      mediaRecorder.onstop = () => {
        stream.getTracks().forEach((t) => t.stop())
        const blob = new Blob(chunksRef.current, { type: mediaRecorder.mimeType })
        if (blob.size > 0) {
          uploadVoiceNote(blob, mediaRecorder.mimeType, durationAtStopRef.current)
        }
      }

      mediaRecorderRef.current = mediaRecorder
      mediaRecorder.start(1000)
      setIsRecording(true)
      setRecordingDuration(0)

      timerRef.current = setInterval(() => {
        setRecordingDuration((d) => d + 1)
      }, 1000)
    } catch {
      setMicError('Could not access microphone. Please allow mic access and try again.')
    }
  }

  const stopRecording = () => {
    durationAtStopRef.current = recordingDuration
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== 'inactive'
    ) {
      mediaRecorderRef.current.stop()
    }
    setIsRecording(false)
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const togglePlayback = (note: VoiceNote) => {
    if (playingId === note.id) {
      audioRef.current?.pause()
      setPlayingId(null)
      return
    }

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }

    const audio = new Audio(note.audio_url)
    audio.onended = () => setPlayingId(null)
    audio.onerror = () => setPlayingId(null)
    audio.play()
    audioRef.current = audio
    setPlayingId(note.id)
  }

  const deleteVoiceNote = async (noteId: string) => {
    setDeletingId(noteId)
    try {
      const res = await dashboardFetch(
        `/api/dashboard/leads/${leadId}/voice-notes/${noteId}`,
        { method: 'DELETE' }
      )
      if (res.ok) {
        setVoiceNotes((prev) => prev.filter((n) => n.id !== noteId))
        if (playingId === noteId) {
          audioRef.current?.pause()
          setPlayingId(null)
        }
      }
    } catch (err) {
      console.error('Delete failed:', err)
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div>
      <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
        Voice Notes
      </h3>

      {/* Existing voice notes */}
      {loading ? (
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading...
        </div>
      ) : voiceNotes.length > 0 ? (
        <div className="space-y-2 mb-3">
          {voiceNotes.map((note) => (
            <div
              key={note.id}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
            >
              <button
                onClick={() => togglePlayback(note)}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                  playingId === note.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                }`}
              >
                {playingId === note.id ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4 ml-0.5" />
                )}
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  {note.duration_seconds != null && (
                    <span className="text-sm font-medium text-gray-700">
                      {formatDuration(note.duration_seconds)}
                    </span>
                  )}
                  <span className="text-xs text-gray-400">
                    {timeAgo(note.created_at)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => deleteVoiceNote(note.id)}
                disabled={deletingId === note.id}
                className="shrink-0 rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors disabled:opacity-50"
                title="Delete voice note"
              >
                {deletingId === note.id ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Trash2 className="h-4 w-4" />
                )}
              </button>
            </div>
          ))}
        </div>
      ) : null}

      {/* Record button */}
      {isRecording ? (
        <button
          onClick={stopRecording}
          className="flex items-center gap-3 rounded-xl border-2 border-red-300 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-100 active:bg-red-200 transition-colors w-full sm:w-auto"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
          </span>
          Recording {formatDuration(recordingDuration)}
          <Square className="h-4 w-4 ml-auto sm:ml-2" />
        </button>
      ) : uploading ? (
        <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500">
          <Loader2 className="h-4 w-4 animate-spin" />
          Saving voice note...
        </div>
      ) : (
        <button
          onClick={startRecording}
          className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors w-full sm:w-auto"
        >
          <Mic className="h-4 w-4 text-blue-600" />
          Record a voice note
        </button>
      )}

      {micError && (
        <p className="mt-2 text-xs text-red-500">{micError}</p>
      )}
    </div>
  )
}
