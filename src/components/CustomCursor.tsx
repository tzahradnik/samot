import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    const loop = () => {
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`
      }
      // Ring follows with lag (lerp)
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px)`
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    // Scale up ring on clickable elements
    const onEnter = () => ringRef.current?.classList.add('cursor-hover')
    const onLeave = () => ringRef.current?.classList.remove('cursor-hover')
    document.querySelectorAll('a,button,[role=slider]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-2 h-2 rounded-full"
        style={{
          background: '#a87fd4',
          boxShadow: '0 0 8px rgba(168,127,212,0.9)',
          willChange: 'transform',
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-9 h-9 rounded-full cursor-ring"
        style={{
          border: '1px solid rgba(168,127,212,0.35)',
          willChange: 'transform',
          transition: 'width 0.25s, height 0.25s, border-color 0.25s',
        }}
      />
      <style>{`
        * { cursor: none !important; }
        .cursor-ring.cursor-hover {
          width: 52px !important;
          height: 52px !important;
          border-color: rgba(168,127,212,0.65) !important;
          margin-top: -7px;
          margin-left: -7px;
        }
      `}</style>
    </>
  )
}
