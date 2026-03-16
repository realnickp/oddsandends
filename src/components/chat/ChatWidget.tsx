'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { MessageCircle, X, Send, User, Phone, Mail } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface UserInfo {
  name: string
  phone: string
  email: string
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [contactPhase, setContactPhase] = useState(true)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    phone: '',
    email: '',
  })
  const [showTooltip, setShowTooltip] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const hasSubmittedLead = useRef(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom on new messages or typing indicator
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Save lead on close/navigate
  const saveLead = useCallback(() => {
    if (
      hasSubmittedLead.current ||
      messages.length === 0 ||
      !userInfo.name
    )
      return
    hasSubmittedLead.current = true

    const payload = JSON.stringify({
      messages,
      name: userInfo.name,
      phone: userInfo.phone,
      email: userInfo.email,
    })

    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        '/api/chat-lead',
        new Blob([payload], { type: 'application/json' })
      )
    } else {
      fetch('/api/chat-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true,
      })
    }
  }, [messages, userInfo])

  useEffect(() => {
    const handleBeforeUnload = () => saveLead()
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') saveLead()
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [saveLead])

  // Escape key closes panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen && !contactPhase) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen, contactPhase])

  function handleClose() {
    if (messages.length > 0) saveLead()
    setIsOpen(false)
  }

  function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!userInfo.name.trim() || !userInfo.phone.trim()) return

    setContactPhase(false)
    setMessages([
      {
        role: 'assistant',
        content: `Hi ${userInfo.name.split(' ')[0]}! I'm the Odds & Ends assistant. I know all about handyman services \u2014 ask me anything about your home project, or I can help you book a free estimate with Dan!`,
      },
    ])
  }

  async function handleSend() {
    const trimmed = input.trim()
    if (!trimmed || isTyping) return

    const userMessage: Message = { role: 'user', content: trimmed }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setIsTyping(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          userInfo: {
            name: userInfo.name,
            phone: userInfo.phone,
            email: userInfo.email,
          },
        }),
      })

      if (!res.ok || !res.body) {
        throw new Error('Chat request failed')
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ''
      let buffer = ''

      // Add placeholder assistant message
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }])
      setIsTyping(false)

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          const trimmed = line.trim()
          if (!trimmed || trimmed === 'data: [DONE]') continue
          if (trimmed.startsWith('data: ')) {
            try {
              const json = JSON.parse(trimmed.slice(6))
              if (json.content) {
                assistantContent += json.content
                setMessages((prev) => {
                  const updated = [...prev]
                  updated[updated.length - 1] = {
                    role: 'assistant',
                    content: assistantContent,
                  }
                  return updated
                })
              }
            } catch {
              // skip malformed chunks
            }
          }
        }
      }
    } catch {
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "Sorry, I'm having trouble connecting right now. Please call or text us directly and we'll be happy to help!",
        },
      ])
    }
  }

  function handleInputKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating chat button */}
      {!isOpen && (
        <div className="fixed right-6 bottom-20 md:bottom-6 z-40">
          <button
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            aria-label="Open chat"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-200 animate-pulse-glow"
          >
            <MessageCircle className="h-6 w-6" />
          </button>

          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg pointer-events-none">
              Chat with us!
              <div className="absolute top-full right-5 -mt-1 w-2 h-2 bg-gray-900 rotate-45" />
            </div>
          )}
        </div>
      )}

      {/* Chat panel */}
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={handleClose}
          />

          <div
            ref={panelRef}
            role="dialog"
            aria-label="Chat with Odds & Ends"
            className="fixed inset-0 md:inset-auto md:right-6 md:bottom-6 md:w-[380px] md:h-[520px] md:rounded-2xl md:shadow-2xl z-50 flex flex-col bg-white overflow-hidden animate-chat-panel-in"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-600 shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-white font-semibold text-sm">
                  Chat with Odds &amp; Ends
                </h2>
              </div>
              <button
                onClick={handleClose}
                aria-label="Close chat"
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Contact info collection */}
            {contactPhase ? (
              <div className="flex-1 overflow-y-auto p-4">
                <div className="max-w-sm mx-auto">
                  {/* Bot bubble with greeting */}
                  <div className="flex gap-2 mb-6 animate-message-in">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 shrink-0 mt-1">
                      <MessageCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                      <p className="text-gray-800 text-sm leading-relaxed">
                        Hi there! Before we start, let us grab your contact info
                        so we can follow up on your project.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleContactSubmit} className="space-y-3">
                    {/* Name */}
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Your name *"
                        required
                        value={userInfo.name}
                        onChange={(e) =>
                          setUserInfo((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="Phone number *"
                        required
                        value={userInfo.phone}
                        onChange={(e) =>
                          setUserInfo((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Email (optional)"
                        value={userInfo.email}
                        onChange={(e) =>
                          setUserInfo((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
                    >
                      Start Chatting
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      We&apos;ll never spam you. Just for follow-up on your
                      project.
                    </p>
                  </form>
                </div>
              </div>
            ) : (
              <>
                {/* Messages area */}
                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex animate-message-in ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.role === 'assistant' && (
                        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 shrink-0 mt-1 mr-2">
                          <MessageCircle className="h-3.5 w-3.5 text-blue-600" />
                        </div>
                      )}
                      <div
                        className={[
                          'max-w-[75%] px-3.5 py-2.5 text-sm leading-relaxed',
                          msg.role === 'assistant'
                            ? 'bg-gray-100 text-gray-800 rounded-2xl rounded-tl-sm'
                            : 'bg-blue-600 text-white rounded-2xl rounded-tr-sm',
                        ].join(' ')}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex justify-start animate-message-in">
                      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 shrink-0 mt-1 mr-2">
                        <MessageCircle className="h-3.5 w-3.5 text-blue-600" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                        <span className="typing-dot" />
                        <span
                          className="typing-dot"
                          style={{ animationDelay: '150ms' }}
                        />
                        <span
                          className="typing-dot"
                          style={{ animationDelay: '300ms' }}
                        />
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input bar */}
                <div className="border-t border-gray-200 px-4 py-3 shrink-0 safe-area-bottom">
                  <div className="flex items-center gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleInputKeyDown}
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || isTyping}
                      aria-label="Send message"
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  )
}
