'use client'

import { ReactNode } from 'react'
import styles from './BloqueItem.module.css'

interface BloqueItemProps {
  id: string
  num: string
  title: string
  subtitle: string
  isTame: boolean
  icon: string
  preview: string
  isCompleted: boolean
  isOpen: boolean
  onToggle: () => void
  onToggleProgress: (id: string) => void
  children: ReactNode
}

export default function BloqueItem({
  id, num, title, subtitle, isTame, icon, preview,
  isCompleted, isOpen,
  onToggle, onToggleProgress, children
}: BloqueItemProps) {
  const itemCls = [
    styles.bloqueItem,
    isTame ? styles.tameItem : '',
    isOpen ? styles.openItem : '',
    isCompleted ? styles.completedItem : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={itemCls} id={id}>
      <div className={styles.bloqueHeader} onClick={onToggle}>
        <span className={styles.bloqueNum}>{num}</span>
        <div className={styles.bloqueHeaderText}>
          <div className={styles.bloqueTitulo}>{title}</div>
          <div className={styles.bloqueSubtitulo}>{subtitle}</div>
        </div>
        <div className={styles.bloqueHeaderRight}>
          <span className={`${styles.completionDot} ${isCompleted ? styles.completionDotDone : ''}`} />
          <span className={`${styles.bloqueChevron} ${isOpen ? styles.bloqueChevronOpen : ''}`}>▾</span>
        </div>
      </div>

      <div className={`${styles.bloqueContent} ${isOpen ? styles.bloqueContentOpen : ''}`}>
        <div className={styles.bloqueContentInner} data-num={num}>
          {children}

          <div className={styles.bloqueFooter}>
            <button
              className={`${styles.bloqueCheck} ${isCompleted ? styles.bloqueCheckDone : ''}`}
              onClick={(e) => { e.stopPropagation(); onToggleProgress(id) }}
            >
              {isCompleted ? '✓ Completado' : 'Marcar como completado'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
