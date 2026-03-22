import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AudioPlayer from '../components/AudioPlayer'
import type { Drawing } from '../data/drawings'

interface Props {
  drawing: Drawing
  index: number
}

export default function DrawingSection({ drawing, index }: Props) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: false, margin: '-20%' })

  return (
    <section
      id={`drawing-${drawing.id}`}
      ref={ref}
      className="relative flex items-center justify-center h-screen w-full snap-start overflow-hidden"
    >
      {/* Section separator */}
      {index > 0 && (
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 h-px"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        />
      )}

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-6xl px-6 lg:px-12 py-8">

        {/* === Drawing image === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="relative flex-shrink-0 group cursor-default"
          style={{ width: 'min(340px, 90vw)' }}
        >
          {/* Warm spotlight glow behind image */}
          <div
            className="absolute inset-0 -m-6 rounded-full blur-2xl transition-opacity duration-700 group-hover:opacity-100"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(212,168,83,0.18) 0%, transparent 70%)',
              opacity: 0.7,
            }}
          />

          {/* Vignette overlay on image */}
          <div
            className="absolute inset-0 rounded pointer-events-none z-10"
            style={{
              boxShadow: 'inset 0 0 60px rgba(0,0,0,0.5)',
            }}
          />

          <img
            src={drawing.imageSrc}
            alt={`Kresba ${drawing.id}: ${drawing.title}`}
            loading="lazy"
            className="relative z-0 w-full rounded transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            style={{
              aspectRatio: '3/4',
              objectFit: 'cover',
              filter: 'brightness(0.9) contrast(1.05)',
            }}
          />

          {/* Drawing number badge */}
          <div
            className="absolute -top-3 -left-3 z-20 font-serif text-xs tracking-widest"
            style={{ color: 'rgba(212,168,83,0.5)' }}
          >
            {drawing.id}
          </div>
        </motion.div>

        {/* === Info panel === */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 1.0, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col gap-5 max-w-sm w-full"
        >
          {/* Header */}
          <div>
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-text-muted mb-1">
              Kresba {drawing.id}
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-text-primary leading-snug">
              {drawing.title}
            </h2>
          </div>

          {/* Meta */}
          <div className="flex flex-col gap-1.5">
            <div className="flex gap-3 items-baseline">
              <span className="font-sans text-xs text-text-muted w-16 flex-shrink-0">Datum</span>
              <span className="font-sans text-xs text-text-secondary">{drawing.date}</span>
            </div>
            <div className="flex gap-3 items-baseline">
              <span className="font-sans text-xs text-text-muted w-16 flex-shrink-0">Materiál</span>
              <span className="font-sans text-xs text-text-secondary">{drawing.medium}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.06)' }} />

          {/* Description */}
          <p className="font-sans text-sm text-text-secondary leading-relaxed">
            {drawing.description}
          </p>

          {/* Divider */}
          <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.06)' }} />

          {/* Audio players */}
          <div className="flex flex-col gap-4">
            <AudioPlayer
              src={drawing.audioCommentary}
              label="Autorův komentář"
              icon="🎤"
            />
            <AudioPlayer
              src={drawing.audioHandpan}
              label="Handpan"
              icon="🎵"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
