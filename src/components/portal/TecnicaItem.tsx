'use client'

import { useState, ReactNode } from 'react'
import styles from './TecnicaItem.module.css'

interface TecnicaItemProps {
  id: string
  num: string
  title: string
  icon?: string
  children: ReactNode
}

export default function TecnicaItem({ id, num, title, icon, children }: TecnicaItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${styles.tecnicaItem} ${isOpen ? styles.open : ''}`} id={id}>
      <div className={styles.bloqueHeader} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.bloqueNum}>{num}</span>
        {icon && <span className={styles.bloqueIcon} dangerouslySetInnerHTML={{ __html: icon }} />}
        <div className={styles.bloqueHeaderText}>
          <div className={styles.bloqueTitulo}>{title}</div>
        </div>
        <span className={`${styles.bloqueChevron} ${isOpen ? styles.bloqueChevronOpen : ''}`}>▾</span>
      </div>
      <div className={`${styles.bloqueContent} ${isOpen ? styles.bloqueContentOpen : ''}`} data-num={num.replace('T', '')}>
        {children}
      </div>
    </div>
  )
}
