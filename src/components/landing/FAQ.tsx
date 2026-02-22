'use client'

import { useState } from 'react'
import { faqItems } from '@/content/landing'
import styles from './FAQ.module.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className="section-head">
          <span className="section-index">05</span>
          <div>
            <h2 className="section-title">Preguntas Frecuentes</h2>
            <p className="section-sub">
              Respuestas a las dudas mas comunes antes de inscribirte.
            </p>
          </div>
        </div>

        <div className={styles.faqList}>
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className={styles.faqItem}>
                <button
                  className={styles.faqQ}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ''}`}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div
                  className={`${styles.faqA} ${isOpen ? styles.faqAOpen : ''}`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
