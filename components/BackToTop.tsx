'use client'
import { useEffect, useRef } from 'react'

export default function BackToTop() {
  const btn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!btn.current) return
      if (window.scrollY > 400) btn.current.classList.add('visible')
      else btn.current.classList.remove('visible')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      ref={btn}
      onClick={scrollTop}
      className="back-to-top"
      aria-label="Back to top"
      data-cursor
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 13V3M8 3L3 8M8 3L13 8" stroke="#080917" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}