import { useState, FormEvent } from 'react'
import { Phone, MapPin, Clock } from 'lucide-react'

interface FormState {
  name: string
  phone: string
  email: string
  service: string
  message: string
  company_website: string  // honeypot
}

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
  company_website: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (form.company_website) return  // honeypot catch
    setStatus('success')
    setForm(initialForm)
  }

  return (
    <>
      {/* Header */}
      <div
        className="pt-28 pb-16 px-6 md:px-12 lg:px-16"
        style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="max-w-6xl mx-auto">
          <span className="section-label">Get in Touch</span>
          <h1
            className="mt-3 mb-4"
            style={{ fontSize: 'var(--text-h1)', fontFamily: 'var(--font-heading)' }}
          >
            Request a Free Estimate
          </h1>
          <p className="max-w-xl text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            Call or fill out the form. We respond same business day and schedule the estimate
            at your convenience.
          </p>
        </div>
      </div>

      <section
        className="px-6 md:px-12 lg:px-16"
        style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Contact info sidebar */}
          <div className="md:col-span-1 flex flex-col gap-8">
            <div>
              <span className="section-label mb-4 block">Contact</span>
              <ul className="flex flex-col gap-6 list-none">
                <li className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                    style={{ background: 'var(--color-accent-subtle)', border: '1px solid var(--color-border)' }}
                  >
                    <Phone size={16} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>Phone</div>
                    <a
                      href="tel:+18164574612"
                      className="text-sm font-semibold"
                      style={{ color: 'var(--color-text)' }}
                    >
                      (816) 457-4612
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                    style={{ background: 'var(--color-accent-subtle)', border: '1px solid var(--color-border)' }}
                  >
                    <MapPin size={16} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>Address</div>
                    <p className="text-sm" style={{ color: 'var(--color-text)' }}>
                      2460 Chestnut Ave<br />
                      Kansas City, MO 64127
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                    style={{ background: 'var(--color-accent-subtle)', border: '1px solid var(--color-border)' }}
                  >
                    <Clock size={16} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>Hours</div>
                    <p className="text-sm" style={{ color: 'var(--color-text)' }}>
                      Mon–Fri: 7am – 6pm<br />
                      Sat: 8am – 4pm<br />
                      Sun: Emergency only
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div
              className="relative overflow-hidden"
              style={{ paddingBottom: '75%', height: 0, border: '1px solid var(--color-border)' }}
            >
              <iframe
                src="https://maps.google.com/maps?q=2460+Chestnut+Ave,+Kansas+City,+MO+64127&output=embed"
                title="Affordable Tree Care map"
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-2">
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ border: '1px solid var(--color-border)', padding: '2rem', background: 'var(--color-surface)' }}
            >
              <h2
                className="mb-6"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h3)' }}
              >
                Estimate Request
              </h2>

              {/* Honeypot */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="company_website">Website (leave blank)</label>
                <input
                  id="company_website"
                  name="company_website"
                  type="text"
                  value={form.company_website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm"
                    style={{
                      background: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text)',
                      outline: 'none',
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm"
                    style={{
                      background: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text)',
                      outline: 'none',
                    }}
                    placeholder="(816) 000-0000"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm"
                  style={{
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text)',
                    outline: 'none',
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="service"
                  className="block text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm"
                  style={{
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    color: form.service ? 'var(--color-text)' : 'var(--color-text-muted)',
                    outline: 'none',
                  }}
                >
                  <option value="">Select a service...</option>
                  <option value="removal">Tree Removal</option>
                  <option value="trimming">Tree Trimming</option>
                  <option value="stump">Stump Grinding</option>
                  <option value="storm">Emergency Storm Cleanup</option>
                  <option value="dead">Dead Wood Removal</option>
                  <option value="assessment">Tree Health Assessment</option>
                  <option value="other">Other / Not sure</option>
                </select>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm resize-none"
                  style={{
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text)',
                    outline: 'none',
                  }}
                  placeholder="Describe the tree(s), size, access, and any urgency..."
                />
              </div>

              <div role="status" aria-live="polite" className="mb-4">
                {status === 'success' && (
                  <p
                    className="text-sm font-semibold"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Request sent. We'll follow up within one business day.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm" style={{ color: '#e87070' }}>
                    Something went wrong. Call us directly at (816) 457-4612.
                  </p>
                )}
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                Send Estimate Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
