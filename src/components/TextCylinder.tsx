import { useEffect, useRef } from 'react'

const TEXT_STRING = "EQUITY RESEARCH \u00B7 FP&A \u00B7 FINANCIAL MODELING \u00B7 DATA ANALYTICS \u00B7 VALUATION \u00B7 "
const REPEAT_COUNT = 20
const SECTORS_PER_RING = 240

export default function TextCylinder() {
  const ring1Ref = useRef<HTMLDivElement>(null)
  const ring2Ref = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const fullText = TEXT_STRING.repeat(REPEAT_COUNT)
    const totalSectors = SECTORS_PER_RING * 2
    const angleStep = 360 / totalSectors
    const radius = 11.5

    function buildRing(ringEl: HTMLDivElement, isEven: boolean) {
      const sectors: HTMLDivElement[] = []
      for (let s = 0; s < SECTORS_PER_RING; s++) {
        const charIndex = s * 2 + (isEven ? 0 : 1)
        const char = fullText[charIndex % fullText.length] || '\u00A0'
        const sectorIndex = s * 2 + (isEven ? 0 : 1)
        const charAngle = angleStep * sectorIndex

        const sector = document.createElement('div')
        sector.className = 'sector'
        sector.textContent = char
        sector.style.position = 'absolute'
        sector.style.top = '50%'
        sector.style.left = '50%'
        sector.style.fontFamily = '"Cormorant Garamond", serif'
        sector.style.fontWeight = '500'
        sector.style.letterSpacing = '0.1em'
        sector.style.textTransform = 'uppercase'
        sector.style.backfaceVisibility = 'hidden'
        sector.style.color = (s % 10) < 5 ? '#E6DCC8' : '#FEFCF7'
        sector.style.transform = `translate(-50%, -50%) rotateY(${charAngle}deg) translateZ(${radius}rem) rotateX(0deg)`

        sectors.push(sector)
      }
      ringEl.append(...sectors)
    }

    if (ring1Ref.current) buildRing(ring1Ref.current, true)
    if (ring2Ref.current) buildRing(ring2Ref.current, false)
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30em',
        height: '30em',
        fontSize: '1.5rem',
        zIndex: 2,
      }}
    >
      {/* Fade masks */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '24%',
          background: 'linear-gradient(180deg, var(--bg-canvas) 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '24%',
          background: 'linear-gradient(0deg, var(--bg-canvas) 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />

      {/* Layer 1 - Ring 1 (even indices) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          animation: 'rotation 20s linear infinite',
        }}
      >
        <div
          ref={ring1Ref}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transformStyle: 'preserve-3d',
            color: 'transparent',
          }}
        />
      </div>

      {/* Layer 2 - Ring 2 (odd indices) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          animation: 'rotation 20s linear infinite',
        }}
      >
        <div
          ref={ring2Ref}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transformStyle: 'preserve-3d',
            color: 'transparent',
          }}
        />
      </div>
    </div>
  )
}
