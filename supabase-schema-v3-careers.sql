-- ============================================================
-- Odds & Ends Handyman Service — Schema V3: Careers
-- Adds the job_applications table used by /careers.
-- Safe to re-run. Run in Supabase → SQL Editor.
--
-- NOTE: the careers-apply API treats this table as optional — if it does not
-- exist yet the application is still emailed, and the insert error is logged.
-- ============================================================

CREATE TABLE IF NOT EXISTS job_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT DEFAULT '',
  city TEXT DEFAULT '',
  contact_method TEXT DEFAULT 'Text',
  answers JSONB DEFAULT '{}'::jsonb,   -- raw wizard answers keyed by step id
  skills TEXT[] DEFAULT '{}',          -- copy of answers.skills for easy filtering
  notes TEXT DEFAULT '',
  source TEXT DEFAULT 'careers-page',
  status TEXT DEFAULT 'new',           -- new | contacted | interviewing | hired | passed
  admin_notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_job_applications_status ON job_applications(status);
CREATE INDEX IF NOT EXISTS idx_job_applications_created ON job_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_job_applications_skills ON job_applications USING GIN (skills);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='job_applications' AND policyname='Service role full access') THEN
    CREATE POLICY "Service role full access" ON job_applications FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;
