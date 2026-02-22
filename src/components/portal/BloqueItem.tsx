'use client'

import { useRef, useEffect, ReactNode } from 'react'
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
  hasPrev: boolean
  hasNext: boolean
  currentIndex: number
  totalCount: number
  onToggle: () => void
  onPrev: () => void
  onNext: () => void
  onToggleProgress: (id: string) => void
  children: ReactNode
}

export default function BloqueItem({
  id, num, title, subtitle, isTame, icon, preview,
  isCompleted, isOpen, hasPrev, hasNext, currentIndex, totalCount,
  onToggle, onPrev, onNext, onToggleProgress, children
}: BloqueItemProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && ref.current) {
      const t = setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  const itemCls = [
    styles.bloqueItem,
    isTame ? styles.tameItem : '',
    isTame ? styles.bloqueFull : '',
    isOpen ? styles.open : '',
    isCompleted ? styles.completedItem : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={itemCls} id={id} ref={ref}>
      <div className={styles.bloqueHeader} onClick={onToggle}>
        <div className={styles.bloqueHeaderTop}>
          <span className={styles.bloqueNum}>{num}</span>
          <span className={styles.bloqueIcon} dangerouslySetInnerHTML={{ __html: icon }} />
          <div className={styles.bloqueHeaderText}>
            <div className={styles.bloqueTitulo}>{title}</div>
            <div className={styles.bloqueSubtitulo}>{subtitle}</div>
          </div>
          <div className={styles.bloqueHeaderRight}>
            <span className={`${styles.completionDot} ${isCompleted ? styles.completionDotDone : ''}`} />
            <span className={`${styles.bloqueChevron} ${isOpen ? styles.bloqueChevronOpen : ''}`}>▾</span>
          </div>
        </div>
        {!isOpen && (
          <p className={styles.bloquePreview}>{preview}</p>
        )}
      </div>

      <div className={`${styles.bloqueContent} ${isOpen ? styles.bloqueContentOpen : ''}`} data-num={num}>
        {children}

        <div className={styles.bloqueFooter}>
          <button
            className={`${styles.bloqueCheck} ${isCompleted ? styles.bloqueCheckDone : ''}`}
            onClick={(e) => { e.stopPropagation(); onToggleProgress(id) }}
          >
            {isCompleted ? '✓ Completado' : 'Marcar como completado'}
          </button>

          <div className={styles.bloqueNav}>
            <button
              className={styles.bloqueNavBtn}
              onClick={onPrev}
              disabled={!hasPrev}
            >
              ← Anterior
            </button>
            <span className={styles.bloqueNavPos}>{currentIndex} / {totalCount}</span>
            <button
              className={styles.bloqueNavBtn}
              onClick={onNext}
              disabled={!hasNext}
            >
              Siguiente →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
