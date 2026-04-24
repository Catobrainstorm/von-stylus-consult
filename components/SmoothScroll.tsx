'use client'
import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    let lenis: any
    const init = async () => {
      const Lenis = (await import('lenis')).default
      lenis = new Lenis({ lerp: 0.07, smoothWheel: true, syncTouch: false })
      const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf) }
      requestAnimationFrame(raf)
    }
    init()
    return () => lenis?.destroy()
  }, [])
  return null
}