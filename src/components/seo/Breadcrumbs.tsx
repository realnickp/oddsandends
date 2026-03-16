import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { breadcrumbSchema } from '@/lib/schema'
import { SchemaMarkup } from './SchemaMarkup'

interface BreadcrumbItem {
  name: string
  url: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: 'Home', url: '/' }, ...items]

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema(allItems)} />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol className="flex items-center gap-1.5 text-sm text-gray-500">
          {allItems.map((item, index) => (
            <li key={item.url} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-gray-400" />}
              {index === 0 && <Home className="h-3.5 w-3.5" />}
              {index === allItems.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.name}</span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-blue-700 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
