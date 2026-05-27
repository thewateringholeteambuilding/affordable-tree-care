import { Link } from 'react-router-dom'
import { Phone, ChevronRight, Star } from 'lucide-react'

/* ── Verified Unsplash photos (HEAD-checked 200) ────────────────────
   Hero split:        photo-1626828476637-5bd713ef9f22  arborist climbing tree
   CTA band:          photo-1591091421731-22bf7044c1cb  tree in yard
   Worker close:      photo-1684332666088-f35b252b5aca  chainsaw cutting tree
   Crew at work:      photo-1748073813267-af0cd7fddbaa  tree workers machinery
   ─────────────────────────────────────────────────────────────────── */

const HERO_PHOTO   = 'https://images.unsplash.com/photo-1626828476637-5bd713ef9f22?auto=format&fit=crop&w=900&q=80'
const CTA_PHOTO    = 'https://images.unsplash.com/photo-1591091421731-22bf7044c1cb?auto=format&fit=crop&w=1920&q=80'
const WORKER_PHOTO = 'https://images.unsplash.com/photo-1684332666088-f35b252b5aca?auto=format&fit=crop&w=900&q=80'
const CREW_PHOTO   = 'https://images.unsplash.com/photo-1748073813267-af0cd7fddbaa?auto=format&fit=crop&w=900&q=80'

const services = [
  {
    name: 'Tree Removal',
    desc: 'Full takedown from crown to stump. We section and lower safely, then clear every branch from the property.',
  },
  {
    name: 'Tree Trimming',
    desc: 'Structural pruning that keeps trees healthy and clears sight lines. Deadwood removed on every visit.',
  },
  {
    name: 'Stump Grinding',
    desc: 'Grind to 8 inches below grade. Backfill with chips, rake smooth. No trip hazard, no regrowth.',
  },
  {
    name: 'Emergency Storm Cleanup',
    desc: 'Wind-thrown and split trees cleared same day. We work until the site is safe and accessible.',
  },
  {
    name: 'Dead Wood Removal',
    desc: 'Strip hazard limbs before they fall. Keeps the tree, removes the risk.',
  },
  {
    name: 'Tree Health Assessment',
    desc: 'Root zone inspection, canopy review, disease diagnosis. Know what you have before it becomes a problem.',
  },
]

const testimonials = [
  {
    quote: "Called at 7 AM after a storm knocked a limb into my fence. They were here by 10, cleared everything, and patched the gap in my fence line. Price was more than fair.",
    name: 'Marcus T.',
    detail: 'Kansas City, MO',
    stars: 5,
  },
  {
    quote: "Three large oaks in my backyard needed to come down. The crew was methodical. No damage to the lawn, no mess left behind. Stump grinding was included in the quote.",
    name: 'Diane R.',
    detail: 'Independence, MO',
    stars: 5,
  },
  {
    quote: "I've used them twice now. First for trimming, second for a full removal. Same crew, same quality. The quote matched the final invoice exactly.",
    name: 'Kevin L.',
    detail: 'Lee\'s Summit, MO',
    stars: 5,
  },
]

