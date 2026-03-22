import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ExhibitionInfo() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section
      id="exhibition-info"
      ref={ref}
      className="relative flex items-center justify-center h-screen py-24 px-6 snap-start overflow-hidden"
    >
      {/* Top glow line */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,168,83,0.15))' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="max-w-lg w-full"
      >
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-text-muted mb-8 text-center">
          Fyzická výstava
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-text-primary text-center mb-12 leading-tight">
          O výstavě
        </h2>

        {/* Info grid */}
        <div className="flex flex-col gap-6 mb-12">
          <InfoRow label="Místo" value="Zámek Rosice, Galerie sklep pod Šenkem" />
          <InfoRow label="Termín" value="TODO: doplnit datum" />
          <InfoRow label="Vstupné" value="Dobrovolné" />
          <InfoRow
            label="Tisky"
            value={
              <span>
                15 kreseb, 7 uměleckých tisků
                <span className="text-text-muted"> (číslováno, signováno)</span>
              </span>
            }
          />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 justify-center mb-12">
          <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(212,168,83,0.3)' }} />
          <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
        </div>

        {/* Print info box */}
        <div
          className="rounded-lg p-5"
          style={{
            background: 'rgba(212,168,83,0.05)',
            border: '1px solid rgba(212,168,83,0.15)',
          }}
        >
          <p className="font-sans text-xs tracking-widest uppercase text-amber-warm mb-3">
            Limitovaná edice
          </p>
          <p className="font-sans text-sm text-text-secondary leading-relaxed">
            Každý z 7 uměleckých tisků je ručně číslovaný a signovaný.
            Tisky jsou dostupné na výstavě nebo na vyžádání.
          </p>
          {/* TODO: Add contact/order info */}
        </div>
      </motion.div>
    </section>
  )
}

function InfoRow({
  label,
  value,
}: {
  label: string
  value: React.ReactNode
}) {
  return (
    <div className="flex gap-6 items-start">
      <span
        className="font-sans text-xs tracking-widest uppercase w-20 flex-shrink-0 pt-0.5"
        style={{ color: '#5a5248' }}
      >
        {label}
      </span>
      <span className="font-sans text-sm text-text-secondary leading-relaxed">
        {value}
      </span>
    </div>
  )
}
