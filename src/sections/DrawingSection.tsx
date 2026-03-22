import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import AudioPlayer from '../components/AudioPlayer'
import type { Drawing } from '../data/drawings'

interface Props {
  drawing: Drawing
  index: number
}

export default function DrawingSection({ drawing, index }: Props) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: false, margin: '-15%' })
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <>
      <section
        id={`drawing-${drawing.id}`}
        ref={ref}
        className="relative flex items-center justify-center h-screen w-full snap-start overflow-hidden"
      >
        {index > 0 && (
          <div
            className="pointer-events-none absolute top-0 left-0 right-0 h-px"
            style={{ background: 'rgba(168,127,212,0.06)' }}
          />
        )}

        {/* Violet ambient glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(ellipse 55% 50% at 36% 50%, rgba(168,127,212,0.05) 0%, transparent 70%)',
          }}
        />

        {/* ── Main layout ── */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 w-full h-full px-4 lg:px-10 py-6">

          {/* ── Drawing image ── */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.03 }}
            animate={
              inView
                ? { opacity: 1, filter: 'blur(0px)', scale: 1 }
                : { opacity: 0, filter: 'blur(20px)', scale: 1.03 }
            }
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative group cursor-zoom-in flex-shrink-0 flex items-center justify-center"
            style={{ maxHeight: '86vh', maxWidth: '64vw' }}
            onClick={() => setLightboxOpen(true)}
          >
            {/* Violet spotlight glow */}
            <div
              className="absolute -inset-8 rounded-full blur-3xl transition-opacity duration-700 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(168,127,212,0.15) 0%, transparent 70%)',
                opacity: 0.55,
              }}
            />

            <img
              src={drawing.imageSrc}
              alt={`Kresba ${drawing.id}: ${drawing.title}`}
              loading="lazy"
              className="relative z-0 rounded-sm transition-all duration-700 ease-out group-hover:scale-[1.015] group-hover:brightness-100"
              style={{
                maxHeight: '86vh',
                maxWidth: '64vw',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                filter: 'brightness(0.9) contrast(1.04)',
                boxShadow: '0 4px 80px rgba(0,0,0,0.85), 0 0 40px rgba(168,127,212,0.07)',
              }}
            />

            {/* Drawing number badge */}
            <div
              className="absolute -top-3 -left-1 z-20 font-serif text-xs tracking-widest"
              style={{ color: 'rgba(168,127,212,0.5)' }}
            >
              {drawing.id}
            </div>

            {/* Zoom hint */}
            <div
              className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-sans tracking-wider px-2 py-1 rounded"
              style={{ color: 'rgba(168,127,212,0.8)', background: 'rgba(0,0,0,0.65)' }}
            >
              ⊕ plná velikost
            </div>
          </motion.div>

          {/* ── Info panel ── */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', x: 18 }}
            animate={
              inView
                ? { opacity: 1, filter: 'blur(0px)', x: 0 }
                : { opacity: 0, filter: 'blur(10px)', x: 18 }
            }
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col gap-5 w-full lg:w-72 xl:w-80 flex-shrink-0"
          >
            {/* Header */}
            <div>
              <p className="font-sans text-xs tracking-[0.4em] uppercase mb-1.5" style={{ color: 'rgba(168,127,212,0.6)' }}>
                Kresba {drawing.id}
              </p>
              <h2 className="font-serif text-xl sm:text-2xl text-text-primary leading-snug">
                {drawing.title}
              </h2>
            </div>

            {/* Meta */}
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-3 items-baseline">
                <span className="font-sans text-xs text-text-muted w-14 flex-shrink-0">Datum</span>
                <span className="font-sans text-xs text-text-secondary">{drawing.date}</span>
              </div>
              <div className="flex gap-3 items-baseline">
                <span className="font-sans text-xs text-text-muted w-14 flex-shrink-0">Materiál</span>
                <span className="font-sans text-xs text-text-secondary">{drawing.medium}</span>
              </div>
            </div>

            <div className="h-px w-full" style={{ background: 'rgba(168,127,212,0.1)' }} />

            {/* Description */}
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              {drawing.description}
            </p>

            <div className="h-px w-full" style={{ background: 'rgba(168,127,212,0.1)' }} />

            {/* Audio players */}
            <div className="flex flex-col gap-3">
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

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          style={{ background: 'rgba(4,2,8,0.97)' }}
          onClick={() => setLightboxOpen(false)}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            src={drawing.imageSrcFull}
            alt={`Kresba ${drawing.id}: ${drawing.title} — plné rozlišení`}
            className="max-h-[95vh] max-w-[95vw] object-contain rounded-sm cursor-default"
            style={{ boxShadow: '0 0 80px rgba(168,127,212,0.1)' }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-6 font-sans font-light text-2xl transition-colors duration-200"
            style={{ color: 'rgba(168,127,212,0.5)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(168,127,212,1)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(168,127,212,0.5)')}
            aria-label="Zavřít"
          >
            ✕
          </button>
        </motion.div>
      )}
    </>
  )
}
