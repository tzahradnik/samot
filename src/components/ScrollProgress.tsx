import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = document.getElementById('scroll-container')
    if (!el) return

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el
      const max = scrollHeight - clientHeight
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent">
      <div
        className="h-full transition-all duration-100 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #7a56a8, #a87fd4)',
          boxShadow: '0 0 8px rgba(168,127,212,0.55)',
        }}
      />
    </div>
  )
}
