import TextCylinder from '../components/TextCylinder'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        height: '100vh',
        background: 'var(--bg-canvas)',
      }}
    >
      {/* 3D Cylinder */}
      <TextCylinder />

      {/* Subtitle */}
      <div
        className="absolute left-1/2 -translate-x-1/2 text-center"
        style={{ bottom: '15vh', zIndex: 1, maxWidth: '480px', padding: '0 24px' }}
      >
        <p
          className="font-body uppercase"
          style={{
            fontSize: '0.75rem',
            fontWeight: 500,
            lineHeight: 1.4,
            letterSpacing: '0.04em',
            color: 'var(--text-muted)',
            marginBottom: '12px',
          }}
        >
          Finance Professional
        </p>
        <p
          className="font-body"
          style={{
            fontSize: '1.125rem',
            fontWeight: 400,
            lineHeight: 1.65,
            color: 'var(--text-primary)',
          }}
        >
          Building analytical insight at the intersection of capital markets and data
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ bottom: '4vh', zIndex: 1 }}
      >
        <div
          className="rounded-full"
          style={{
            width: '6px',
            height: '6px',
            backgroundColor: 'var(--text-muted)',
            animation: 'scrollBounce 2s ease-in-out infinite',
          }}
        />
        <div
          style={{
            width: '1px',
            height: '32px',
            backgroundColor: 'var(--text-muted)',
            marginTop: '4px',
          }}
        />
      </div>
    </section>
  )
}
