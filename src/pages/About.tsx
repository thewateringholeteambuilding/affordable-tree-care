import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'

/* Verified photos (HEAD 200) */
const TREE_FIELD = 'https://images.unsplash.com/photo-1695462935702-05bb400b81ba?auto=format&fit=crop&w=900&q=80'
const CREW_WORK  = 'https://images.unsplash.com/photo-1748073813267-af0cd7fddbaa?auto=format&fit=crop&w=900&q=80'

export default function About() {
  return (
    <>
      {/* Header */}
      <div
        className="pt-28 pb-16 px-6 md:px-12 lg:px-16"
        style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="max-w-6xl mx-auto">
          <span className="section-label">Our Story</span>
          <h1
            className="mt-3"
            style={{ fontSize: 'var(--text-h1)', fontFamily: 'var(--font-heading)' }}
          >
            Affordable Tree Care
          </h1>
        </div>
      </div>

      {/* Story section */}
      <section
        className="px-6 md:px-12 lg:px-16"
        style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="section-label mb-4 block">Kansas City Roots</span>
            <p className="text-sm mb-5" style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
              Affordable Tree Care has been working in Kansas City neighborhoods for years.
              We started with residential removals in the East Side and grew as word got around that
              we showed up on time, priced honestly, and left the yard cleaner than we found it.
            </p>
            <p className="text-sm mb-5" style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
              Our crew handles everything from a single dead limb to a full lot clearing.
              The same team that takes down the tree handles the grinding and the cleanup.
              We don't subcontract. You get consistent people with consistent standards.
            </p>
            <p className="text-sm mb-10" style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
              154 Google reviews averaging 4.9 stars. That number came from repeat work and
              referrals, not from asking every customer to rate us. We let the work speak.
            </p>
            <div className="flex gap-6 flex-wrap mb-10">
              <div className="stat-block">
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', lineHeight: 1 }}
                >
                  4.9
                </div>
                <div className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  Google rating
                </div>
              </div>
              <div className="stat-block">
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', lineHeight: 1 }}
                >
                  154
                </div>
                <div className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  Verified reviews
                </div>
              </div>
              <div className="stat-block">
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', lineHeight: 1 }}
                >
                  KC Metro
                </div>
                <div className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  Service area
                </div>
              </div>
            </div>
            <a href="tel:+18164574612" className="btn-primary">
              <Phone size={13} strokeWidth={2.5} />
              Call for a Free Estimate
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={TREE_FIELD}
                alt="Large healthy tree standing in a Kansas City residential yard"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={675}
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={CREW_WORK}
                alt="Tree removal crew operating heavy equipment on a job site"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={675}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How we price */}
      <section
        className="px-6 md:px-12 lg:px-16"
        style={{ background: 'var(--color-surface)', paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}
      >
        <div className="max-w-6xl mx-auto">
          <span className="section-label">Pricing</span>
          <h2
            className="mt-3 mb-8"
            style={{ fontSize: 'var(--text-h2)', fontFamily: 'var(--font-heading)' }}
          >
            How We Price
          </h2>
          <div className="grid md:grid-cols-3 gap-px" style={{ background: 'var(--color-border)' }}>
            {[
              {
                heading: 'Free On-Site Estimate',
                body: 'We walk the property with you. Every estimate is written and itemized. No quote over the phone, because we don\'t quote what we haven\'t seen.',
              },
              {
                heading: 'Fixed Price Per Job',
                body: 'The number we give you is the number on the invoice. If scope changes, we tell you before we touch anything beyond what was agreed.',
              },
              {
                heading: 'Competitive Rate',
                body: 'We price to be affordable because that\'s in our name. We\'re not the cheapest crew in KC, but we\'re the best value for what you get.',
              },
            ].map((item) => (
              <div
                key={item.heading}
                className="p-8"
                style={{ background: 'var(--color-bg)' }}
              >
                <h3
                  className="mb-3 text-sm"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.1, letterSpacing: '0.04em' }}
                >
                  {item.heading}
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div
        className="px-6 md:px-12 lg:px-16 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        style={{ maxWidth: '100%' }}
      >
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h3)' }}>
              Any questions? Just call.
            </h2>
            <p className="text-sm mt-2" style={{ color: 'var(--color-text-muted)' }}>
              (816) 457-4612. We answer during business hours.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:+18164574612" className="btn-primary">
              <Phone size={13} strokeWidth={2.5} />
              (816) 457-4612
            </a>
            <Link to="/contact" className="btn-outline">
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
