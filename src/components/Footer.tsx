import { Link } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'

const serviceLinks = [
  { label: 'Tree Removal', href: '/services' },
  { label: 'Tree Trimming', href: '/services' },
  { label: 'Stump Grinding', href: '/services' },
  { label: 'Emergency Storm Cleanup', href: '/services' },
  { label: 'Dead Wood Removal', href: '/services' },
]

const legalLinks = [
  { label: 'Privacy & Terms', href: '/legal' },
]

export default function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}
    >
      <div className="max-w-6xl mx-auto px-5 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <span
              className="block font-bold uppercase tracking-widest text-sm"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
            >
              Affordable Tree Care
            </span>
            <span
              className="block text-xs uppercase tracking-widest mt-1"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Kansas City, MO
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            Tree removal, trimming, and stump grinding serving the Kansas City metro.
            Free estimates. Licensed and insured.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-5"
            style={{ color: 'var(--color-accent)' }}
          >
            Services
          </h3>
          <ul className="flex flex-col gap-3 list-none">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="text-sm transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-5"
            style={{ color: 'var(--color-accent)' }}
          >
            Contact
          </h3>
          <ul className="flex flex-col gap-4 list-none">
            <li className="flex items-start gap-3">
              <Phone size={15} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 2 }} />
              <a
                href="tel:+18164574612"
                className="text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                (816) 457-4612
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={15} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 2 }} />
              <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                2460 Chestnut Ave<br />Kansas City, MO 64127
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-5 py-5"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            &copy; {new Date().getFullYear()} Affordable Tree Care. All rights reserved.
          </p>
          <ul className="flex gap-5 list-none">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="text-xs"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
