'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { stats } from '@/content/landing'
import styles from './StatsStrip.module.css'

function animateValue(
  start: number,
  end: number,
  duration: number,
  onUpdate: (val: number) => void,
) {
  const startTime = performance.now()
  function step(now: number) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
    const current = start + (end - start) * eased
    onUpdate(current)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export default function StatsStrip() {
  const stripRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [displayValues, setDisplayValues] = useState<number[]>(stats.map(() => 0))
  const hasAnimated = useRef(false)

  const startAnimation = useCallback(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true
    setInView(true)

    stats.forEach((stat, i) => {
      animateValue(0, stat.value, 1200 + i * 200, (val) => {
        setDisplayValues((prev) => {
          const next = [...prev]
          next[i] = val
          return next
        })
      })
    })
  }, [])

  useEffect(() => {
    const el = stripRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [startAnimation])

  function formatValue(val: number, stat: (typeof stats)[number]) {
    if (stat.unit === 'hrs') return val.toFixed(1)
    return Math.round(val).toString()
  }

  return (
    <section className={styles.statsStrip} ref={stripRef}>
      <div className={styles.statsRow}>
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`${styles.statBlock} ${inView ? styles.inView : ''}`}
          >
            <div className={styles.statNumberWrap}>
              <span className={styles.statNumber}>
                {formatValue(displayValues[i], stat)}
              </span>
              {stat.unit && (
                <span className={styles.statUnit}>{stat.unit}</span>
              )}
            </div>
            <span className={styles.statDesc}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
