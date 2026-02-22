'use client'

import { useCountdown } from '@/hooks/useCountdown'
import { WHATSAPP_URL } from '@/lib/constants'
import styles from './CTA.module.css'

function pad(n: number): string {
  return String(n).padStart(2, '0')
}

export default function CTA() {
  const { days, hours, mins, secs } = useCountdown()

  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaFrame}>
          <span className={styles.ctaEyebrow}>Registro Abierto</span>

          <h2 className={styles.ctaTitle}>
            El cuerpo ya sabe. <em>Aprende a escucharlo.</em>
          </h2>

          <span className={styles.ctaAuthor}>
            Dr. Miguel Ojeda Rios — Instituto Centrobioenergetica
          </span>

          <div className={styles.countdown}>
            <div className={styles.countdownUnit}>
              <span className={styles.countdownNum}>{pad(days)}</span>
              <span className={styles.countdownLabel}>Dias</span>
            </div>
            <span className={styles.countdownSep}>:</span>
            <div className={styles.countdownUnit}>
              <span className={styles.countdownNum}>{pad(hours)}</span>
              <span className={styles.countdownLabel}>Horas</span>
            </div>
            <span className={styles.countdownSep}>:</span>
            <div className={styles.countdownUnit}>
              <span className={styles.countdownNum}>{pad(mins)}</span>
              <span className={styles.countdownLabel}>Min</span>
            </div>
            <span className={styles.countdownSep}>:</span>
            <div className={styles.countdownUnit}>
              <span className={styles.countdownNum}>{pad(secs)}</span>
              <span className={styles.countdownLabel}>Seg</span>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            className={`btn-primary ${styles.btnLarge}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar mi lugar
          </a>

          <p className={styles.ctaUrgencia}>Cupos limitados</p>

          <p className={styles.ctaMicrocopy}>
            Escribe por{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>{' '}
            para resolver cualquier duda antes de inscribirte.
          </p>
        </div>
      </div>
    </section>
  )
}
