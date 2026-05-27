import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    num: '01',
    title: 'Infosys Equity Research',
    tags: 'DCF, CCA, Comparable Analysis',
    desc: 'A comprehensive valuation model for Infosys Ltd. featuring three-statement forecasting, DCF with perpetuity and exit multiple approaches, and trading/transaction comparables. Concluded with a BUY rating and target price derivation.',
    image: '/images/project-01.jpg',
  },
  {
    num: '02',
    title: 'Retail Analytics Suite',
    tags: 'Python, RFM, Market Basket',
    desc: 'End-to-end retail analytics covering RFM customer segmentation, market basket analysis for cross-sell optimization, churn prediction modeling, and an interactive Power BI dashboard with 5 connected report pages.',
    image: '/images/project-02.jpg',
  },
  {
    num: '03',
    title: 'Sales Analytics with ML',
    tags: 'Pandas, EDA, Power BI',
    desc: 'Analyzed 2,823 retail transactions across 19 countries using Python. Identified that 70% of revenue concentrates in just 5 markets, Q4 seasonality drives 40% of annual sales, and a 5-point discount governance improvement could unlock $257K in additional margin.',
    image: '/images/project-03.jpg',
  },
  {
    num: '04',
    title: 'Credit Card Market Study',
    tags: 'SQL, Segmentation, Insights',
    desc: 'Segmented credit card customers by behavior and demographics using SQL, identifying high-value clusters and churn-risk profiles. Delivered strategic recommendations for targeted product positioning and retention campaigns.',
    image: '/images/project-04.jpg',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const [activePanel, setActivePanel] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(galleryRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
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

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        background: 'var(--bg-canvas)',
        padding: '120px 0',
      }}
    >
      {/* Section header */}
      <div className="text-center" style={{ marginBottom: '48px', padding: '0 24px' }}>
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
          SELECTED WORK
        </p>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 500,
            lineHeight: 1.15,
            color: 'var(--text-primary)',
          }}
        >
          Projects & Case Studies
        </h2>
      </div>

      {/* Gallery */}
      <div
        ref={galleryRef}
        className="opacity-0 translate-y-[40px]"
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          width: '100%',
          height: isMobile ? 'auto' : '60vh',
          gap: '8px',
          padding: '0 8px',
        }}
      >
        {PROJECTS.map((project, i) => {
          const isExpanded = isMobile ? activePanel === i : undefined
          return (
            <div
              key={project.num}
              className="gallery-panel"
              onClick={() => isMobile && setActivePanel(activePanel === i ? null : i)}
              style={{
                flex: isMobile ? 'none' : 1,
                height: isMobile
                  ? isExpanded
                    ? '480px'
                    : '280px'
                  : '100%',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: isMobile
                  ? 'height 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  : 'flex 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  const siblings = e.currentTarget.parentElement?.querySelectorAll('.gallery-panel')
                  siblings?.forEach((sib) => {
                    if (sib !== e.currentTarget) (sib as HTMLElement).style.flex = '0.6'
                  })
                  e.currentTarget.style.flex = '4'
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  const siblings = e.currentTarget.parentElement?.querySelectorAll('.gallery-panel')
                  siblings?.forEach((sib) => {
                    (sib as HTMLElement).style.flex = '1'
                  })
                }
              }}
            >
              {/* Background image */}
              <div
                className="panel-bg"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1)'
                }}
              />

              {/* Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(44, 42, 36, 0.85) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '32px',
                  zIndex: 2,
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: '3rem',
                    fontWeight: 400,
                    color: 'rgba(254, 252, 247, 0.3)',
                    display: 'block',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}
                >
                  {project.num}
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                    fontWeight: 400,
                    lineHeight: 1.25,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="font-body uppercase"
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    lineHeight: 1.4,
                    color: 'var(--text-muted)',
                    marginBottom: '12px',
                  }}
                >
                  {project.tags}
                </p>
                <div
                  className="panel-desc"
                  style={{
                    maxHeight: isMobile
                      ? isExpanded
                        ? '200px'
                        : '0'
                      : '0',
                    opacity: isMobile
                      ? isExpanded
                        ? 1
                        : 0
                      : 0,
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    transitionDelay: isMobile && isExpanded ? '0.2s' : '0s',
                  }}
                >
                  <p
                    className="font-body"
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      lineHeight: 1.6,
                      color: 'var(--text-primary)',
                      opacity: 0.8,
                    }}
                  >
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
