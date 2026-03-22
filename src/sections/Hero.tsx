import { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const TITLE = 'samoT: 7 dní ve (t)mě'
const TAGLINE = '7 dní v naprosté tmě a tichu. 15 kreseb. 15 myšlenek.'

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [titleDone, setTitleDone] = useState(false)
  const [eyesOpen, setEyesOpen] = useState(false)
  const blinkControls = useAnimationControls()

  // First: dramatic eye-opening
  useEffect(() => {
    const t = setTimeout(() => setEyesOpen(true), 300)
    return () => clearTimeout(t)
  }, [])

  // After eyes open, typewriter starts
  useEffect(() => {
    if (!eyesOpen) return
    let i = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(TITLE.slice(0, i + 1))
        i++
        if (i >= TITLE.length) {
          clearInterval(interval)
          setTitleDone(true)
        }
      }, 65)
      return () => clearInterval(interval)
    }, 2200)
    return () => clearTimeout(timer)
  }, [eyesOpen])

  // Infinite slow "blink" loop — subtle breathing blur after first opening
  useEffect(() => {
    if (!titleDone) return
    let cancelled = false

    const runLoop = async () => {
      while (!cancelled) {
        // Wait 12s in clear state
        await new Promise(r => setTimeout(r, 12000))
        if (cancelled) break
        // Slowly close eyes (blur in)
        await blinkControls.start({
          opacity: 0.82,
          backdropFilter: 'blur(28px)',
          transition: { duration: 3.5, ease: [0.4, 0, 0.2, 1] },
        })
        if (cancelled) break
        // Pause briefly in blurred state
        await new Promise(r => setTimeout(r, 800))
        if (cancelled) break
        // Slowly open again
        await blinkControls.start({
          opacity: 0,
          backdropFilter: 'blur(0px)',
          transition: { duration: 4.2, ease: [0.16, 1, 0.3, 1] },
        })
      }
    }
    runLoop()
    return () => { cancelled = true }
  }, [titleDone, blinkControls])

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden snap-start"
    >
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.035] animate-grain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Violet glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={eyesOpen ? { opacity: 1 } : {}}
        transition={{ duration: 4, ease: 'easeOut' }}
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 55%, rgba(168,127,212,0.07) 0%, transparent 70%)' }}
      />

      {/* ── Eye-opening overlay: first dramatic open ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-30"
        initial={{ opacity: 1, backdropFilter: 'blur(40px)' }}
        animate={eyesOpen ? { opacity: 0, backdropFilter: 'blur(0px)' } : {}}
        transition={{ duration: 3.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: 'rgba(6,3,12,0.88)' }}
      />

      {/* ── Infinite blink overlay ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-29"
        animate={blinkControls}
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        style={{ background: 'rgba(6,3,12,0.88)' }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={eyesOpen ? { opacity: 1, filter: 'blur(0px)' } : {}}
          transition={{ delay: 2.4, duration: 2.0, ease: 'easeOut' }}
          className="font-sans text-xs tracking-[0.4em] uppercase text-text-muted mb-8"
        >
          online výstava
        </motion.p>

        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary leading-tight mb-6 min-h-[1.2em]"
          style={{
            filter: eyesOpen ? 'blur(0px)' : 'blur(10px)',
            transition: 'filter 2.2s ease',
          }}
        >
          {displayed}
          <span
            className="inline-block w-0.5 h-[0.85em] ml-1 align-middle"
            style={{
              background: '#a87fd4',
              opacity: titleDone ? 0 : 1,
              transition: 'opacity 0.5s',
              animation: titleDone ? 'none' : 'blink 1s step-end infinite',
            }}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, filter: 'blur(8px)', y: 8 }}
          animate={titleDone ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
          transition={{ duration: 1.8, delay: 0.2, ease: 'easeOut' }}
          className="font-sans text-base sm:text-lg text-text-secondary max-w-md leading-relaxed"
        >
          {TAGLINE}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={titleDone ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.8 }}
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-colors duration-300"
        style={{ color: 'rgba(168,127,212,0.4)' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(168,127,212,0.9)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(168,127,212,0.4)')}
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
