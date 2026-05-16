import Link from 'next/link'
import { Fragment, type ReactNode } from 'react'

/**
 * Lightweight Markdown-ish renderer for blog post `content` strings.
 *
 * Blocks are separated by blank lines. Supported block types:
 *   `## `   -> h2
 *   `### `  -> h3
 *   `#### ` -> h4
 *   `**Heading**` (a line that is entirely bold) -> h3
 *   `---`   -> hr
 *   lines starting `- ` / `* ` -> unordered list
 *   lines starting `1. ` / `2. ` ... -> ordered list
 *   `> `    -> blockquote
 *   `| a | b |` (+ a `|---|` separator row) -> table
 *   anything else -> paragraph
 *
 * Inline syntax inside paragraphs / list items / table cells / headings:
 *   `**bold**`           -> <strong>
 *   `*italic*`           -> <em>
 *   `[label](/path)`     -> internal <Link>
 *   `[label](https://…)` -> external <a target="_blank">
 *
 * This intentionally stays small: it covers exactly what our blog content
 * uses, fails soft (no throws), and renders deterministically server-side.
 */

const LINK_CLASS =
  'text-blue-700 font-medium underline decoration-blue-300 underline-offset-2 hover:text-blue-800 hover:decoration-blue-500 transition-colors'

const INLINE_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*\n]+)\*/g

function renderInline(text: string, keyBase: string): ReactNode {
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let i = 0
  let match: RegExpExecArray | null

  INLINE_PATTERN.lastIndex = 0
  while ((match = INLINE_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        <Fragment key={`${keyBase}-t${i}`}>{text.slice(lastIndex, match.index)}</Fragment>
      )
    }
    const key = `${keyBase}-m${i}`
    if (match[1] !== undefined && match[2] !== undefined) {
      const label = match[1]
      const href = match[2]
      if (href.startsWith('/') || href.startsWith('#')) {
        nodes.push(
          <Link key={key} href={href} className={LINK_CLASS}>
            {label}
          </Link>
        )
      } else {
        nodes.push(
          <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
            {label}
          </a>
        )
      }
    } else if (match[3] !== undefined) {
      nodes.push(
        <strong key={key} className="font-semibold text-gray-900">
          {match[3]}
        </strong>
      )
    } else if (match[4] !== undefined) {
      nodes.push(<em key={key}>{match[4]}</em>)
    }
    lastIndex = INLINE_PATTERN.lastIndex
    i++
  }
  if (lastIndex < text.length) {
    nodes.push(<Fragment key={`${keyBase}-t${i}`}>{text.slice(lastIndex)}</Fragment>)
  }
  return nodes
}

function splitTableRow(row: string): string[] {
  let r = row.trim()
  if (r.startsWith('|')) r = r.slice(1)
  if (r.endsWith('|')) r = r.slice(0, -1)
  return r.split('|').map((c) => c.trim())
}

const SEPARATOR_ROW = /^\|?[\s:|-]+\|?$/

export function BlogContent({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/).map((b) => b.replace(/\s+$/, '')).filter((b) => b.trim().length > 0)

  return (
    <div className="prose prose-lg max-w-none">
      {blocks.map((block, bi) => {
        const key = `b${bi}`
        const trimmed = block.trim()

        // Horizontal rule
        if (/^-{3,}$/.test(trimmed)) {
          return <hr key={key} className="my-12 border-gray-200" />
        }

        // Headings
        if (trimmed.startsWith('#### ')) {
          return (
            <h4 key={key} className="text-lg md:text-xl font-bold text-gray-900 mt-8 mb-3">
              {renderInline(trimmed.slice(5), key)}
            </h4>
          )
        }
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={key} className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4">
              {renderInline(trimmed.slice(4), key)}
            </h3>
          )
        }
        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={key} className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-5">
              {renderInline(trimmed.slice(3), key)}
            </h2>
          )
        }
        if (trimmed.startsWith('# ')) {
          return (
            <h2 key={key} className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-5">
              {renderInline(trimmed.slice(2), key)}
            </h2>
          )
        }

        // A line that is entirely bold -> treat as a sub-heading
        const fullBold = /^\*\*(.+)\*\*$/.exec(trimmed)
        if (fullBold && !trimmed.includes('\n') && !fullBold[1].includes('**')) {
          return (
            <h3 key={key} className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4">
              {renderInline(fullBold[1], key)}
            </h3>
          )
        }

        const lines = trimmed.split('\n').map((l) => l.trim()).filter(Boolean)

        // Table: first line looks like a row and a separator row exists
        if (lines.length >= 2 && lines[0].startsWith('|') && SEPARATOR_ROW.test(lines[1]) && lines[1].includes('-')) {
          const header = splitTableRow(lines[0])
          const bodyRows = lines.slice(2).map(splitTableRow)
          return (
            <div key={key} className="my-8 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full border-collapse text-sm md:text-[15px]">
                <thead>
                  <tr className="bg-gray-50">
                    {header.map((cell, ci) => (
                      <th
                        key={ci}
                        className="border-b border-gray-200 px-4 py-3 text-left font-bold text-gray-900"
                      >
                        {renderInline(cell, `${key}-h${ci}`)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bodyRows.map((cells, ri) => (
                    <tr key={ri} className="even:bg-gray-50/60">
                      {cells.map((cell, ci) => (
                        <td
                          key={ci}
                          className="border-b border-gray-100 px-4 py-3 align-top text-gray-600 font-light"
                        >
                          {renderInline(cell, `${key}-r${ri}c${ci}`)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }

        // Unordered list
        if (lines.length > 0 && lines.every((l) => /^[-*]\s+/.test(l))) {
          return (
            <ul key={key} className="list-disc pl-6 mb-6 space-y-2 text-gray-600 font-light text-lg marker:text-blue-500">
              {lines.map((l, li) => (
                <li key={li} className="leading-relaxed">
                  {renderInline(l.replace(/^[-*]\s+/, ''), `${key}-i${li}`)}
                </li>
              ))}
            </ul>
          )
        }

        // Ordered list
        if (lines.length > 0 && lines.every((l) => /^\d+\.\s+/.test(l))) {
          return (
            <ol key={key} className="list-decimal pl-6 mb-6 space-y-2 text-gray-600 font-light text-lg marker:text-blue-600 marker:font-semibold">
              {lines.map((l, li) => (
                <li key={li} className="leading-relaxed pl-1">
                  {renderInline(l.replace(/^\d+\.\s+/, ''), `${key}-i${li}`)}
                </li>
              ))}
            </ol>
          )
        }

        // Blockquote
        if (lines.length > 0 && lines.every((l) => l.startsWith('>'))) {
          const quote = lines.map((l) => l.replace(/^>\s?/, '')).join(' ')
          return (
            <blockquote key={key} className="my-8 border-l-4 border-blue-500 bg-blue-50/50 px-5 py-4 text-gray-700 italic rounded-r-lg">
              {renderInline(quote, key)}
            </blockquote>
          )
        }

        // Default: paragraph (single-newlines become spaces, matching prior behaviour)
        const paragraphText = trimmed.replace(/\n+/g, ' ')
        const isAside = /^\*[^*].*\*$/.test(paragraphText)
        return (
          <p
            key={key}
            className={
              isAside
                ? 'text-gray-400 font-light italic leading-relaxed mb-5 text-base border-t border-gray-100 pt-6'
                : 'text-gray-600 font-light leading-relaxed mb-5 text-lg'
            }
          >
            {renderInline(paragraphText, key)}
          </p>
        )
      })}
    </div>
  )
}
