import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TECHNICAL_SKILLS = [
  'Excel (Financial Modeling)',
  'Python (Pandas, NumPy)',
  'SQL',
  'Power BI',
  'DAX',
  'Statistics',
  'Data Visualization',
]

const DOMAIN_SKILLS = [
  'DCF Valuation',
  'Comparable Company Analysis',
  'Precedent Transactions',
  'Financial Statement Analysis',
  'Options Trading',
  'Risk Management',
  'Portfolio Management',
  'P&L Accountability',
]

const SCORES = [
  { label: 'Forecasting Techniques', score: '100%' },
  { label: 'Scenario & Sensitivity Analysis', score: '100%' },
  { label: 'Budgeting & Forecasting', score: '100%' },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const techRef = useRef<HTMLDivElement>(null)
  const domainRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      })

      if (techRef.current) {
        const tags = techRef.current.querySelectorAll('.skill-tag')
        gsap.to(tags, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        })
      }

      if (domainRef.current) {
        const tags = domainRef.current.querySelectorAll('.skill-tag')
        gsap.to(tags, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        })
      }

      gsap.to(cardRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        background: 'var(--bg-accent)',
        padding: '120px 24px',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2
          ref={headingRef}
          className="font-display opacity-0 translate-y-[30px]"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 500,
            lineHeight: 1.15,
            color: 'var(--text-inverse)',
            textAlign: 'center',
            marginBottom: '56px',
          }}
        >
          Tools & Certifications
        </h2>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ marginBottom: '48px' }}>
          {/* Technical Skills */}
          <div>
            <h3
              className="font-display"
              style={{
                fontSize: '1.25rem',
                fontWeight: 500,
                color: 'var(--text-inverse)',
                marginBottom: '20px',
              }}
            >
              Technical Skills
            </h3>
            <div ref={techRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {TECHNICAL_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag font-body opacity-0"
                  style={{
                    padding: '10px 20px',
                    borderRadius: '100px',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    lineHeight: 1.4,
                    background: 'var(--bg-surface)',
                    color: 'var(--text-inverse)',
                    border: '1px solid rgba(44, 42, 36, 0.1)',
                    transform: 'scale(0.95)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Domain Expertise */}
          <div>
            <h3
              className="font-display"
              style={{
                fontSize: '1.25rem',
                fontWeight: 500,
                color: 'var(--text-inverse)',
                marginBottom: '20px',
              }}
            >
              Domain Expertise
            </h3>
            <div ref={domainRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {DOMAIN_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag font-body opacity-0"
                  style={{
                    padding: '10px 20px',
                    borderRadius: '100px',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    lineHeight: 1.4,
                    background: 'var(--bg-surface)',
                    color: 'var(--text-inverse)',
                    border: '1px solid rgba(44, 42, 36, 0.1)',
                    transform: 'scale(0.95)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FMVA Credential */}
        <div
          id="credentials"
          ref={cardRef}
          className="opacity-0 translate-y-[20px]"
          style={{
            background: 'var(--bg-surface)',
            borderRadius: '8px',
            padding: '32px',
            boxShadow: '0 4px 16px rgba(44, 42, 36, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div className="flex items-start gap-4">
            {/* Badge Icon */}
            <div
              style={{
                width: '48px',
                height: '48px',
                flexShrink: 0,
                color: 'var(--accent)',
              }}
            >
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" />
                <path d="M24 4v20" />
                <path d="M24 24l18-10" />
                <path d="M24 24L6 14" />
                <path d="M16 32l8 4 8-4" />
                <circle cx="24" cy="14" r="3" />
              </svg>
            </div>

            <div>
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                  fontWeight: 400,
                  lineHeight: 1.25,
                  color: 'var(--text-inverse)',
                  marginBottom: '4px',
                }}
              >
                Financial Modeling & Valuation Analyst (FMVA)
              </h3>
              <p
                className="font-body"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: 'var(--text-muted)',
                  marginBottom: '16px',
                }}
              >
                Corporate Finance Institute — 18 of 18 Courses Completed
              </p>

              {/* Score pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {SCORES.map((s) => (
                  <span
                    key={s.label}
                    className="font-body"
                    style={{
                      padding: '4px 12px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      lineHeight: 1.4,
                      background: 'rgba(184, 92, 56, 0.1)',
                      color: 'var(--accent)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {s.label}: {s.score}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