export default function Home() {
  return (
    <>
      {/* ── Hero: split grid ───────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="pt-16 min-h-screen grid md:grid-cols-2"
      >
        {/* Left: copy */}
        <div
          className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-20"
          style={{ background: 'var(--color-bg)' }}
        >
          <span className="section-label mb-6">Kansas City Tree Service</span>
          <h1
            id="hero-heading"
            className="mb-6"
            style={{
              fontSize: 'var(--text-hero)',
              fontFamily: 'var(--font-heading)',
              lineHeight: 0.9,
              color: 'var(--color-text)',
            }}
          >
            Trees Down.<br />
            <span style={{ color: 'var(--color-accent)' }}>Property Clear.</span>
          </h1>
          <p
            className="mb-10 max-w-md text-base"
            style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}
          >
            Affordable Tree Care has handled removals, trims, and storm cleanups
            across Kansas City for years. 154 Google reviews averaging 4.9 stars.
            Free estimates. We show up and we finish.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="tel:+18164574612" className="btn-primary">
              <Phone size={14} strokeWidth={2.5} />
              (816) 457-4612
            </a>
            <Link to="/services" className="btn-outline">
              Our Services
              <ChevronRight size={14} />
            </Link>
          </div>
          {/* Stats */}
          <div className="flex gap-8 flex-wrap">
            <div className="stat-block">
              <div
                className="text-3xl font-bold"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', lineHeight: 1 }}
              >
                4.9
              </div>
              <div className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--color-text-muted)' }}>
                Star rating
              </div>
            </div>
            <div className="stat-block">
              <div
                className="text-3xl font-bold"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', lineHeight: 1 }}
              >
                154
              </div>
              <div className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--color-text-muted)' }}>
                Google reviews
              </div>
            </div>
            <div className="stat-block">
              <div
                className="text-3xl font-bold"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', lineHeight: 1 }}
              >
                Free
              </div>
              <div className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--color-text-muted)' }}>
                Estimates
              </div>
            </div>
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative min-h-[400px] md:min-h-0 order-first md:order-last">
          <img
            src={HERO_PHOTO}
            alt="Arborist climbing and trimming a large tree"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            width={900}
            height={1100}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, var(--color-bg) 0%, transparent 30%)' }}
          />
          {/* Rating badge — top right */}
          <div
            className="absolute top-6 right-6 px-4 py-3 text-center"
            style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
          >
            <div className="flex justify-center gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" style={{ color: 'var(--color-accent)' }} />
              ))}
            </div>
            <div
              className="text-xs font-bold uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
            >
              4.9 Google
            </div>
          </div>
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────────────── */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="px-6 md:px-12 lg:px-16"
        style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}
      >
        <div className="max-w-6xl mx-auto">
          <span className="section-label">What We Do</span>
          <h2
            id="services-heading"
            className="mt-3 mb-12"
            style={{ fontSize: 'var(--text-h2)', fontFamily: 'var(--font-heading)' }}
          >
            Tree Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--color-border)' }}>
            {services.map((s) => (
              <div
                key={s.name}
                className="service-card p-8"
                style={{ background: 'var(--color-surface)' }}
              >
                <h3
                  className="mb-3 text-base"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-text)',
                    lineHeight: 1.1,
                    letterSpacing: '0.04em',
                  }}
                >
                  {s.name}
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex gap-4 flex-wrap">
            <Link to="/services" className="btn-primary">
              Full Service Details
              <ChevronRight size={14} />
            </Link>
            <a href="tel:+18164574612" className="btn-outline">
              <Phone size={13} strokeWidth={2.5} />
              Call for a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* ── Work photos: two-col editorial ──────────────────────── */}
      <section
        aria-label="Crew at work"
        className="px-6 md:px-12 lg:px-16"
        style={{ paddingBottom: 'var(--space-section)' }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={WORKER_PHOTO}
              alt="Tree worker using chainsaw to cut through large limb"
              className="w-full h-full object-cover"
              loading="lazy"
              width={900}
              height={675}
            />
          </div>
          <div
            className="flex flex-col justify-between p-8 md:p-10"
            style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
          >
            <div>
              <span className="section-label">How We Work</span>
              <h2
                className="mt-4 mb-6"
                style={{ fontSize: 'var(--text-h2)', fontFamily: 'var(--font-heading)' }}
              >
                Straight Quote.<br />Clean Site.
              </h2>
              <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                Before any work starts, we walk the property with you. You get a written quote.
                That number doesn't change unless the scope changes, and we tell you before it does.
              </p>
              <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                Crew handles the takedown, the hauling, and the cleanup. You don't drag branches
                to the curb. We bring a chipper and we use it.
              </p>
            </div>
            <div className="flex gap-6">
              <div className="stat-block">
                <div className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading)' }}>Written</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>Quote every time</div>
              </div>
              <div className="stat-block">
                <div className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading)' }}>Full</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>Site cleanup included</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Crew photo + area served ─────────────────────────────── */}
      <section
        aria-label="Service area"
        className="px-6 md:px-12 lg:px-16"
        style={{ paddingBottom: 'var(--space-section)' }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
          <div
            className="p-8 md:p-10"
            style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
          >
            <span className="section-label">Service Area</span>
            <h2
              className="mt-4 mb-6"
              style={{ fontSize: 'var(--text-h2)', fontFamily: 'var(--font-heading)' }}
            >
              Kansas City Metro
            </h2>
            <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
              We serve Kansas City proper and the surrounding communities. Same crew,
              same pricing structure, same cleanup standard across the metro.
            </p>
            <ul className="grid grid-cols-2 gap-3 list-none mb-8">
              {['Kansas City', 'Independence', "Lee's Summit", 'Liberty', 'Raytown', 'Blue Springs', 'Grandview', 'Overland Park'].map((city) => (
                <li key={city} className="flex items-center gap-2">
                  <span style={{ width: 4, height: 4, background: 'var(--color-accent)', display: 'inline-block', flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{city}</span>
                </li>
              ))}
            </ul>
            <a href="tel:+18164574612" className="btn-primary">
              <Phone size={13} strokeWidth={2.5} />
              Get a Free Estimate
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={CREW_PHOTO}
              alt="Tree workers operating heavy equipment during a removal job"
              className="w-full h-full object-cover"
              loading="lazy"
              width={900}
              height={675}
            />
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section
        id="reviews"
        aria-labelledby="reviews-heading"
        className="px-6 md:px-12 lg:px-16"
        style={{ paddingBottom: 'var(--space-section)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="section-label">Google Reviews</span>
              <h2
                id="reviews-heading"
                className="mt-3"
                style={{ fontSize: 'var(--text-h2)', fontFamily: 'var(--font-heading)' }}
              >
                4.9 Stars, 154 Reviews
              </h2>
            </div>
            <a
              href="https://maps.google.com/?cid=14100426447436165908"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
              style={{ padding: '0.5rem 1rem' }}
            >
              See all on Google
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'var(--color-border)' }}>
            {testimonials.map((t) => (
              <div key={t.name} className="p-8" style={{ background: 'var(--color-surface)' }}>
                <div className="flex gap-0.5 mb-5">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" style={{ color: 'var(--color-accent)' }} />
                  ))}
                </div>
                <blockquote
                  className="text-sm mb-6 leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  "{t.quote}"
                </blockquote>
                <cite
                  className="not-italic text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {t.name}
                  <span className="block font-normal normal-case tracking-normal mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                    {t.detail}
                  </span>
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Google Maps embed ─────────────────────────────────────── */}
      <section
        aria-label="Location map"
        className="px-6 md:px-12 lg:px-16"
        style={{ paddingBottom: 'var(--space-section)' }}
      >
        <div className="max-w-6xl mx-auto">
          <span className="section-label mb-4 block">Find Us</span>
          <div
            className="relative overflow-hidden"
            style={{ paddingBottom: '42%', height: 0, border: '1px solid var(--color-border)' }}
          >
            <iframe
              src="https://maps.google.com/maps?q=2460+Chestnut+Ave,+Kansas+City,+MO+64127&output=embed"
              title="Affordable Tree Care location"
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── Pre-footer CTA band ────────────────────────────────────── */}
      <section
        aria-label="Contact call to action"
        className="relative overflow-hidden"
        style={{ height: 380 }}
      >
        <img
          src={CTA_PHOTO}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={760}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.62)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <h2
            className="mb-4 max-w-2xl"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'hsl(60, 30%, 92%)',
              lineHeight: 0.95,
            }}
          >
            Free Estimate.<br />Same Week.
          </h2>
          <p className="mb-8 max-w-lg text-sm" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
            Call or use the form. We'll walk the property, give you a written number, and
            schedule around your calendar.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="tel:+18164574612"
              className="btn-primary"
              style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
            >
              <Phone size={14} strokeWidth={2.5} />
              (816) 457-4612
            </a>
            <Link
              to="/contact"
              className="btn-outline"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'hsl(60,30%,92%)' }}
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
