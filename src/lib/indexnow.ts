import { siteConfig } from '@/data/site-config'

// IndexNow lets us push URL change notifications to Bing/Copilot/Yandex/Naver
// instead of waiting for crawl. Bing Copilot picks up new content ~5x faster.
// The key is published as a static text file at /{key}.txt to prove ownership.

const INDEXNOW_KEY = process.env.INDEXNOW_KEY

export async function pingIndexNow(urls: string | string[]): Promise<{ ok: boolean; status: number; body?: string }> {
  if (!INDEXNOW_KEY) {
    return { ok: false, status: 0, body: 'INDEXNOW_KEY env var not set' }
  }

  const urlList = Array.isArray(urls) ? urls : [urls]
  const host = new URL(siteConfig.url).host

  try {
    const res = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation: `${siteConfig.url}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
    })

    return {
      ok: res.ok,
      status: res.status,
      body: res.ok ? undefined : await res.text(),
    }
  } catch (err) {
    return {
      ok: false,
      status: 0,
      body: err instanceof Error ? err.message : String(err),
    }
  }
}
