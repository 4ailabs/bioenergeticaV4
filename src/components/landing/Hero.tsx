'use client'

import { useEffect, useRef, useState } from 'react'
import { WHATSAPP_URL } from '@/lib/constants'
import styles from './Hero.module.css'

export default function Hero() {
  const cupoRef = useRef<HTMLDivElement>(null)
  const ringsRef = useRef<HTMLDivElement>(null)
  const [cupoAnimated, setCupoAnimated] = useState(false)

  /* Cupo bar animation on scroll into view */
  useEffect(() => {
    const el = cupoRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCupoAnimated(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  /* Parallax effect on rings */
  useEffect(() => {
    function handleScroll() {
      if (!ringsRef.current) return
      const y = window.scrollY
      ringsRef.current.style.transform = `translateY(${y * 0.15}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.heroImageOverlay} />

      <div className={styles.heroBg}>
        <div className={styles.heroRings} ref={ringsRef}>
          <div className={`${styles.ring} ${styles.ring1}`} />
          <div className={`${styles.ring} ${styles.ring2}`} />
          <div className={`${styles.ring} ${styles.ring3}`} />
          <div className={`${styles.ring} ${styles.ring4}`} />
          <div className={`${styles.ring} ${styles.ring5}`} />
        </div>
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroMeta}>
          <span className={styles.protocolTag}>Version 4.0</span>
          <span className={styles.protocolTag}>Presencial + Online</span>
        </div>

        <h1 className={styles.heroTitle}>
          <span className={styles.heroWord}>Bioenergetica</span>
          <span className={styles.heroVersion}>V4</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Cartografia de los Campos que Organizan tu Experiencia. Un protocolo
          sistematico para identificar y transformar patrones energeticos.
        </p>

        <div className={styles.heroActions}>
          <a
            href={WHATSAPP_URL}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar mi lugar
          </a>
          <div className={styles.heroDates}>
            <span className={styles.dateLabel}>Inicio</span>
            <span className={styles.dateValue}>21 Feb 2026</span>
          </div>
        </div>

        <div className={styles.cupoBar} ref={cupoRef}>
          <div className={styles.cupoInfo}>
            <span className={styles.cupoLabel}>Cupo limitado</span>
            <span className={styles.cupoCount}>
              <strong>70%</strong> reservado
            </span>
          </div>
          <div className={styles.cupoTrack}>
            <div
              className={styles.cupoFill}
              style={{ width: cupoAnimated ? '70%' : '0%' }}
            />
          </div>
        </div>
      </div>

      <div className={styles.heroScrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
