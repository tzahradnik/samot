export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center py-20 px-6 text-center min-h-screen snap-start">

      {/* Top glow line */}
      <div
        className="w-px h-16 mb-14"
        style={{ background: 'linear-gradient(to bottom, rgba(168,127,212,0.18), transparent)' }}
      />

      {/* Social links */}
      <div className="flex items-center gap-8 mb-14">
        <a
          href="https://www.instagram.com/tzahradnik"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 group transition-opacity duration-300 opacity-50 hover:opacity-100"
          aria-label="Instagram"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#a87fd4' }}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
          <span className="font-sans text-xs tracking-widest" style={{ color: 'rgba(168,127,212,0.7)' }}>@TZahradník</span>
        </a>

        <div className="w-px h-8" style={{ background: 'rgba(168,127,212,0.12)' }} />

        <a
          href="https://www.facebook.com/tomas.zahradnik"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 group transition-opacity duration-300 opacity-50 hover:opacity-100"
          aria-label="Facebook"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#a87fd4' }}>
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
          <span className="font-sans text-xs tracking-widest" style={{ color: 'rgba(168,127,212,0.7)' }}>Tomáš Zahradník</span>
        </a>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 justify-center mb-12 w-full max-w-xs">
        <div className="h-px flex-1" style={{ background: 'rgba(168,127,212,0.08)' }} />
        <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(168,127,212,0.2)' }} />
        <div className="h-px flex-1" style={{ background: 'rgba(168,127,212,0.08)' }} />
      </div>

      {/* Thanks — wife */}
      <div className="max-w-sm mb-10">
        <p className="font-serif text-base text-text-primary leading-relaxed mb-2 italic">
          Děkuji své milované Janě Zahradníkové
        </p>
        <p className="font-sans text-xs text-text-muted leading-relaxed">
          za dar tohoto pobytu k mým třicátým narozeninám.
          Bez tebe bych se do tmy nikdy nerozhoupal.
        </p>
      </div>

      {/* Thanks — Klementinka */}
      <div className="max-w-sm mb-14">
        <p className="font-serif text-base text-text-primary leading-relaxed mb-2 italic">
          Zdravím Klementinku
        </p>
        <p className="font-sans text-xs text-text-muted leading-relaxed">
          průvodkyni a majitelku{' '}
          <a
            href="https://tmouks obe.cz"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
            style={{ color: 'rgba(168,127,212,0.6)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#a87fd4')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(168,127,212,0.6)')}
          >
            Tmou k sobě
          </a>.
          Díky tobě jsem byl v bezpečí i ve tmě.
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 justify-center mb-10 w-full max-w-xs">
        <div className="h-px flex-1" style={{ background: 'rgba(168,127,212,0.08)' }} />
        <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(168,127,212,0.2)' }} />
        <div className="h-px flex-1" style={{ background: 'rgba(168,127,212,0.08)' }} />
      </div>

      {/* Author & contact */}
      <p className="font-serif text-sm text-text-secondary mb-1">Tomáš Zahradník</p>
      <p className="font-sans text-xs text-text-muted mb-3">2026</p>
      <a
        href="tel:+420774587771"
        className="font-sans text-xs transition-colors duration-300"
        style={{ color: 'rgba(168,127,212,0.4)' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(168,127,212,0.8)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(168,127,212,0.4)')}
      >
        +420 774 587 771
      </a>

      <p
        className="font-sans text-xs mt-10 tracking-widest opacity-20"
        style={{ letterSpacing: '0.3em' }}
      >
        samoT: 7 dní ve (t)mě
      </p>
    </footer>
  )
}
