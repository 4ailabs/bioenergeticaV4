'use client'

import { useState } from 'react'
import { jornadas } from '@/content/landing'
import styles from './Schedule.module.css'

export default function Schedule() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className={styles.schedule} id="programa">
      <div className="container">
        <div className="section-head">
          <span className="section-index">03</span>
          <div>
            <h2 className="section-title">Programa de 3 Jornadas</h2>
            <p className="section-sub">
              Cada jornada es una inmersion intensiva de un dia completo. De
              10:00 a 18:00 h.
            </p>
          </div>
        </div>

        <div className={styles.jornadasAccordion}>
          {jornadas.map((jornada, i) => {
            const isOpen = openIndex === i
            return (
              <div key={jornada.num} className={styles.jornadaAc}>
                <button
                  className={styles.jornadaAcHdr}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.jornadaAcLeft}>
                    <span className={styles.jornadaNum}>
                      {jornada.num}
                    </span>
                    <div className={styles.jornadaAcInfo}>
                      <span className={styles.jornadaDate}>
                        {jornada.date}
                      </span>
                      <span className={styles.jornadaAcTitle}>
                        {jornada.title}
                      </span>
                    </div>
                  </div>
                  <svg
                    className={`${styles.jornadaAcIcon} ${isOpen ? styles.open : ''}`}
                    width="20"
                    height="20"
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
                  className={`${styles.jornadaAcBody} ${isOpen ? styles.bodyOpen : ''}`}
                >
                  <p className={styles.jornadaPlain}>{jornada.subtitle}</p>
                  <div className={styles.jornadaSessions}>
                    {jornada.sessions.map((session) => (
                      <div key={session.time} className={styles.session}>
                        <span className={styles.sessionTime}>
                          {session.time}
                        </span>
                        <ul className={styles.sessionList}>
                          {session.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
