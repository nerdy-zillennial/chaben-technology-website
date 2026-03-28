'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const articles = [
  {
    category: 'IT Strategy',
    title: 'Why Africa\'s Enterprises Need Institutional-Grade Tech Infrastructure Now',
    excerpt: 'The gap between global digital standards and African enterprise infrastructure is closing — but not fast enough. Here\'s what boards must prioritise before 2028.',
    date: 'March 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=75',
    accent: '#1A6B9E',
    featured: true,
  },
  {
    category: 'Managed Services',
    title: 'The Managed Services Model: How Global Firms Are Scaling Without Hiring',
    excerpt: 'Staff augmentation through a managed services model has become the preferred growth strategy for international firms entering emerging markets.',
    date: 'February 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=75',
    accent: '#B8892A',
    featured: false,
  },
  {
    category: 'Digital Transformation',
    title: 'From Legacy to Cloud: A 90-Day Integration Framework for Enterprise Systems',
    excerpt: 'Most digital transformation projects fail at integration. Our field-tested framework reduces risk and accelerates delivery without disrupting operations.',
    date: 'January 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75',
    accent: '#1A6B9E',
    featured: false,
  },
  {
    category: 'IT Strategy',
    title: 'Building a Technology Governance Framework for the African Conglomerate',
    excerpt: 'As African holding companies grow in complexity, the need for formal technology governance has never been greater. This is what a sound framework looks like.',
    date: 'December 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=75',
    accent: '#B8892A',
    featured: false,
  },
  {
    category: 'Staff Augmentation',
    title: 'CTO-as-a-Service: When You Need Leadership Before You Need a Full-Time Hire',
    excerpt: 'For institutions in transition or expansion, a fractional CTO can provide the strategic direction of a senior executive without the permanent overhead.',
    date: 'November 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=75',
    accent: '#1A6B9E',
    featured: false,
  },
  {
    category: 'Digital Transformation',
    title: 'The True Cost of Delayed Digital Transformation in African Banking',
    excerpt: 'Legacy infrastructure in African financial institutions is not a technology problem — it is a strategic risk. The cost of delay compounds faster than most CFOs realise.',
    date: 'October 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=75',
    accent: '#B8892A',
    featured: false,
  },
]

const categories = ['All', 'IT Strategy', 'Managed Services', 'Digital Transformation', 'Staff Augmentation']

export default function InsightsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const featured = articles.find((a) => a.featured)
  const rest     = articles.filter((a) => !a.featured)

  return (
    <div>
      <Nav />

      {/* Page hero */}
      <section className="page-hero pt-36 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="eyebrow mb-5" style={{ color: 'rgba(232,237,242,0.6)' }}>
            <div className="gold-rule-solid" />Thought Leadership
          </div>
          <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.08 }}>
            Intelligence &amp; Insights
          </h1>
          <p className="font-body text-white/60 max-w-xl" style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
            Executive perspectives on technology strategy, digital transformation, and the institutions shaping Africa&apos;s digital future.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Category filter */}
          <div className="reveal flex flex-wrap gap-3 mb-14">
            {categories.map((c) => (
              <button
                key={c}
                className="font-ui text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-200"
                style={{
                  background: c === 'All' ? '#0D1E3A' : '#F7F9FC',
                  color: c === 'All' ? '#fff' : '#3E4E5E',
                  border: '1px solid rgba(13,30,58,0.1)',
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Featured article */}
          {featured && (
            <div className="reveal mb-14 group cursor-pointer service-card">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-72 lg:h-auto overflow-hidden">
                  <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'rgba(13,30,58,0.3)' }} />
                  <div className="absolute top-6 left-6">
                    <span className="font-ui text-[10px] font-bold tracking-widest uppercase px-3 py-1.5" style={{ background: featured.accent, color: '#fff' }}>
                      {featured.category}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className="font-ui text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 bg-white/90 text-navy">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <h2 className="font-display font-bold text-navy mb-4 group-hover:text-techblue transition-colors" style={{ fontSize: 'clamp(1.4rem, 2vw, 2rem)', lineHeight: 1.2 }}>
                    {featured.title}
                  </h2>
                  <p className="font-body text-slate mb-6" style={{ lineHeight: 1.75, fontSize: '0.97rem' }}>
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-ui text-xs text-slate/50">{featured.date} · {featured.readTime}</span>
                    <span className="font-ui text-xs font-semibold tracking-widest uppercase" style={{ color: featured.accent }}>
                      Read Article →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a, i) => (
              <article
                key={a.title}
                className="reveal service-card group cursor-pointer"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={a.image} alt={a.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'rgba(13,30,58,0.35)' }} />
                  <div className="absolute top-4 left-4">
                    <span className="font-ui text-[9px] font-bold tracking-widest uppercase px-2.5 py-1" style={{ background: a.accent, color: '#fff' }}>
                      {a.category}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display font-bold text-navy mb-3 group-hover:text-techblue transition-colors" style={{ fontSize: '1.12rem', lineHeight: 1.3 }}>
                    {a.title}
                  </h3>
                  <p className="font-body text-slate text-sm mb-5" style={{ lineHeight: 1.7 }}>{a.excerpt}</p>
                  <div className="flex items-center justify-between border-t border-[rgba(13,30,58,0.07)] pt-4">
                    <span className="font-ui text-[11px] text-slate/45">{a.date}</span>
                    <span className="font-ui text-[11px] font-semibold" style={{ color: a.accent }}>{a.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load more */}
          <div className="reveal text-center mt-14">
            <button className="btn-outline-navy">Load More Insights</button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20" style={{ background: '#F7F9FC' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="reveal eyebrow justify-center mb-5"><div className="gold-rule-solid" />Stay Informed</div>
          <h2 className="reveal font-display font-bold text-navy mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Executive Intelligence, Delivered
          </h2>
          <p className="reveal font-body text-slate mb-8" style={{ lineHeight: 1.75 }}>
            Monthly insights on technology strategy and digital transformation for African institutions.
          </p>
          <div className="reveal flex gap-3 max-w-sm mx-auto">
            <input type="email" placeholder="your@email.com" className="form-input flex-1 text-sm" />
            <button className="btn-gold flex-shrink-0 px-6">Subscribe</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
