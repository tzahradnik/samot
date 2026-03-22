import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative flex items-center justify-center h-screen py-24 px-6 snap-start overflow-hidden"
    >
      {/* Subtle divider glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,168,83,0.2))' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="max-w-xl w-full text-center"
      >
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-text-muted mb-8">
          O projektu
        </p>

        {/* TODO: Replace with final project description */}
        <p className="font-serif text-xl sm:text-2xl text-text-primary leading-relaxed mb-10 italic">
          „Co se stane, když odložíš zrak a necháš ruku kreslit ve tmě?"
        </p>

        <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
          {/* TODO: Replace with final project description text */}
          Sedm dní v naprosté tmě a tichu. Bez světla, bez hodinek, bez orientace v čase.
          Každý den jedna kresba — naslepo, tužkou po papíru, s plnou důvěrou v ruku,
          která nevidí, co tvoří.
        </p>

        <p className="font-sans text-sm text-text-secondary leading-relaxed mb-16">
          {/* TODO: Replace with final project description text */}
          Tohle je výsledek. Patnáct kreseb, patnáct myšlenek, jeden hlas, jedna hudba.
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 justify-center mb-12">
          <div className="h-px w-16" style={{ background: 'rgba(212,168,83,0.2)' }} />
          <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(212,168,83,0.4)' }} />
          <div className="h-px w-16" style={{ background: 'rgba(212,168,83,0.2)' }} />
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
