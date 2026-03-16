import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { generatePageMetadata } from '@/lib/metadata'
import { blogPosts } from '@/data/blog-posts'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Home Improvement Blog | Tips & Guides',
    description:
      'Helpful home improvement tips, repair guides, and maintenance advice from Odds & Ends Handyman Service in Rockland County, NY.',
    path: '/blog',
    keywords: ['home improvement blog', 'handyman tips', 'home repair guides'],
  })
}

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )

  return (
    <>
      {/* Dark Hero */}
      <section className="relative bg-gray-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ name: 'Blog', url: '/blog' }]} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-20 md:pb-28">
          <ScrollReveal direction="up">
            <div className="max-w-3xl">
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                Tips & Guides
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Home Improvement{' '}
                <span className="text-gradient">Tips & Guides</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Practical advice for Rockland County homeowners from Dan Kiely,
                with 20+ years of hands-on experience. Learn when to DIY, when to
                call a pro, and how to keep your home in great shape.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="wave" fromColor="#030712" toColor="#ffffff" />

      {/* Blog Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post, i) => (
              <ScrollReveal key={post.slug} direction="up" delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full"
                >
                  <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-400 font-light flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.publishedDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <h2 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-gray-500 font-light text-sm leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-blue-700 font-semibold text-sm group-hover:gap-2.5 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
