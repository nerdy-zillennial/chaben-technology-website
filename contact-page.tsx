'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const services = [
  'Digital Systems Integration',
  'IT Strategy & Advisory',
  'IT Staff Augmentation',
  'Managed Services',
  'Other / Not Sure Yet',
]

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    /*
      POST to '/__forms.html' — the static file in /public.
      This is Netlify's official pattern for Next.js App Router.
      Netlify intercepts this POST at the edge and records the submission.
      Posting to '/' does NOT work with Next.js App Router.
    */
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          'bot-field': '',
          ...form,
        }).toString(),
      })

      if (res.ok) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div>
      <Nav />

      {/* Hero */}
      <section className="page-hero pt-36 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="eyebrow mb-5" style={{ color: 'rgba(232,237,242,0.6)' }}>
            <div className="gold-rule-solid" />Partner With Us
          </div>
          <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.08 }}>
            Start a Conversation
          </h1>
          <p className="font-body text-white/60 max-w-xl" style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
            If you are ready to operate at a global standard, we would like to hear from you.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">

          {status === 'sent' ? (
            <div className="text-center p-12 border border-[rgba(13,30,58,0.08)]">
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center" style={{ background: '#B8892A' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-display font-bold text-navy text-2xl mb-3">Message Received</h3>
              <p className="font-body text-slate mb-8">Our team will respond within two business days.</p>
              <Link href="/" className="btn-primary">Return Home</Link>
            </div>
          ) : (
            <>
              {status === 'error' && (
                <div className="mb-6 p-4 border border-red-300 bg-red-50 text-red-700 font-ui text-sm">
                  Something went wrong. Please try again or email us directly at{' '}
                  <a href="mailto:enquiries@chabentech.com" className="underline">enquiries@chabentech.com</a>
                </div>
              )}

              <form
                name="contact"
                onSubmit={handleSubmit}
                className="p-8 lg:p-12 border border-[rgba(13,30,58,0.08)]"
              >
                {/* Hidden inputs required by Netlify - do not remove */}
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'none' }}>
                  <label>
                    Do not fill this field:{' '}
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <h2 className="font-display font-bold text-navy mb-2" style={{ fontSize: '1.8rem' }}>
                  Initiate a Conversation
                </h2>
                <p className="font-ui text-[10px] tracking-[0.15em] uppercase text-slate/50 mb-10">
                  All fields marked * are required
                </p>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Aminu Bello"
                      required
                      className="form-input"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label">Organisation *</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your company name"
                      required
                      className="form-input"
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="form-label">Role *</label>
                    <input
                      type="text"
                      name="role"
                      placeholder="e.g. CEO, CTO, Head of IT"
                      required
                      className="form-input"
                      value={form.role}
                      onChange={(e) => update('role', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                      className="form-input"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+234 000 000 0000"
                      className="form-input"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label">Service of Interest *</label>
                    <select
                      name="service"
                      required
                      className="form-input"
                      value={form.service}
                      onChange={(e) => update('service', e.target.value)}
                    >
                      <option value="" disabled>Select a Service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    placeholder="Briefly describe your technology challenge or what you are looking to achieve..."
                    required
                    rows={6}
                    className="form-input"
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-gold w-full justify-center"
                  style={{
                    opacity: status === 'sending' ? 0.7 : 1,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {status === 'sending' ? 'Sending...' : 'Submit Enquiry →'}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
