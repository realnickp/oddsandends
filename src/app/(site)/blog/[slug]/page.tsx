import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blog-posts'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { CTASection } from '@/components/sections/CTASection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { generateBlogMetadata } from '@/lib/metadata'
import { articleSchema } from '@/lib/schema'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return generateBlogMetadata(post)
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const relatedServices = services.filter((s) =>
    post.relatedServices.includes(s.slug)
  )
  const relatedCities = cities.filter((c) =>
    post.relatedCities.includes(c.slug)
  )

  return (
    <>
      <SchemaMarkup
        schema={articleSchema({
          title: post.title,
          excerpt: post.excerpt,
          slug: post.slug,
          publishedDate: post.publishedDate,
          author: post.author,
        })}
      />

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
          <Breadcrumbs
            items={[
              { name: 'Blog', url: '/blog' },
              { name: post.title, url: `/blog/${post.slug}` },
            ]}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 pt-6 pb-20 md:pb-28 text-center">
          <ScrollReveal direction="up">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-blue-400 font-medium text-sm mb-8 hover:gap-2.5 hover:text-blue-300 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-wide">
                {post.category}
              </span>
              <span className="text-sm text-gray-500 flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="text-sm text-gray-500 flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="curve" fromColor="#030712" toColor="#ffffff" />

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 -mt-12 mb-12 relative z-10">
        <div className="aspect-[16/9] relative rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
      </div>

      {/* Article content */}
      <article className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, i) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2
                        key={i}
                        className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-5"
                      >
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3
                        key={i}
                        className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4"
                      >
                        {paragraph.replace('### ', '')}
                      </h3>
                    )
                  }
                  return (
                    <p key={i} className="text-gray-500 font-light leading-relaxed mb-5 text-lg">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Related services */}
              {relatedServices.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-1">
                    Related
                  </p>
                  <h3 className="font-bold text-gray-900 text-lg mb-5">Services</h3>
                  <div className="space-y-1">
                    {relatedServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="group flex items-center justify-between py-2.5 px-3 rounded-lg text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all"
                      >
                        {service.name}
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related areas */}
              {relatedCities.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-1">
                    Featured
                  </p>
                  <h3 className="font-bold text-gray-900 text-lg mb-5">Areas</h3>
                  <div className="space-y-1">
                    {relatedCities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/areas/${city.slug}`}
                        className="group flex items-center justify-between py-2.5 px-3 rounded-lg text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all"
                      >
                        {city.name}
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                <p className="text-blue-100 font-light text-sm mb-5">
                  Get a free, no-obligation estimate for your project.
                </p>
                <Link
                  href="/estimate"
                  className="block text-center bg-white text-blue-700 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors"
                >
                  Request Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  )
}
