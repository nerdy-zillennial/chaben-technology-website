'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact',  href: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const pathname = usePathname()
  const isHome   = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On inner pages always show white nav; on home transparent until scrolled
  const showWhite = !isHome || scrolled

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
      showWhite
        ? 'bg-white shadow-sm border-b border-[rgba(13,30,58,0.08)]'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative w-9 h-9">
            <Image
              src={showWhite ? '/logo-light.png' : '/logo-dark.png'}
              alt="Chaben Technology"
              fill className="object-contain" priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-display font-bold text-base tracking-widest transition-colors ${showWhite ? 'text-[#0D1E3A]' : 'text-white'}`}>
              CHABEN
            </span>
            <span className="font-ui text-[8px] font-semibold tracking-[0.25em] uppercase" style={{ color: '#B8892A' }}>
              Technology
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? 'active' : ''} ${showWhite ? 'text-[#3E4E5E] hover:text-[#0D1E3A]' : 'text-white/80 hover:text-white'}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link href="/contact" className="btn-gold text-xs px-6 py-3">
            Get In Touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-2 flex flex-col gap-1.5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`block w-6 h-px transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''} ${showWhite ? 'bg-navy' : 'bg-white'}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${open ? 'opacity-0' : ''} ${showWhite ? 'bg-navy' : 'bg-white'}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''} ${showWhite ? 'bg-navy' : 'bg-white'}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80' : 'max-h-0'}`}>
        <div className="bg-white border-t border-[rgba(13,30,58,0.08)] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={`nav-link text-slate ${pathname === l.href ? 'active text-navy' : 'text-slate'}`} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold text-center mt-2" onClick={() => setOpen(false)}>
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  )
}
