import { Link } from 'react-router-dom'
import { Phone, ChevronRight } from 'lucide-react'

/* Verified photos (HEAD 200) */
const CHAINSAW_PHOTO = 'https://images.unsplash.com/photo-1684332666088-f35b252b5aca?auto=format&fit=crop&w=900&q=80'
const LOGS_PHOTO     = 'https://images.unsplash.com/photo-1615836671441-cc13250c2158?auto=format&fit=crop&w=900&q=80'
const TREE_YARD      = 'https://images.unsplash.com/photo-1653751749028-d071e5209218?auto=format&fit=crop&w=900&q=80'

const services = [
  {
    name: 'Tree Removal',
    price: 'From $350',
    detail: 'Full takedown, top to root crown. We use rigging for anything close to structure. All wood is sectioned, chipped or hauled. Property walkthrough before and after every job.',
    steps: ['Site assessment and written quote', 'Crew setup with proper ground protection', 'Directional felling or section-and-lower based on space', 'Chipper or haul-off for all material', 'Rake and blower cleanup'],
    img: CHAINSAW_PHOTO,
  },
  {
    name: 'Tree Trimming',
    price: 'From $175',
    detail: 'Crown cleaning, deadwood removal, and structural pruning. We follow ISA pruning standards. No topping. Trimming is done to improve tree health and shape, not just reduce size.',
    steps: ['Canopy review and pruning plan', 'Deadwood removal first', 'Structural cuts to improve form and weight distribution', 'Cleanup of all dropped material'],
    img: TREE_YARD,
  },
  {
    name: 'Stump Grinding',
    price: 'From $125',
    detail: 'Grind to 8 inches below grade. Backfill with wood chips, rake smooth. The root collar is ground flush. No raised edges. Area is ready to reseed or sod.',
    steps: ['Mark utilities if needed', 'Grind to 8" below grade', 'Backfill with chips', 'Rake flush and clear debris'],
    img: LOGS_PHOTO,
  },
  {
    name: 'Emergency Storm Cleanup',
    price: 'Priority response',
    detail: "Wind-thrown trees, split leaders, storm damage to structure. We respond same day when available. Call the main number for an honest ETA.",
    steps: ['Same-day response when available', 'Immediate hazard mitigation', 'Full site cleanup follows', 'Photo documentation for insurance'],
    img: CHAINSAW_PHOTO,
  },
]

export default function Services() {
  return (
    <>
      {/* Header */}
      <div
        className="pt-28 pb-16 px-6 md:px-12 lg:px-16"
        style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="max-w-6xl mx-auto">
          <span className="section-label">What We Offer</span>
          <h1
            className="mt-3 mb-4"
            style={{ fontSize: 'var(--text-h1)', fontFamily: 'var(--font-heading)' }}
          >
            Tree Services
          </h1>
          <p className="max-w-xl text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            Every job starts with a free written estimate. Pricing is based on size, access,
            and complexity, not on what you look like you can afford.
          </p>
        </div>
      </div>

      {/* Services list */}
      <section
        className="px-6 md:px-12 lg:px-16"
        style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {services.map((s, idx) => (
            <div
              key={s.name}
              className={`grid md:grid-cols-2 gap-8 items-start ${idx % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
            >
              <div style={{ direction: 'ltr' }}>
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {s.price}
                </span>
                <h2
                  className="mt-2 mb-4"
                  style={{ fontSize: 'var(--text-h2)', fontFamily: 'var(--font-heading)' }}
                >
                  {s.name}
                </h2>
                <p className="text-sm mb-6" style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  {s.detail}
                </p>
                <ul className="flex flex-col gap-2 list-none mb-8">
                  {s.steps.map((step) => (
                    <li key={step} className="flex items-start gap-3">
                      <ChevronRight size={14} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 3 }} />
                      <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{step}</span>
                    </li>
                  ))}
                </ul>
                <a href="tel:+18164574612" className="btn-primary">
                  <Phone size={13} strokeWidth={2.5} />
                  Get a Quote
                </a>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden" style={{ direction: 'ltr' }}>
                <img
                  src={s.img}
                  alt={`${s.name} work in progress`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={900}
                  height={675}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div
        className="px-6 md:px-12 lg:px-16 py-16"
        style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h3)' }}>
              Ready to schedule?
            </h2>
            <p className="text-sm mt-2" style={{ color: 'var(--color-text-muted)' }}>
              Call or use the contact form. We'll get back to you same business day.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:+18164574612" className="btn-primary">
              <Phone size={13} strokeWidth={2.5} />
              (816) 457-4612
            </a>
            <Link to="/contact" className="btn-outline">
              Contact Form
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
