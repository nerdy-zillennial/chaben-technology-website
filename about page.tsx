'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const pillars = [
  {
    title: 'Authority',
    body: 'We speak and act from earned expertise. Our advisory is delivered at board level — precise, evidence-based, and built on institutional rigour.',
    color: '#0D1E3A',
  },
  {
    title: 'Synergy',
    body: 'Every technology decision connects. We design systems that communicate, integrate, and amplify one another — creating compound returns on infrastructure investment.',
    color: '#1A6B9E',
  },
  {
    title: 'Modernity',
    body: 'We build for 2030, not 2020. Our stack, delivery model, and talent pool are calibrated to emerging global digital infrastructure standards.',
    color: '#B8892A',
  },
]

const milestones = [
  { year: '2018', event: 'Chaben Holdings incorporated — integrated value creation mandate established across six sectors.' },
  { year: '2020', event: 'Chaben Technology Solution Ltd founded — first enterprise systems integration project delivered.' },
  { year: '2022', event: 'Managed Services model launched — first offshore engineering team deployed internationally.' },
  { year: '2024', event: 'Operations expanded to 12 countries — 200+ enterprise clients across Africa and Europe.' },
  { year: '2026', event: 'Brand Identity v2.0 launched — Chaben Technology positioned as Africa\'s institutional technology partner.' },
]

const stats = [
  { value: '12+', label: 'Countries' },
  { value: '200+', label: 'Clients' },
  { value: '98%', label: 'Retention' },
  { value: '6', label: 'Group Companies' },
]

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <Nav />

      {/* Page hero */}
      <section className="page-hero pt-36 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="eyebrow mb-5" style={{ color: 'rgba(232,237,242,0.6)' }}>
            <div className="gold-rule-solid" />Our Story
          </div>
          <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.08 }}>
            About Chaben Technology
          </h1>
          <p className="font-body text-white/60 max-w-xl" style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
            A Chaben Holdings Company — building the digital institutions that will define Africa&apos;s next century.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-[rgba(13,30,58,0.07)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="stat-box"
                style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(13,30,58,0.07)' : 'none' }}
              >
                <p className="font-display font-bold text-navy mb-1" style={{ fontSize: '2.5rem' }}>{s.value}</p>
                <p className="font-ui text-[10px] tracking-[0.15em] uppercase text-slate">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="reveal eyebrow mb-5"><div className="gold-rule-solid" />Who We Are</div>
              <h2 className="reveal font-display font-bold text-navy mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', lineHeight: 1.1 }}>
                Chaben Technology Solution Ltd
              </h2>
              <p className="reveal font-body text-slate mb-5" style={{ lineHeight: 1.8, fontSize: '1rem' }}>
                Chaben Technology Solution Ltd is the technology arm of Chaben Holdings — a proprietary investment conglomerate built on the philosophy of integrated value creation across high-impact sectors.
              </p>
              <p className="reveal font-body text-slate mb-5" style={{ lineHeight: 1.8, fontSize: '1rem' }}>
                We are not a technology vendor. We are a technology institution. Every engagement we take on is approached with the permanence and rigour of an institutional mandate — not a project timeline.
              </p>
              <p className="reveal font-body text-slate mb-8" style={{ lineHeight: 1.8, fontSize: '1rem' }}>
                Our mission is to modernise African business infrastructure, deliver executive-level technology counsel, and provide elite technology talent to international firms through a Managed Services model — local in execution, global in standard.
              </p>
              <div className="reveal flex gap-4">
                <Link href="/contact" className="btn-primary">Work With Us</Link>
                <Link href="/services" className="btn-outline-navy">Our Services</Link>
              </div>
            </div>

            <div className="reveal relative h-96 lg:h-[480px]">
              <div className="absolute inset-0 overflow-hidden" style={{ border: '1px solid rgba(13,30,58,0.1)' }}>
                <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=75" alt="Modern office" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DNA / Pillars */}
      <section id="dna" className="py-24" style={{ background: '#F7F9FC' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="reveal text-center mb-16">
            <div className="eyebrow justify-center mb-5"><div className="gold-rule-solid" />Our DNA</div>
            <h2 className="font-display font-bold text-navy mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.1 }}>
              The Chaben Brand Pillars
            </h2>
            <p className="font-body text-slate max-w-2xl mx-auto" style={{ lineHeight: 1.75 }}>
              Every service, every engagement, and every engineer we deploy is guided by three founding principles inherited from the Chaben Holdings mandate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="reveal p-10"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(13,30,58,0.07)',
                  borderTop: `3px solid ${p.color}`,
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <h3 className="font-display font-bold text-navy mb-4" style={{ fontSize: '1.6rem' }}>{p.title}</h3>
                <p className="font-body text-slate text-sm" style={{ lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="reveal mt-16 pt-12 border-t border-[rgba(13,30,58,0.08)] text-center">
            <blockquote className="font-display italic text-navy/50 max-w-2xl mx-auto" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)', lineHeight: 1.5 }}>
              &ldquo;We do not build for the next quarter. We build for the next generation.&rdquo;
            </blockquote>
            <p className="font-ui text-[10px] tracking-[0.2em] uppercase mt-4 text-gold">Chaben Holdings — Integrated Value Creation</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="reveal eyebrow mb-6"><div className="gold-rule-solid" />Our Journey</div>
          <h2 className="reveal font-display font-bold text-navy mb-14" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
            From Founding to Institution
          </h2>

          <div className="relative pl-12">
            <div className="absolute left-5 top-2 bottom-2 w-px" style={{ background: 'rgba(184,137,42,0.2)' }} />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={m.year} className="reveal relative group" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div
                    className="absolute -left-[31px] top-1 w-3 h-3 rounded-full border-2 border-white transition-transform duration-300 group-hover:scale-125"
                    style={{ background: '#B8892A', boxShadow: '0 0 0 2px #B8892A' }}
                  />
                  <span className="font-ui text-xs font-bold tracking-widest uppercase text-gold block mb-2">{m.year}</span>
                  <p className="font-body text-slate" style={{ lineHeight: 1.75, fontSize: '0.97rem' }}>{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="py-20" style={{ background: '#0D1E3A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="reveal eyebrow mb-5" style={{ color: 'rgba(184,137,42,1)' }}><div className="gold-rule-solid" />Where We Operate</div>
              <h2 className="reveal font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                Present Across 12+ Countries
              </h2>
              <p className="reveal font-body text-white/55 mb-8" style={{ lineHeight: 1.8 }}>
                From the commercial capitals of West Africa to the financial centres of Europe — we are where our clients need us.
              </p>
              <div className="reveal grid grid-cols-2 gap-3">
                {['West Africa', 'East Africa', 'Southern Africa', 'Europe & Middle East'].map((r) => (
                  <div key={r} className="px-4 py-3" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <span className="font-ui text-xs font-semibold tracking-wider text-white/60">{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal relative h-64 overflow-hidden" style={{ border: '1px solid rgba(184,137,42,0.2)' }}>
              <Image src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800&q=75" alt="Global operations" fill className="object-cover opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display font-bold text-white" style={{ fontSize: '3.5rem' }}>12+</p>
                  <p className="font-ui text-xs tracking-widest uppercase text-gold">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
