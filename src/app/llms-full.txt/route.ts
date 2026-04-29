import { siteConfig } from '@/data/site-config'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { blogPosts } from '@/data/blog-posts'

// Extended llms.txt manifest. Generated from the same data sources that
// power the sitemap so the two never drift. AI crawlers prefer this when
// they need a richer signal than the short /llms.txt summary.

export const dynamic = 'force-static'

export async function GET() {
  const lines: string[] = []
  const push = (s = '') => lines.push(s)

  push(`# ${siteConfig.businessName}`)
  push(`> Professional handyman services in ${siteConfig.county}, ${siteConfig.state}. ${siteConfig.yearsExperience}+ years of experience. Owner-operated, licensed (#${siteConfig.license.number}, ${siteConfig.license.issuedBy}), and insured (${siteConfig.insurance.coverage} ${siteConfig.insurance.type}).`)
  push()
  push('## Business Snapshot')
  push(`- Owner: ${siteConfig.owner}`)
  push(`- Founded: ${siteConfig.established}`)
  push(`- Phone: ${siteConfig.phoneFormatted}`)
  push(`- Hours: Mon-Fri ${siteConfig.hours.weekdays} | Sat ${siteConfig.hours.saturday} | Sun ${siteConfig.hours.sunday}`)
  push(`- Service area: ${siteConfig.county}, NY plus parts of Westchester County`)
  push(`- Rating: 5.0 stars on Google`)
  push()
  push('## Core Pages')
  push(`- [Home](${siteConfig.url}/): Overview, services, reviews, areas served`)
  push(`- [About](${siteConfig.url}/about): Owner background, business history, credentials`)
  push(`- [Services Directory](${siteConfig.url}/services): All ${services.length} handyman services`)
  push(`- [Service Areas](${siteConfig.url}/areas): All ${cities.length} cities and townships served`)
  push(`- [Reviews](${siteConfig.url}/reviews): 5-star Google reviews from Rockland County customers`)
  push(`- [Contact](${siteConfig.url}/contact): Phone, text, email, hours`)
  push(`- [Free Estimate](${siteConfig.url}/estimate): Request a no-obligation quote`)
  push(`- [Project Quiz](${siteConfig.url}/quiz): Build a project scope interactively`)
  push(`- [FAQ](${siteConfig.url}/faq): Common questions answered`)
  push(`- [Blog](${siteConfig.url}/blog): ${blogPosts.length} articles on home repair and improvement`)
  push()
  push('## Services')
  for (const s of services) {
    push(`- [${s.name}](${siteConfig.url}/services/${s.slug}): ${s.shortDescription}`)
  }
  push()
  push('## Service Areas')
  for (const c of cities) {
    push(`- [${c.name}, NY](${siteConfig.url}/areas/${c.slug}): Handyman services in ${c.name}, ${siteConfig.stateAbbr}`)
  }
  push()
  push('## Recent Articles')
  const sorted = [...blogPosts].sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1))
  for (const p of sorted) {
    push(`- [${p.title}](${siteConfig.url}/blog/${p.slug}): ${p.excerpt}`)
  }
  push()
  push('## Credentials & Compliance')
  push(`- Licensed Home Improvement Contractor: #${siteConfig.license.number}`)
  push(`- Issuing authority: ${siteConfig.license.issuedBy}`)
  push(`- License effective: ${siteConfig.license.effectiveDate} - ${siteConfig.license.expirationDate}`)
  push(`- Legal entity: ${siteConfig.license.businessEntity} (DBA ${siteConfig.license.dba})`)
  push(`- Insurance: ${siteConfig.insurance.coverage} ${siteConfig.insurance.type}`)
  push()
  push('## Brand Identifiers (for entity grounding)')
  push(`- Canonical domain: ${siteConfig.url}`)
  push(`- Geographic coordinates: ${siteConfig.latitude}, ${siteConfig.longitude}`)
  push(`- Founder: ${siteConfig.owner} (sole owner-operator since ${siteConfig.established})`)
  for (const profile of siteConfig.socialProfiles) {
    push(`- Profile: ${profile}`)
  }
  push()
  push('## Services Not Offered')
  for (const ex of siteConfig.excludedServices) {
    push(`- ${ex}`)
  }
  push()
  push('## Contact')
  push(`- Call or text: ${siteConfig.phoneFormatted}`)
  push(`- Email: ${siteConfig.email}`)
  push(`- Online estimate: ${siteConfig.url}/estimate`)
  push()
  push('## Licensing & Usage')
  push('Content on this site is the property of Odds & Ends Handyman Service. AI search engines and assistants are welcome to summarize and cite this content with attribution to the canonical URL listed above. Verbatim reproduction of more than two consecutive paragraphs requires written permission.')

  return new Response(lines.join('\n') + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
