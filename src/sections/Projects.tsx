import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router-dom'


gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    num: '01',
    slug: 'infosys-equity-research',
    title: 'Infosys Equity Research',
    tags: ['DCF', 'Financial Modeling', 'Valuation'],

    desc: 'Built a comprehensive equity research model for Infosys including DCF valuation, comparable company analysis, and target price estimation.',
    image: '/images/project-01.jpg',

    overview:
      'This project focused on building a full equity research report and valuation model for Infosys Ltd. using DCF valuation, comparable company analysis, and financial forecasting techniques.',

    deliverables: [
      {
        name: 'Excel Financial Model',
        type: 'pdf',
        link: 'https://1drv.ms/b/c/bb358f3ab39ffd4d/IQDckZyODxxmQ7ZBhwfgvSayAaVUws1azEFHtepvEJQ63AI',
      },
      {
        name: 'Equity Research Report PDF',
        type: 'pdf',
        link: 'https://1drv.ms/b/c/bb358f3ab39ffd4d/IQAJ8KBKKEVCSryGTqXcaXlbAaqvTExH93JnM6_Rl-MeXqM?e=RYzbIW',
      },
      {
        name: 'Infosys Limited — Equity Research Report (PPT)',
        type: 'ppt',
        link: 'https://1drv.ms/p/c/bb358f3ab39ffd4d/IQC9DMa7wGsNT7G7baZsIXQtAezzHY6zgwz9lIMrrN46b1U?e=p8aq9l',
      },
      {
        name: 'Presentation Video',
        type: 'video',
        link: 'https://youtu.be/3lCwiI4hY7Q',
      },
    ],
  },
  {
    num: '02',
    slug: 'retail-analytics-suite',
    title: 'Retail Store Sales & Customer Analytics (Exploratory + Predictive)',

    tags: ['Python', 'RFM', 'Market Basket'],

    desc: 'End-to-end retail analytics covering RFM customer segmentation, market basket analysis for cross-sell optimization, churn prediction modeling, and an interactive Power BI dashboard with 5 connected report pages.',
    
    image: '/images/project-02.jpg',

    overview: `
      An end-to-end retail analytics project covering 2,823 transactions
      across 92 customers and 19 countries from 2003 to 2005.

      The project spans the full analytics pipeline — from raw data cleaning
      through exploratory analysis, customer segmentation, and predictive
      scoring — delivered through a 5-page interactive Power BI dashboard.
    `,

    theProblem:
      'A retail business with healthy operational metrics but no structured view of where revenue risk was concentrated, which customers were most valuable, whether discounting strategy was working, and which products had untapped cross-sell potential.',

    whatIDid: `
      Data Preparation

      Cleaned and standardized raw transactional data including country and state name inconsistencies.

      Resolved 53% missing state values using country-level lookup logic.

      Discovered and handled Python's default treatment of the string 'NA' as NaN — a silent data corruption issue that would have distorted geographic analysis.

      Exploratory Data Analysis

      Performed time series analysis after converting order dates to the correct dtype.

      Built custom YoY and QoQ growth logic in Pandas to handle partial year and quarter comparisons — a trap that tools like Power BI handle automatically but Pandas does not.

      Market & Concentration Analysis

      Quantified geographic revenue concentration.

      Found that 70%+ of revenue originates from 5 countries, with USA contributing 36% of global revenue and California alone accounting for 43% of USA revenue — a significant single-market dependency risk.

      Product Analysis & Market Basket

      Analysed revenue performance across 7 product lines.

      Conducted market basket analysis to identify co-purchase patterns.

      Classic Cars and Vintage Cars co-occurred in 101 orders — the strongest product affinity pair.

      Estimated a 4.33% revenue uplift from a bundling strategy at a 10% conversion rate.

      Customer Segmentation — RFM

      Segmented 92 customers into 6 behavioural groups using Recency, Frequency, and Monetary scoring.

      Champions — just 15% of the customer base — generate 33%+ of total revenue.

      Top 5 customers alone account for 21%+ of revenue, indicating high customer concentration risk alongside geographic concentration.

      Discount & Churn Analysis

      Calculated weighted average discount per transaction and found near-zero correlation (0.03) between discount percentage and quantity ordered — discounting is not driving volume.

      Classic Cars, the highest revenue product line, carries a 23%+ average discount.

      A 5 percentage-point improvement in discount governance is estimated to unlock ~$257K in incremental revenue without increasing sales volume.

      Derived heuristic churn probability scores from RFM segment recency and frequency profiles.

      Power BI Dashboard

      Built a 5-page interactive report — Overview, Sales Trends, Product Performance, Customer RFM, and Market Analysis — with consistent navigation, cross-page slicers, a live data ticker, and custom DAX measures including weighted average discount, RFM-based churn probability, cross-category rate, and market concentration rate.
      `,

keyFindings: [
    'Top 5 countries generate 70%+ of revenue',
    'USA contributes 36% of global revenue',
    'California contributes 43% of USA revenue',
    'Q4 dominates every year with sharp Q1 slowdowns',
    '14 champion customers generate 33% of total revenue',
    'Discount-volume correlation is only 0.03',
    '$257K revenue recovery opportunity from discount optimization',
    'Classic Cars × Vintage Cars bundling shows 4.33% uplift potential',
    '94.46% order success rate',
  ],

technicalChallenges: [
  "Python's silent 'NA' → NaN conversion corrupting geographic data",
  'Custom partial-year YoY and QoQ logic in Pandas',
  'DAX context transition through multi-hop relationships (Customer → Sales → Product) requiring explicit FILTER patterns rather than relying on implicit cross-filter propagation',
  'RFM segmentation thresholds calibrated to a small 92-customer base rather than standard large-dataset percentile splits',
],

toolsAndTechniques: [
  'Python',
  'Pandas',
  'NumPy',
  'Power BI',
  'DAX',
  'RFM Segmentation',
  'Market Basket Analysis',
  'Time Series Analysis',
  'Data Cleaning',
  'Exploratory Data Analysis',
],

outcomes: `
Three actionable recommendations with quantified revenue impact:

• Discount governance (~$257K)
• Classic × Vintage bundling (4.33% uplift)
• Champion retention program targeting the 14 customers responsible for one third of all revenue.
`,


    deliverables: [
      {
        name: 'Python Jupyter Notebooks (Data Cleaning, EDA, RFM, Market Basket)',
        type: 'html',
        link: 'https://1drv.ms/u/c/bb358f3ab39ffd4d/IQBg7RraAJq3RqHhLEsd3w3pAWq30xgvuQYekgyYSaQ7D1s?e=9G8p4R',
      },
      {
        name: 'Power BI Retail Analytics Dashboard (PBIX)',
        type: 'pbix',
        link: 'https://1drv.ms/u/c/bb358f3ab39ffd4d/IQDZz2LYvzqVQLFYZZ_WMrLuAfKFBxUfgFJEo4PkMnppcYc?e=vspTvr',
      },
      {
        name: 'PPT Case Study Presentation',
        type: 'ppt',
        link: 'https://1drv.ms/p/c/bb358f3ab39ffd4d/IQApEyKVmRg8Q6yuODyOwJ1sASK49fgn0HStl5BPnySiwZ0?e=7w5p0p',
      },
      {
        name: 'Presentation Video',
        type: 'video',
        link: 'https://youtu.be/QXCYoVx5e9k',
      },
    ],
  },
  {
    num: '03',
    slug: 'sales-analytics-ml',
    title: 'Sales Analytics with ML',
    tags: 'Pandas, EDA, Power BI',
    desc: 'Analyzed 2,823 retail transactions across 19 countries using Python. Identified that 70% of revenue concentrates in just 5 markets, Q4 seasonality drives 40% of annual sales, and a 5-point discount governance improvement could unlock $257K in additional margin.',
    image: '/images/project-03.jpg',
  },
  {
    num: '04',
    slug: 'credit-card-market-study',
    title: 'Credit Card Market Study',
    tags: 'SQL, Segmentation, Insights',
    desc: 'Segmented credit card customers by behavior and demographics using SQL, identifying high-value clusters and churn-risk profiles. Delivered strategic recommendations for targeted product positioning and retention campaigns.',
    image: '/images/project-04.jpg',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const navigate = useNavigate()
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
              onClick={() => {
                if (isMobile) {
                  setActivePanel(activePanel === i ? null : i)
                } else {
                  navigate(`/projects/${project.slug}`)
                }
              }}
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
