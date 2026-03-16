'use client'

import { useState, useEffect, useCallback, createContext, useContext } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  FileText,
  Search,
  Wrench,
  LogOut,
  ExternalLink,
  Lock,
  Eye,
  EyeOff,
} from 'lucide-react'

// ── Auth context ──────────────────────────────────────────────
interface DashboardContextType {
  dashboardFetch: (url: string, options?: RequestInit) => Promise<Response>
  logout: () => void
}

const DashboardContext = createContext<DashboardContextType | null>(null)

export function useDashboard() {
  const ctx = useContext(DashboardContext)
  if (!ctx) throw new Error('useDashboard must be used inside DashboardLayout')
  return ctx
}

// ── Nav items ─────────────────────────────────────────────────
const navItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/leads', label: 'Leads', icon: Users },
  { href: '/dashboard/blog', label: 'Blog', icon: FileText },
  { href: '/dashboard/seo', label: 'SEO', icon: Search },
]

// ── Layout ────────────────────────────────────────────────────
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false)
  const [checking, setChecking] = useState(true)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loggingIn, setLoggingIn] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Check session on mount
  useEffect(() => {
    const stored = sessionStorage.getItem('dashboard_password')
    if (stored) {
      setAuthenticated(true)
    }
    setChecking(false)
  }, [])

  const dashboardFetch = useCallback(
    (url: string, options: RequestInit = {}) => {
      const pw = sessionStorage.getItem('dashboard_password') || ''
      return fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${pw}`,
          ...(options.headers || {}),
        },
      })
    },
    []
  )

  const logout = useCallback(() => {
    sessionStorage.removeItem('dashboard_password')
    setAuthenticated(false)
    router.push('/dashboard')
  }, [router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')
    setLoggingIn(true)
    try {
      const res = await fetch('/api/dashboard/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (res.ok) {
        sessionStorage.setItem('dashboard_password', password)
        setAuthenticated(true)
      } else {
        const data = await res.json().catch(() => ({}))
        setLoginError(data.error || 'Invalid password')
      }
    } catch {
      setLoginError('Network error. Please try again.')
    } finally {
      setLoggingIn(false)
    }
  }

  // ── Loading ─────────────────────────────────────────────────
  if (checking) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    )
  }

  // ── Login form ──────────────────────────────────────────────
  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <Wrench className="h-7 w-7" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Login</h1>
            <p className="mt-1 text-sm text-gray-500">Odd &amp; Ends Handyman Services</p>
          </div>

          <form onSubmit={handleLogin} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mb-4">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-4 w-4 text-gray-400" />
              </div>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-10 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter password"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {loginError && (
              <p className="mb-4 text-sm text-red-600">{loginError}</p>
            )}

            <button
              type="submit"
              disabled={loggingIn || !password}
              className="w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {loggingIn ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  // ── Authenticated layout ────────────────────────────────────
  const isActive = (href: string) =>
    href === '/dashboard' ? pathname === '/dashboard' : pathname.startsWith(href)

  return (
    <DashboardContext.Provider value={{ dashboardFetch, logout }}>
      <div className="flex h-screen bg-gray-50">
        {/* Desktop sidebar */}
        <aside className="hidden w-60 flex-col bg-gray-900 text-white md:flex">
          {/* Logo */}
          <div className="flex h-16 items-center gap-2.5 border-b border-white/10 px-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Wrench className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold tracking-tight">Odd &amp; Ends</span>
          </div>

          {/* Nav links */}
          <nav className="mt-4 flex-1 space-y-1 px-3">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? 'border-l-2 border-blue-400 bg-blue-600/20 text-blue-400'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Return to site */}
          <div className="px-3 mb-2">
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
            >
              <ExternalLink className="h-5 w-5 shrink-0" />
              Return to Site
            </Link>
          </div>

          {/* User / Logout */}
          <div className="border-t border-white/10 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
                <Wrench className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-medium text-white">Dan Kiely</p>
                <p className="text-xs text-gray-500">Owner</p>
              </div>
              <button
                onClick={logout}
                title="Sign out"
                className="rounded-lg p-1.5 text-gray-500 hover:bg-white/5 hover:text-white"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">{children}</main>

        {/* Mobile bottom tab bar */}
        <nav className="fixed inset-x-0 bottom-0 z-50 flex h-16 items-center justify-around border-t border-gray-200 bg-white safe-area-bottom md:hidden">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-0.5 text-xs font-medium ${
                  active ? 'text-blue-600' : 'text-gray-400'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
          <Link
            href="/"
            target="_blank"
            className="flex flex-col items-center gap-0.5 text-xs font-medium text-gray-400"
          >
            <ExternalLink className="h-5 w-5" />
            <span>Site</span>
          </Link>
        </nav>
      </div>
    </DashboardContext.Provider>
  )
}
