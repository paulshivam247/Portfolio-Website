import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(leftRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      gsap.to(rightRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        delay: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')
    setTimeout(() => {
      setFormState('sent')
      setTimeout(() => setFormState('idle'), 3000)
    }, 1500)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--bg-surface)',
    border: '1px solid rgba(44, 42, 36, 0.15)',
    borderRadius: '4px',
    padding: '14px 16px',
    fontFamily: '"Inter", sans-serif',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.7,
    color: 'var(--text-inverse)',
    outline: 'none',
    transition: 'border-color 200ms ease, box-shadow 200ms ease',
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        background: 'var(--bg-canvas)',
        padding: '120px 24px',
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        style={{ maxWidth: '1280px', margin: '0 auto' }}
      >
        {/* Left column */}
        <div ref={leftRef} className="opacity-0 -translate-x-[20px]">
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
            GET IN TOUCH
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 500,
              lineHeight: 1.15,
              color: 'var(--text-primary)',
              marginBottom: '20px',
            }}
          >
            Let's Discuss Your Next Project
          </h2>
          <p
            className="font-body"
            style={{
              fontSize: '1rem',
              fontWeight: 400,
              lineHeight: 1.7,
              color: 'var(--text-primary)',
              opacity: 0.85,
              maxWidth: '400px',
              marginBottom: '40px',
            }}
          >
            I'm actively seeking opportunities in equity research, FP&A, and financial analytics. Whether you're hiring, collaborating, or just want to exchange ideas about markets and models — I'd love to connect.
          </p>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a
              href="mailto:shibsankarpaul@email.com"
              className="font-body flex items-center gap-3 group"
              style={{
                fontSize: '1rem',
                fontWeight: 400,
                color: 'var(--text-primary)',
                opacity: 0.7,
                textDecoration: 'none',
                transition: 'opacity 200ms ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.7' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              shibsankarpaul@email.com
            </a>
            <div
              className="font-body flex items-center gap-3"
              style={{
                fontSize: '1rem',
                fontWeight: 400,
                color: 'var(--text-primary)',
                opacity: 0.7,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Agartala, Tripura, India
            </div>
            <a
              href="https://linkedin.com/in/shibsankarpaul"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body flex items-center gap-3 group"
              style={{
                fontSize: '1rem',
                fontWeight: 400,
                color: 'var(--text-primary)',
                opacity: 0.7,
                textDecoration: 'none',
                transition: 'opacity 200ms ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.7' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              linkedin.com/in/shibsankarpaul
            </a>
          </div>
        </div>

        {/* Right column - Form */}
        <div
          ref={rightRef}
          className="opacity-0 translate-x-[20px]"
          style={{
            background: 'var(--text-primary)',
            borderRadius: '8px',
            padding: '40px',
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input
              type="text"
              placeholder="Your name"
              required
              style={inputStyle}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184, 92, 56, 0.1)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(44, 42, 36, 0.15)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
            <input
              type="email"
              placeholder="Your email address"
              required
              style={inputStyle}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184, 92, 56, 0.1)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(44, 42, 36, 0.15)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
            <select
              required
              defaultValue=""
              style={{
                ...inputStyle,
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%232C2A24' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 16px center',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184, 92, 56, 0.1)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(44, 42, 36, 0.15)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <option value="" disabled>Select a subject</option>
              <option value="opportunity">Opportunity</option>
              <option value="collaboration">Collaboration</option>
              <option value="mentorship">Mentorship</option>
              <option value="general">General Inquiry</option>
            </select>
            <textarea
              rows={5}
              placeholder="Your message"
              required
              style={{
                ...inputStyle,
                resize: 'vertical',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184, 92, 56, 0.1)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(44, 42, 36, 0.15)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
            <button
              type="submit"
              disabled={formState !== 'idle'}
              className="font-body uppercase"
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                lineHeight: 1.4,
                background: formState === 'sent' ? '#5A7D5A' : 'var(--accent)',
                color: 'var(--text-primary)',
                border: 'none',
                cursor: formState === 'idle' ? 'pointer' : 'default',
                transition: 'background 200ms ease',
              }}
              onMouseEnter={(e) => {
                if (formState === 'idle') {
                  e.currentTarget.style.background = 'var(--accent-hover)'
                }
              }}
              onMouseLeave={(e) => {
                if (formState === 'sent') {
                  e.currentTarget.style.background = '#5A7D5A'
                } else {
                  e.currentTarget.style.background = 'var(--accent)'
                }
              }}
            >
              {formState === 'idle' && 'Send Message'}
              {formState === 'sending' && 'Sending...'}
              {formState === 'sent' && 'Message Sent \u2713'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
