'use client'

import { useEffect, useRef, type RefObject } from 'react'

export function useIntersectionObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = { threshold: 0.08 },
): RefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry)
          observer.unobserve(entry.target)
        }
      })
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
  }, [callback, options])

  return ref
}
