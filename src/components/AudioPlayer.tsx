import { useEffect, useRef, useState, useCallback } from 'react'

interface AudioPlayerProps {
  src: string
  label: string
  icon: string
}

function formatTime(seconds: number): string {
  if (isNaN(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function AudioPlayer({ src, label, icon }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [dragging, setDragging] = useState(false)

  // Lazy-load audio only when user first interacts
  const ensureAudio = useCallback(() => {
    if (audioRef.current || !src) return
    const audio = new Audio()
    audio.preload = 'metadata'
    audio.src = src
    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration))
    audio.addEventListener('timeupdate', () => {
      if (!dragging) setCurrentTime(audio.currentTime)
    })
    audio.addEventListener('ended', () => setPlaying(false))
    audioRef.current = audio
    setLoaded(true)
  }, [src, dragging])

  useEffect(() => {
    return () => {
      audioRef.current?.pause()
    }
  }, [])

  const togglePlay = () => {
    if (!src) return
    ensureAudio()
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  const seek = useCallback((e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const bar = progressRef.current
    const audio = audioRef.current
    if (!bar || !audio || !duration) return

    const rect = bar.getBoundingClientRect()
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    audio.currentTime = ratio * duration
    setCurrentTime(ratio * duration)
  }, [duration])

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0
  const isEmpty = !src

  return (
    <div className={`flex flex-col gap-2 ${isEmpty ? 'opacity-30 pointer-events-none' : ''}`}>
      <div className="flex items-center gap-3">
        <span className="text-xs text-text-muted font-sans tracking-wide">{icon} {label}</span>
        {isEmpty && <span className="text-xs text-text-muted italic">— připravujeme</span>}
      </div>

      <div className="flex items-center gap-3 bg-surface rounded-lg px-3 py-2.5 border border-white/5">
        {/* Play / Pause button */}
        <button
          onClick={togglePlay}
          disabled={isEmpty}
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 focus:outline-none"
          style={{
            background: playing
              ? 'rgba(212,168,83,0.2)'
              : 'rgba(212,168,83,0.08)',
            border: '1px solid rgba(212,168,83,0.3)',
            color: '#d4a853',
          }}
          aria-label={playing ? 'Pauza' : 'Přehrát'}
        >
          {playing ? (
            // Pause icon
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <rect x="1" y="1" width="3.5" height="10" rx="1"/>
              <rect x="7.5" y="1" width="3.5" height="10" rx="1"/>
            </svg>
          ) : (
            // Play icon
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M2 1.5L10.5 6 2 10.5V1.5z"/>
            </svg>
          )}
        </button>

        {/* Progress bar */}
        <div
          ref={progressRef}
          className="flex-1 h-1 rounded-full cursor-pointer relative group"
          style={{ background: 'rgba(255,255,255,0.08)' }}
          onClick={seek}
          onMouseDown={() => setDragging(true)}
          onMouseUp={() => setDragging(false)}
          onMouseLeave={() => setDragging(false)}
          onMouseMove={(e) => { if (dragging) seek(e) }}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          {/* Filled portion */}
          <div
            className="h-full rounded-full transition-all duration-100 relative"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #d4a853, #b8923f)',
            }}
          >
            {/* Thumb */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              style={{
                background: '#d4a853',
                boxShadow: '0 0 6px rgba(212,168,83,0.8)',
                transform: 'translate(50%, -50%)',
              }}
            />
          </div>
        </div>

        {/* Time display */}
        <span className="flex-shrink-0 text-xs font-sans tabular-nums" style={{ color: '#5a5248' }}>
          {loaded || playing ? (
            <>{formatTime(currentTime)} <span className="opacity-40">/</span> {formatTime(duration)}</>
          ) : (
            <span className="opacity-40">—:——</span>
          )}
        </span>
      </div>
    </div>
  )
}
