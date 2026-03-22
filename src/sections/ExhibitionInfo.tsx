import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ExhibitionInfo() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })

  return (
    <section
      id="exhibition-info"
      ref={ref}
      className="relative flex items-center justify-center min-h-screen py-24 px-6 snap-start overflow-hidden"
    >
      {/* Top glow line */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(168,127,212,0.18))' }}
      />

      <motion.div
        initial={{ opacity: 0, filter: 'blur(12px)', y: 24 }}
        animate={inView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="max-w-lg w-full"
      >
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-text-muted mb-8 text-center">
          Fyzická výstava
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-text-primary text-center mb-12 leading-tight">
          O výstavě
        </h2>

        {/* Info rows */}
        <div className="flex flex-col gap-6 mb-12">
          <InfoRow
            label="Termín"
            value={
              <span>
                Podzim 2026
                <span className="text-text-muted"> — přesné datum bude upřesněno</span>
              </span>
            }
          />
          <InfoRow
            label="Místo"
            value={
              <span className="text-text-muted italic">
                zatím není vybráno
              </span>
            }
          />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 justify-center mb-12">
          <div className="h-px flex-1" style={{ background: 'rgba(168,127,212,0.1)' }} />
          <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(168,127,212,0.3)' }} />
          <div className="h-px flex-1" style={{ background: 'rgba(168,127,212,0.1)' }} />
        </div>

        {/* Venue suggestion box */}
        <div
          className="rounded-xl p-6"
          style={{
            background: 'rgba(168,127,212,0.05)',
            border: '1px solid rgba(168,127,212,0.15)',
          }}
        >
          <p
            className="font-sans text-xs tracking-widest uppercase mb-3"
            style={{ color: 'rgba(168,127,212,0.8)' }}
          >
            Znáš vhodné místo?
          </p>
          <p className="font-sans text-sm text-text-secondary leading-relaxed mb-5">
            Hledám prostor, který by odpovídal atmosféře výstavy — tmavý, intimní, trochu tajemný.
            Pokud máš tip na galerii nebo netradiční místo, budu rád za každé doporučení.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:tomas@tomaszahradnik.com"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-sans text-xs tracking-wide transition-all duration-200"
              style={{
                background: 'rgba(168,127,212,0.1)',
                border: '1px solid rgba(168,127,212,0.25)',
                color: '#a87fd4',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(168,127,212,0.18)'
                e.currentTarget.style.borderColor = 'rgba(168,127,212,0.45)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(168,127,212,0.1)'
                e.currentTarget.style.borderColor = 'rgba(168,127,212,0.25)'
              }}
            >
              <svg width="13" height="13" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              tomas@tomaszahradnik.com
            </a>

            <a
              href="sms:+420774587771"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-sans text-xs tracking-wide transition-all duration-200"
              style={{
                background: 'rgba(168,127,212,0.06)',
                border: '1px solid rgba(168,127,212,0.18)',
                color: 'rgba(168,127,212,0.7)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(168,127,212,0.12)'
                e.currentTarget.style.color = '#a87fd4'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(168,127,212,0.06)'
                e.currentTarget.style.color = 'rgba(168,127,212,0.7)'
              }}
            >
              <svg width="13" height="13" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
              </svg>
              SMS / zpráva
            </a>
          </div>
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
