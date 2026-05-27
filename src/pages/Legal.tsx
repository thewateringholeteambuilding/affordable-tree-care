import { Link } from 'react-router-dom'

export default function Legal() {
  return (
    <div
      className="min-h-screen pt-12 pb-20 px-6 max-w-3xl mx-auto"
      style={{ color: 'var(--color-text)' }}
    >
      <div className="mb-8">
        <Link
          to="/"
          className="text-sm"
          style={{ color: 'var(--color-accent)' }}
        >
          &larr; Back to Home
        </Link>
      </div>

      <h1
        className="mb-8"
        style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)' }}
      >
        Privacy &amp; Terms
      </h1>

      <section className="mb-10">
        <h2
          className="mb-4 text-base"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Privacy Policy
        </h2>
        <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
          Affordable Tree Care collects information you provide through our contact form, including
          name, email, phone number, and service request details. This information is used solely
          to respond to your inquiry and provide a quote.
        </p>
        <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
          We use Google Analytics to understand site traffic. Analytics data is anonymized and
          we do not share or sell your personal information to any third party.
        </p>
        <p className="text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
          To request removal of your data, contact us at (816) 457-4612.
        </p>
      </section>

      <section>
        <h2
          className="mb-4 text-base"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Terms of Use
        </h2>
        <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
          This website is operated by Affordable Tree Care, located at 2460 Chestnut Ave,
          Kansas City, MO 64127. By using this site, you agree to these terms.
        </p>
        <p className="text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
          Content on this site is provided for informational purposes. Pricing shown is
          indicative; actual quotes require an on-site assessment. We reserve the right
          to update this content at any time.
        </p>
      </section>
    </div>
  )
}
