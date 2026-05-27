import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const bodyRefs = useRef<HTMLParagraphElement[]>([])
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      bodyRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.12 * i,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      })

      gsap.to(imageRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        background: 'var(--bg-surface)',
        padding: '120px 24px',
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-start"
        style={{ maxWidth: '1280px', margin: '0 auto' }}
      >
        {/* Left column - Text */}
        <div>
          <p
            className="font-body uppercase"
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              lineHeight: 1.4,
              letterSpacing: '0.04em',
              color: 'var(--accent)',
              marginBottom: '16px',
            }}
          >
            ABOUT
          </p>
          <h2
            ref={headingRef}
            className="font-display opacity-0 translate-y-[30px]"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 500,
              lineHeight: 1.15,
              color: 'var(--text-inverse)',
              marginBottom: '32px',
            }}
          >
            From Trading Floors to Financial Models
          </h2>
          <p
            ref={(el) => { if (el) bodyRefs.current[0] = el }}
            className="font-body opacity-0 translate-y-[30px]"
            style={{
              fontSize: '1rem',
              fontWeight: 400,
              lineHeight: 1.7,
              color: 'var(--text-inverse)',
              opacity: 0,
              marginBottom: '20px',
            }}
          >
            I started my career managing HNI portfolios at ICICI Securities, where I developed a deep intuition for risk, valuation, and market psychology. That foundation led me to four and a half years as an independent options trader — a role that demands quantitative discipline, real-time decision-making, and absolute accountability for P&L.
          </p>
          <p
            ref={(el) => { if (el) bodyRefs.current[1] = el }}
            className="font-body opacity-0 translate-y-[30px]"
            style={{
              fontSize: '1rem',
              fontWeight: 400,
              lineHeight: 1.7,
              color: 'var(--text-inverse)',
              opacity: 0,
              marginBottom: '24px',
            }}
          >
            Today, I'm channeling that markets experience into structured financial analysis. Through the Corporate Finance Institute's FMVA program — 18 courses completed with multiple perfect scores — I'm building rigorous modeling capabilities in Excel, DCF valuation, and scenario analysis, while expanding my technical toolkit with Python, SQL, and Power BI.
          </p>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="font-body inline-block group"
            style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: 'var(--accent)',
              textDecoration: 'none',
            }}
          >
            <span className="relative">
              View My Projects
              <span
                className="absolute bottom-0 left-0 w-full h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ backgroundColor: 'var(--accent)' }}
              />
            </span>
            <span style={{ marginLeft: '4px' }}>&rarr;</span>
          </a>
        </div>

        {/* Right column - Image */}
        <div
          ref={imageRef}
          className="opacity-0 translate-x-[30px]"
        >
          <img
            src="/images/portrait.jpg"
            alt="Shib Sankar Paul"
            style={{
              width: '100%',
              borderRadius: '8px',
              boxShadow: '0 8px 32px rgba(44, 42, 36, 0.12)',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </section>
  )
}
