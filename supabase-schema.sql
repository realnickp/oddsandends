-- ============================================================
-- Odds & Ends Handyman Service — Supabase Schema
-- Run this in the Supabase SQL Editor
-- ============================================================

-- Quiz / Project Builder Submissions
CREATE TABLE IF NOT EXISTS quiz_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_slug TEXT NOT NULL,
  service_name TEXT NOT NULL,
  answers JSONB DEFAULT '{}'::jsonb,
  description TEXT DEFAULT '',
  photo_urls TEXT[] DEFAULT '{}',
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT DEFAULT '',
  contact_method TEXT DEFAULT 'Text',
  source TEXT DEFAULT 'project-builder',
  status TEXT DEFAULT 'new',
  notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Estimate Form Submissions (simple form)
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT DEFAULT '',
  city TEXT DEFAULT '',
  service_needed TEXT DEFAULT '',
  description TEXT DEFAULT '',
  photo_urls TEXT[] DEFAULT '{}',
  contact_method TEXT DEFAULT 'Text',
  timeline TEXT DEFAULT '',
  source TEXT DEFAULT 'estimate-form',
  status TEXT DEFAULT 'new',
  notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Lead Notes (admin can add notes to any lead)
CREATE TABLE IF NOT EXISTS lead_notes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID,
  quiz_submission_id UUID,
  note TEXT NOT NULL,
  created_by TEXT DEFAULT 'admin',
  created_at TIMESTAMPTZ DEFAULT now(),
  FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE,
  FOREIGN KEY (quiz_submission_id) REFERENCES quiz_submissions(id) ON DELETE CASCADE
);

-- Chatbot Transcripts
CREATE TABLE IF NOT EXISTS chat_transcripts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  messages JSONB DEFAULT '[]'::jsonb,
  lead_captured BOOLEAN DEFAULT false,
  name TEXT DEFAULT '',
  phone TEXT DEFAULT '',
  email TEXT DEFAULT '',
  service_interest TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes for fast queries
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_status ON quiz_submissions(status);
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_created ON quiz_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_service ON quiz_submissions(service_slug);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC);

-- Row Level Security
ALTER TABLE quiz_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_transcripts ENABLE ROW LEVEL SECURITY;

-- Allow service role full access (for API routes)
CREATE POLICY "Service role full access" ON quiz_submissions
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Service role full access" ON leads
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Service role full access" ON lead_notes
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Service role full access" ON chat_transcripts
  FOR ALL USING (true) WITH CHECK (true);

-- Allow anon insert for form submissions (visitors can submit)
CREATE POLICY "Anon can insert quiz submissions" ON quiz_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anon can insert leads" ON leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anon can insert chat transcripts" ON chat_transcripts
  FOR INSERT WITH CHECK (true);

-- ============================================================
-- Storage Bucket (run this separately or create via Supabase UI)
-- ============================================================
-- 1. Go to Storage in Supabase dashboard
-- 2. Create a new bucket called "lead-uploads"
-- 3. Set it to Public
-- 4. Add policy: allow anon uploads (INSERT)
-- 5. Add policy: allow public reads (SELECT)
