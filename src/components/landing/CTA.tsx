'use client'

import { WHATSAPP_URL } from '@/lib/constants'
import styles from './CTA.module.css'

export default function CTA() {
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

          <a
            href={WHATSAPP_URL}
            className={`btn-primary ${styles.btnLarge}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar mi lugar
          </a>

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
