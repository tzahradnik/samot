import { useEffect, useState } from 'react'
import { drawings } from '../data/drawings'

export default function Navigation() {
  const [currentId, setCurrentId] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const container = document.getElementById('scroll-container')
    if (!container) return

    const sections = drawings.map(d => document.getElementById(`drawing-${d.id}`))

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace('drawing-', '')
            setCurrentId(id)
            setVisible(true)
            break
          }
        }
      },
      { root: container, threshold: 0.5 }
    )

    // Also observe non-drawing sections to hide nav number
    const heroSection = document.getElementById('hero')
    const aboutSection = document.getElementById('about')
    const exhibitionSection = document.getElementById('exhibition-info')

    const hideObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(false)
          }
        }
      },
      { root: container, threshold: 0.5 }
    )

    sections.forEach(s => s && observer.observe(s))
    if (heroSection) hideObserver.observe(heroSection)
    if (aboutSection) hideObserver.observe(aboutSection)
    if (exhibitionSection) hideObserver.observe(exhibitionSection)

    return () => {
      observer.disconnect()
      hideObserver.disconnect()
    }
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`drawing-${id}`)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 pointer-events-none">
      {/* Logo / Title */}
      <a
        href="#hero"
        className="pointer-events-auto font-serif text-sm tracking-widest text-text-secondary transition-colors duration-300"
        style={{ color: undefined }}
        onMouseEnter={e => (e.currentTarget.style.color = '#a87fd4')}
        onMouseLeave={e => (e.currentTarget.style.color = '')}
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        samoT
      </a>

      {/* Current drawing indicator */}
      <div
        className={`pointer-events-auto transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}
      >
        {currentId !== null && (
          <div className="flex items-center gap-3">
            <span className="font-serif text-sm tracking-widest" style={{ color: '#a87fd4' }}>
              {currentId}
            </span>
            <span className="text-text-muted text-xs">/</span>
            <span className="font-sans text-xs text-text-muted">015</span>
          </div>
        )}
      </div>

      {/* Mini dot navigation */}
      <div className="pointer-events-auto flex gap-1.5 items-center">
        {drawings.map(d => (
          <button
            key={d.id}
            onClick={() => scrollToSection(d.id)}
            title={`Kresba ${d.id}: ${d.title}`}
            className={`w-1 h-1 rounded-full transition-all duration-300 ${
              currentId === d.id
                ? 'w-3 scale-110'
                : 'bg-text-muted hover:bg-text-secondary'
            }`}
            style={currentId === d.id ? { background: '#a87fd4' } : {}}
          />
        ))}
      </div>
    </nav>
  )
}
