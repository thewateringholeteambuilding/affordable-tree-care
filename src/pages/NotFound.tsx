import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}
    >
      <span
        className="block mb-4"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '5rem',
          color: 'var(--color-accent)',
          lineHeight: 1,
        }}
      >
        404
      </span>
      <h1
        className="mb-4"
        style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)' }}
      >
        Page Not Found
      </h1>
      <p className="mb-8 text-sm max-w-sm" style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
        The page you're looking for doesn't exist. Head back home or give us a call.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
        <a href="tel:+18164574612" className="btn-outline">
          (816) 457-4612
        </a>
      </div>
    </div>
  )
}
