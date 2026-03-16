-- ============================================================
-- Odds & Ends Handyman Service — Schema V2
-- Self-contained: creates any missing tables from v1 + new v2 tables
-- ============================================================

-- ── V1 tables (IF NOT EXISTS so they're safe to re-run) ─────

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

-- ── V2 tables ───────────────────────────────────────────────

-- SEO Overrides (dashboard-managed metadata overrides per page)
CREATE TABLE IF NOT EXISTS seo_overrides (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT UNIQUE NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  og_image TEXT,
  keywords TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Blog Posts (CMS managed)
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT DEFAULT '',
  content TEXT DEFAULT '',
  category TEXT DEFAULT '',
  related_services TEXT[] DEFAULT '{}',
  related_cities TEXT[] DEFAULT '{}',
  meta_title TEXT DEFAULT '',
  meta_description TEXT DEFAULT '',
  published_date TEXT DEFAULT '',
  author TEXT DEFAULT 'Dan Kiely',
  image TEXT DEFAULT '',
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- CMS Pages (editable page content)
CREATE TABLE IF NOT EXISTS cms_pages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content JSONB DEFAULT '{}'::jsonb,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ── Indexes (all tables) ────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_status ON quiz_submissions(status);
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_created ON quiz_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_service ON quiz_submissions(service_slug);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created ON blog_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_cms_pages_slug ON cms_pages(slug);
CREATE INDEX IF NOT EXISTS idx_seo_overrides_path ON seo_overrides(page_path);
CREATE INDEX IF NOT EXISTS idx_chat_transcripts_created ON chat_transcripts(created_at DESC);

-- ── RLS ─────────────────────────────────────────────────────
ALTER TABLE quiz_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_transcripts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_overrides ENABLE ROW LEVEL SECURITY;

-- ── Policies ────────────────────────────────────────────────
-- Service role full access (uses DO block to skip if already exists)
DO $$ BEGIN
  -- quiz_submissions
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='quiz_submissions' AND policyname='Service role full access') THEN
    CREATE POLICY "Service role full access" ON quiz_submissions FOR ALL USING (true) WITH CHECK (true);
  END IF;
  -- leads
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='leads' AND policyname='Service role full access') THEN
    CREATE POLICY "Service role full access" ON leads FOR ALL USING (true) WITH CHECK (true);
  END IF;
  -- lead_notes
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='lead_notes' AND policyname='Service role full access') THEN
    CREATE POLICY "Service role full access" ON lead_notes FOR ALL USING (true) WITH CHECK (true);
  END IF;
  -- chat_transcripts
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='chat_transcripts' AND policyname='Service role full access') THEN
    CREATE POLICY "Service role full access" ON chat_transcripts FOR ALL USING (true) WITH CHECK (true);
  END IF;
  -- blog_posts
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='blog_posts' AND policyname='Service role full access') THEN
    CREATE POLICY "Service role full access" ON blog_posts FOR ALL USING (true) WITH CHECK (true);
  END IF;
  -- cms_pages
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='cms_pages' AND policyname='Service role full access') THEN
    CREATE POLICY "Service role full access" ON cms_pages FOR ALL USING (true) WITH CHECK (true);
  END IF;
  -- seo_overrides
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='seo_overrides' AND policyname='Service role full access') THEN
    CREATE POLICY "Service role full access" ON seo_overrides FOR ALL USING (true) WITH CHECK (true);
  END IF;

  -- Anon insert policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='quiz_submissions' AND policyname='Anon can insert quiz submissions') THEN
    CREATE POLICY "Anon can insert quiz submissions" ON quiz_submissions FOR INSERT WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='leads' AND policyname='Anon can insert leads') THEN
    CREATE POLICY "Anon can insert leads" ON leads FOR INSERT WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='chat_transcripts' AND policyname='Anon can insert chat transcripts') THEN
    CREATE POLICY "Anon can insert chat transcripts" ON chat_transcripts FOR INSERT WITH CHECK (true);
  END IF;

  -- Anon read policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='blog_posts' AND policyname='Anon can read published blogs') THEN
    CREATE POLICY "Anon can read published blogs" ON blog_posts FOR SELECT USING (is_published = true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='cms_pages' AND policyname='Anon can read published pages') THEN
    CREATE POLICY "Anon can read published pages" ON cms_pages FOR SELECT USING (is_published = true);
  END IF;
END $$;
