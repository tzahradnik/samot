import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const TITLE = 'samoT: 7 dní ve (t)mě'
const TAGLINE = '7 dní v naprosté tmě a tichu. 15 kreseb. 15 myšlenek.'

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [titleDone, setTitleDone] = useState(false)

  // Typewriter effect for title
  useEffect(() => {
    let i = 0
    const delay = 1200 // ms before starting
    const speed = 60   // ms per character

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(TITLE.slice(0, i + 1))
        i++
        if (i >= TITLE.length) {
          clearInterval(interval)
          setTitleDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [])

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden snap-start"
    >
      {/* Grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.035] animate-grain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 55%, rgba(212,168,83,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.5 }}
          className="font-sans text-xs tracking-[0.4em] uppercase text-text-muted mb-8"
        >
          online výstava
        </motion.p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary leading-tight mb-6 min-h-[1.2em]">
          {displayed}
          <span
            className="inline-block w-0.5 h-[0.85em] ml-1 align-middle"
            style={{
              background: '#d4a853',
              opacity: titleDone ? 0 : 1,
              animation: titleDone ? 'none' : 'blink 1s step-end infinite',
            }}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={titleDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-sans text-base sm:text-lg text-text-secondary max-w-md leading-relaxed"
        >
          {TAGLINE}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={titleDone ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-text-muted hover:text-amber-warm transition-colors duration-300 group"
        aria-label="Přejít dolů"
      >
        <span className="font-sans text-xs tracking-widest uppercase opacity-60">Procházet</span>
        <div className="animate-scroll-hint">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 4v12M4 10l6 6 6-6"/>
          </svg>
        </div>
      </motion.button>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
