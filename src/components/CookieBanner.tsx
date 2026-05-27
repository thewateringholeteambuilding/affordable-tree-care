import { useState, useEffect } from 'react'

const CONSENT_KEY = 'twh-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'all')
    setVisible(false)
  }

  function necessary() {
    localStorage.setItem(CONSENT_KEY, 'necessary')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          We use cookies to measure site performance.{' '}
          <a href="/legal" className="underline" style={{ color: 'var(--color-accent)' }}>Privacy & Terms</a>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button onClick={necessary} className="btn-outline text-xs py-2 px-4">
            Necessary only
          </button>
          <button onClick={accept} className="btn-primary text-xs py-2 px-4">
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}
