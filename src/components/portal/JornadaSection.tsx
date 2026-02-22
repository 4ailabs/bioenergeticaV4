'use client'

import { useState, ReactNode } from 'react'
import styles from './JornadaSection.module.css'

interface JornadaSectionProps {
  id: string
  title: string
  date: string
  defaultOpen?: boolean
  locked?: boolean
  children?: ReactNode
}

export default function JornadaSection({ id, title, date, defaultOpen = false, locked = false, children }: JornadaSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const num = id === 'jornadaTecnicas' ? 'Técnicas' : `Jornada ${id.replace('jornada', '')}`

  if (locked) {
    const lockedDate = date
    return (
      <div className={`${styles.jornadaSection} ${styles.locked}`} id={id}>
        <div className={styles.jornadaHeader}>
          <div className={styles.jornadaHeaderLeft}>
            <span className={styles.jornadaNum}>{num}</span>
            <span className={styles.jornadaTitle}>{title}</span>
          </div>
          <div className={styles.jornadaRight}>
            <span className={styles.jornadaDate}>{date}</span>
            <span className={styles.lockedBadge}>🔒 BLOQUEADO</span>
          </div>
        </div>
        <div className={styles.lockedMsg}>
          Este contenido estará disponible a partir del {lockedDate}.
        </div>
      </div>
    )
  }

  return (
    <div className={styles.jornadaSection} id={id}>
      <div className={styles.jornadaHeader} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.jornadaHeaderLeft}>
          <span className={styles.jornadaNum}>{num}</span>
          <span className={styles.jornadaTitle}>{title}</span>
        </div>
        <div className={styles.jornadaRight}>
          <span className={styles.jornadaDate}>{date}</span>
          <span className={`${styles.jornadaChevron} ${isOpen ? styles.jornadaChevronOpen : ''}`}>▾</span>
        </div>
      </div>
      {isOpen && (
        <div className={styles.jornadaBody}>
          {children}
        </div>
      )}
    </div>
  )
}
