import { useEffect, useRef, useState, useCallback } from 'react'

interface AudioPlayerProps {
  src: string
  label: string
  icon: string
}

function formatTime(seconds: number): string {
  if (isNaN(seconds) || !isFinite(seconds)) return '0:00'
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
    return () => { audioRef.current?.pause() }
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
    <div
      className="rounded-xl overflow-hidden transition-opacity duration-300"
      style={{ opacity: isEmpty ? 0.35 : 1, pointerEvents: isEmpty ? 'none' : 'auto' }}
    >
      {/* Label row */}
      <div
        className="flex items-center gap-2 px-4 pt-3 pb-2"
        style={{ background: 'rgba(168,127,212,0.09)' }}
      >
        <span className="text-base">{icon}</span>
        <span
          className="font-sans text-xs font-medium uppercase"
          style={{ color: 'rgba(168,127,212,0.9)', letterSpacing: '0.12em' }}
        >
          {label}
        </span>
        {isEmpty && (
          <span className="ml-auto font-sans text-xs italic" style={{ color: 'rgba(168,127,212,0.4)' }}>
            připravujeme
          </span>
        )}
      </div>

      {/* Controls row */}
      <div
        className="flex items-center gap-3 px-4 pb-3 pt-2"
        style={{
          background: 'rgba(168,127,212,0.05)',
          borderTop: '1px solid rgba(168,127,212,0.1)',
        }}
      >
        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          disabled={isEmpty}
          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
          style={{
            background: playing ? 'rgba(168,127,212,0.28)' : 'rgba(168,127,212,0.1)',
            border: `1.5px solid ${playing ? 'rgba(168,127,212,0.65)' : 'rgba(168,127,212,0.32)'}`,
            color: '#a87fd4',
            boxShadow: playing ? '0 0 16px rgba(168,127,212,0.28)' : 'none',
          }}
          aria-label={playing ? 'Pauza' : 'Přehrát'}
        >
          {playing ? (
            <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor">
              <rect x="1" y="1" width="3.5" height="10" rx="1"/>
              <rect x="7.5" y="1" width="3.5" height="10" rx="1"/>
            </svg>
          ) : (
            <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor">
              <path d="M2.5 1.5L11 6 2.5 10.5V1.5z"/>
            </svg>
          )}
        </button>

        {/* Progress bar */}
        <div
          ref={progressRef}
          className="flex-1 h-1.5 rounded-full cursor-pointer relative group/bar"
          style={{ background: 'rgba(168,127,212,0.18)' }}
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
          <div
            className="h-full rounded-full relative transition-all duration-100"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #7a56a8, #a87fd4)',
            }}
          >
            <div
              className="absolute right-0 top-1/2 w-3 h-3 rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity duration-150"
              style={{
                background: '#a87fd4',
                boxShadow: '0 0 8px rgba(168,127,212,0.9)',
                transform: 'translate(50%, -50%)',
              }}
            />
          </div>
        </div>

        {/* Time */}
        <span
          className="flex-shrink-0 text-xs font-sans tabular-nums w-16 text-right"
          style={{ color: 'rgba(168,127,212,0.65)' }}
        >
          {loaded || playing ? (
            <>{formatTime(currentTime)} <span style={{ opacity: 0.4 }}>/</span> {formatTime(duration)}</>
          ) : (
            <span style={{ opacity: 0.4 }}>—:——</span>
          )}
        </span>
      </div>
    </div>
  )
}
