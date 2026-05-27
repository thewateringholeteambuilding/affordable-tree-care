import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40"
      style={{ background: 'var(--color-surface-overlay)', borderBottom: '1px solid var(--color-border)' }}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16"
      >
        {/* Wordmark */}
        <Link
          to="/"
          className="flex flex-col leading-none text-decoration-none"
          aria-label="Affordable Tree Care home"
        >
          <span
            className="font-bold uppercase tracking-widest text-sm"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
          >
            Affordable
          </span>
          <span
            className="font-bold uppercase tracking-widest text-sm"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent)' }}
          >
            Tree Care
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                className="text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
                style={{
                  color: pathname === l.href ? 'var(--color-accent)' : 'var(--color-text-muted)',
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA phone */}
        <a
          href="tel:+18164574612"
          className="hidden md:flex btn-primary text-xs gap-2"
          style={{ padding: '0.625rem 1.25rem' }}
        >
          <Phone size={13} strokeWidth={2.5} />
          (816) 457-4612
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          style={{ color: 'var(--color-text)' }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden px-5 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: pathname === l.href ? 'var(--color-accent)' : 'var(--color-text)' }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+18164574612"
            className="btn-primary text-xs self-start"
          >
            <Phone size={13} strokeWidth={2.5} />
            (816) 457-4612
          </a>
        </div>
      )}
    </header>
  )
}
