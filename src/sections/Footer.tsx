export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-canvas)',
        borderTop: '1px solid rgba(254, 252, 247, 0.08)',
        padding: '32px 24px',
      }}
    >
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ maxWidth: '1280px', margin: '0 auto' }}
      >
        <p
          className="font-body"
          style={{
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'var(--text-muted)',
          }}
        >
          &copy; 2025 Shib Sankar Paul. All rights reserved.
        </p>
        <p
          className="font-body"
          style={{
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'var(--text-muted)',
          }}
        >
          Built with analytical precision.
        </p>
      </div>
    </footer>
  )
}
