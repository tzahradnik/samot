import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative flex items-center justify-center min-h-screen py-24 px-6 snap-start overflow-hidden"
    >
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(168,127,212,0.18))' }}
      />

      <motion.div
        initial={{ opacity: 0, filter: 'blur(12px)', y: 24 }}
        animate={inView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="max-w-xl w-full text-center"
      >
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-text-muted mb-8">
          O projektu
        </p>

        <p className="font-serif text-xl sm:text-2xl text-text-primary leading-relaxed mb-10 italic">
          „Co se stane, když odložíš zrak a necháš ruku kreslit ve tmě?"
        </p>

        <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
          Sedm dní v naprosté tmě a tichu. Bez světla, bez hodinek, bez orientace v čase.
          Každý den jedna kresba — naslepo, tužkou po papíru, s plnou důvěrou v ruku,
          která nevidí, co tvoří.
        </p>

        <p className="font-sans text-sm text-text-secondary leading-relaxed mb-10">
          Tohle je výsledek. Patnáct kreseb, patnáct myšlenek, jeden hlas, jedna hudba.
        </p>

        {/* Retreat info */}
        <div
          className="rounded-xl px-6 py-5 mb-14 text-left"
          style={{ background: 'rgba(168,127,212,0.05)', border: '1px solid rgba(168,127,212,0.12)' }}
        >
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-baseline">
              <span className="font-sans text-xs tracking-widest uppercase w-20 flex-shrink-0"
                style={{ color: 'rgba(168,127,212,0.5)' }}>Místo</span>
              <span className="font-sans text-sm text-text-secondary">
                <a
                  href="https://tmouks obe.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: 'rgba(168,127,212,0.85)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#a87fd4')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(168,127,212,0.85)')}
                >
                  tmouks obe.cz
                </a>
                {' '}— pokoj <span className="italic text-text-primary">Boží oko</span>
              </span>
            </div>
            <div className="flex gap-4 items-baseline">
              <span className="font-sans text-xs tracking-widest uppercase w-20 flex-shrink-0"
                style={{ color: 'rgba(168,127,212,0.5)' }}>Termín</span>
              <span className="font-sans text-sm text-text-secondary">TODO: doplnit datum pobytu</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 justify-center mb-12">
          <div className="h-px w-16" style={{ background: 'rgba(168,127,212,0.15)' }} />
          <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(168,127,212,0.3)' }} />
          <div className="h-px w-16" style={{ background: 'rgba(168,127,212,0.15)' }} />
        </div>

        {/* Author bio */}
        <div className="text-left max-w-md mx-auto">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            Autor
          </p>
          <p className="font-sans text-sm text-text-secondary leading-relaxed">
            Tomáš Zahradník (1994) je člověk bez uměleckého vzdělání s vášní pro estetiku a umění.
            Dříve tanečník, žonglér, DJ. Teď tvůrce (nejen) svých snů, sběratel a hledač smyslu.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
