'use client'

import { useState, ReactNode } from 'react'
import styles from './BloqueItem.module.css'

interface BloqueItemProps {
  id: string
  num: string
  title: string
  subtitle: string
  isTame: boolean
  icon: string
  isCompleted: boolean
  onToggleProgress: (id: string) => void
  children: ReactNode
}

export default function BloqueItem({ id, num, title, subtitle, isTame, icon, isCompleted, onToggleProgress, children }: BloqueItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const itemCls = `${styles.bloqueItem} ${isTame ? styles.tameItem : ''} ${isOpen ? styles.open : ''}`

  return (
    <div className={itemCls} id={id}>
      <div className={styles.bloqueHeader} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.bloqueNum}>{num}</span>
        <span className={styles.bloqueIcon} dangerouslySetInnerHTML={{ __html: icon }} />
        <div className={styles.bloqueHeaderText}>
          <div className={styles.bloqueTitulo}>{title}</div>
          <div className={styles.bloqueSubtitulo}>{subtitle}</div>
        </div>
        <span className={`${styles.bloqueChevron} ${isOpen ? styles.bloqueChevronOpen : ''}`}>▾</span>
      </div>
      <div className={`${styles.bloqueContent} ${isOpen ? styles.bloqueContentOpen : ''}`} data-num={num}>
        {children}
        <button
          className={`${styles.bloqueCheck} ${isCompleted ? styles.bloqueCheckDone : ''}`}
          onClick={() => onToggleProgress(id)}
        >
          {isCompleted ? '✓ Completado' : 'Marcar como completado'}
        </button>
      </div>
    </div>
  )
}
