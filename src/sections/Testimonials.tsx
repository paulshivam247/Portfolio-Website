import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(cardRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
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
      ref={sectionRef}
      style={{
        background: 'var(--bg-cream)',
        padding: '120px 24px',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p
          className="font-body uppercase text-center"
          style={{
            fontSize: '0.75rem',
            fontWeight: 500,
            lineHeight: 1.4,
            letterSpacing: '0.04em',
            color: 'var(--accent)',
            marginBottom: '16px',
          }}
        >
          ENDORSEMENTS
        </p>
        <h2
          className="font-display text-center"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 500,
            lineHeight: 1.15,
            color: 'var(--text-inverse)',
            marginBottom: '48px',
          }}
        >
          What Colleagues Say
        </h2>

        <div
          ref={cardRef}
          className="opacity-0 translate-y-[30px]"
          style={{
            background: 'var(--bg-surface)',
            borderRadius: '8px',
            padding: '40px',
            boxShadow: '0 4px 24px rgba(44, 42, 36, 0.06)',
            position: 'relative',
          }}
        >
          {/* Large quotation mark */}
          <span
            className="font-display"
            style={{
              position: 'absolute',
              top: '20px',
              left: '24px',
              fontSize: '6rem',
              fontWeight: 400,
              lineHeight: 1,
              color: 'var(--accent)',
              opacity: 0.3,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            &ldquo;
          </span>

          <blockquote
            className="font-body"
            style={{
              fontSize: '1.25rem',
              fontWeight: 400,
              lineHeight: 1.65,
              color: 'var(--text-inverse)',
              fontStyle: 'italic',
              position: 'relative',
              zIndex: 1,
              paddingTop: '20px',
            }}
          >
            Shib brings a rare combination of market instinct and analytical discipline. His transition from active trading to structured financial modeling shows a commitment to depth that few professionals demonstrate. The rigor in his DCF models and the clarity of his research reports reflect someone who understands that good analysis is about asking the right questions, not just running the numbers.
          </blockquote>

          <p
            className="font-body uppercase"
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              lineHeight: 1.4,
              letterSpacing: '0.04em',
              color: 'var(--text-muted)',
              marginTop: '24px',
            }}
          >
            — Mentor, FMVA Program
          </p>
        </div>
      </div>
    </section>
  )
}
