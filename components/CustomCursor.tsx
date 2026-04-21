'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    let mx = 0, my = 0, rx = 0, ry = 0, raf = 0

    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      if (dot.current) {
        dot.current.style.left = mx + 'px'
        dot.current.style.top  = my + 'px'
      }
    }

    const lerp = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      if (ring.current) {
        ring.current.style.left = rx + 'px'
        ring.current.style.top  = ry + 'px'
      }
      raf = requestAnimationFrame(lerp)
    }

    const enter = () => ring.current?.classList.add('large')
    const leave = () => ring.current?.classList.remove('large')

    document.addEventListener('mousemove', move)
    raf = requestAnimationFrame(lerp)

    document.querySelectorAll('a,button,[data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dot}  className="cursor-dot"  />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}