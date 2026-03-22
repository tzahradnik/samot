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

    const heroSection = document.getElementById('hero')
    const aboutSection = document.getElementById('about')
    const exhibitionSection = document.getElementById('exhibition-info')

    sections.forEach(s => s && observer.observe(s))
    if (heroSection) hideObserver.observe(heroSection)
    if (aboutSection) hideObserver.observe(aboutSection)
    if (exhibitionSection) hideObserver.observe(exhibitionSection)

    return () => {
      observer.disconnect()
      hideObserver.disconnect()
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-7 py-5 pointer-events-none">
      {/* Logo */}
      <a
        href="#hero"
        className="pointer-events-auto font-serif text-sm tracking-[0.2em] text-text-muted transition-colors duration-500"
        onMouseEnter={e => (e.currentTarget.style.color = '#a87fd4')}
        onMouseLeave={e => (e.currentTarget.style.color = '')}
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        samoT
      </a>

      {/* Drawing counter — only visible on drawing sections */}
      <div
        className="transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(-6px)' }}
      >
        {currentId !== null && (
          <span className="font-serif text-xs tracking-[0.3em]" style={{ color: 'rgba(168,127,212,0.55)' }}>
            {currentId} <span style={{ color: 'rgba(168,127,212,0.25)' }}>/</span> 015
          </span>
        )}
      </div>
    </nav>
  )
}
