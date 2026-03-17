import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileStickyCTA } from '@/components/layout/MobileStickyCTA'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { localBusinessSchema, organizationSchema } from '@/lib/schema'
import { ChatWidget } from '@/components/chat/ChatWidget'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SchemaMarkup schema={[localBusinessSchema(), organizationSchema()]} />
      <ScrollToTop />
      <div id="page-content">
        <Header />
        <main className="min-h-screen pb-16 md:pb-0">{children}</main>
        <Footer />
      </div>
      <MobileStickyCTA />
      <ChatWidget />
    </>
  )
}
