import { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? 'rgba(254, 252, 247, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'background 400ms ease, backdrop-filter 400ms ease',
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '20px 24px',
          }}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="font-display"
            style={{
              fontSize: '1.125rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
              color: scrolled ? 'var(--text-inverse)' : 'var(--text-primary)',
              transition: 'color 400ms ease',
              textDecoration: 'none',
            }}
          >
            Shib Sankar Paul
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="group relative font-body"
                style={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  lineHeight: 1,
                  color: scrolled ? 'var(--text-inverse)' : 'var(--text-primary)',
                  transition: 'color 400ms ease',
                  textDecoration: 'none',
                }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  style={{
                    backgroundColor: scrolled ? 'var(--text-inverse)' : 'var(--text-primary)',
                    bottom: '-4px',
                  }}
                />
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[6px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-px transition-colors duration-400"
              style={{
                backgroundColor: scrolled ? 'var(--text-inverse)' : 'var(--text-primary)',
              }}
            />
            <span
              className="block w-6 h-px transition-colors duration-400"
              style={{
                backgroundColor: scrolled ? 'var(--text-inverse)' : 'var(--text-primary)',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ background: 'var(--bg-canvas)' }}
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-display"
              style={{
                fontSize: '2.5rem',
                fontWeight: 400,
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                opacity: 0,
                animation: `fadeIn 400ms ease forwards ${i * 80}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}
    </>
  )
}
