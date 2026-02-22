'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { WHATSAPP_URL } from '@/lib/constants'
import styles from './Hero.module.css'

export default function Hero() {
  const ringsRef = useRef<HTMLDivElement>(null)

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

        <Link href="/alumnos" className={styles.heroAlumnos}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          ¿Ya eres alumno? Acceder al portal
        </Link>
      </div>

      <div className={styles.heroScrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
