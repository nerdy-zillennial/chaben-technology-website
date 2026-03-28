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

    const formData = new URLSearchParams()
    formData.append('form-name', 'contact')
    Object.entries(form).forEach(([key, value]) => formData.append(key, value))

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
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
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-white text-4xl font-bold mb-4">Partner With Us</h1>
          <p className="text-white/60 max-w-xl">
            If you are ready to operate at a global standard, we would like to hear from you.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">

          {status === 'sent' ? (
            <div className="text-center p-10 border">
              <h3 className="text-2xl font-bold mb-3">Message Received</h3>
              <p>We&apos;ll get back to you shortly.</p>
              <Link href="/" className="btn-primary mt-6 inline-block">Return Home</Link>
            </div>
          ) : (
            <>
              {status === 'error' && (
                <div className="mb-6 p-4 border border-red-300 bg-red-50 text-red-700 font-ui text-sm">
                  Something went wrong. Please try again or email us directly at enquiries@chabentech.com
                </div>
              )}

              {/* 
                IMPORTANT: Netlify detects this form at BUILD TIME by scanning HTML.
                The hidden input and data-netlify="true" are required.
                The `name="contact"` must match the form-name value in handleSubmit.
              */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="p-8 border"
              >
                {/* Required hidden inputs for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                {/* Honeypot spam field - hidden from real users */}
                <p style={{ display: 'none' }}>
                  <label>Don&apos;t fill this out: <input name="bot-field" /></label>
                </p>

                <h2 className="text-2xl font-bold mb-2">Initiate a Conversation</h2>
                <p className="font-ui text-xs text-slate/60 tracking-wide mb-8">
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

                <div className="mb-6">
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
                  style={{ opacity: status === 'sending' ? 0.7 : 1 }}
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
