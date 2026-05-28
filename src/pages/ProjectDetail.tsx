import { useNavigate, useParams } from 'react-router-dom'

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

    theProblem: '',
    whatIDid: '',
    keyFindings: [],
    technicalChallenges: [],
    toolsAndTechniques: [],
    outcomes: '',

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
]

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const project = PROJECTS.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div style={{ padding: '40px', color: 'white' }}>
        Project not found
      </div>
    )
  }

  const renderSection = (
  title: string,
  content?: string | string[]
) => {
  if (
  !content ||
  (Array.isArray(content) && content.length === 0)
) {
  return null
}

  return (
    <div style={{ marginTop: '48px' }}>
      <h2
        style={{
          marginBottom: '20px',
          color: 'white',
          fontSize: '28px',
        }}
      >
        {title}
      </h2>

      {Array.isArray(content) ? (
        <ul
          style={{
            paddingLeft: '20px',
            lineHeight: 1.8,
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          {content.map((item, index) => (
            <li key={index} style={{ marginBottom: '12px' }}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p
          style={{
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 1.9,
            fontSize: '16px',
            whiteSpace: 'pre-line',
          }}
        >
          {content}
        </p>
      )}
    </div>
  )
}

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg-canvas)',
        color: 'white',
        padding: '40px',
      }}
    >
      <button
        onClick={() => {
          navigate('/')
          
          setTimeout(() => {
            const section = document.getElementById('projects')
            section?.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        }}
        style={{
          marginBottom: '32px',
          padding: '10px 18px',
          borderRadius: '8px',
          border: '1px solid rgba(255,255,255,0.2)',
          background: 'transparent',
          color: 'white',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        ← Back to Projects
      </button>

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            borderRadius: '12px',
            marginBottom: '24px',
          }}
        />

        <h1
          style={{
            color: 'white',
            fontSize: '42px',
            marginBottom: '24px',
          }}
        >
          {project.title}
        </h1>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '24px',
          }}
        >
          {project.tags.map((tag, index) => (
            <span
              key={index}
              style={{
                padding: '6px 12px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.08)',
                color: '#d4a373',
                fontSize: '14px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          style={{
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 1.8,
            fontSize: '16px',
            whiteSpace: 'pre-line',
          }}
        >
          {project.overview}
        </p>

        {renderSection('The Problem', project.theProblem)}

        {renderSection('What I Did', project.whatIDid)}

        {renderSection('Key Findings', project.keyFindings)}

        {renderSection(
          'Technical Challenges',
          project.technicalChallenges
        )}

        {renderSection(
          'Tools & Techniques',
          project.toolsAndTechniques
        )}

        {renderSection('Outcomes', project.outcomes)}

        <h2
          style={{
            marginTop: '40px',
            marginBottom: '20px',
            color: 'white',
            fontSize: '28px',
          }}
        >
          Deliverables
        </h2>

        <ul>
          {project.deliverables.map((item, index) => (
            <li key={index} style={{ marginBottom: '16px' }}>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#d4a373',
                  textDecoration: 'underline',
                  fontWeight: 500,
                  fontSize: '16px',
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}