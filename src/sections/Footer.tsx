export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center py-12 px-6 text-center h-screen snap-start">
      <div
        className="w-px h-16 mb-10"
        style={{ background: 'linear-gradient(to bottom, rgba(212,168,83,0.15), transparent)' }}
      />

      <p className="font-serif text-lg text-text-secondary mb-1">Tomáš Zahradník</p>
      <p className="font-sans text-xs text-text-muted mb-6">2025</p>

      {/* TODO: Add contact email/link if desired */}
      <p className="font-sans text-xs text-text-muted opacity-40">
        samoT: 7 dní ve (t)mě
      </p>
    </footer>
  )
}
