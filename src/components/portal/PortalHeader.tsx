'use client'

import { useTheme } from '@/hooks/useTheme'
import styles from './PortalHeader.module.css'

interface PortalHeaderProps {
  onLogout: () => void
}

export default function PortalHeader({ onLogout }: PortalHeaderProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerBrand}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mark-inline.svg"
          alt="Bioenergética V4"
          width={30}
          height={30}
          style={{ borderRadius: 5, flexShrink: 0 }}
        />
        <div>
          <span className={styles.headerBadge}>Portal Alumnos</span>
          <span className={styles.headerTitle}>Bioenergética V4</span>
        </div>
      </div>
      <div className={styles.headerActions}>
        <button className={styles.themeBtn} onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
          <span className={styles.themeBtnLabel}>{theme === 'light' ? ' Oscuro' : ' Claro'}</span>
        </button>
        <button className={styles.logoutBtn} onClick={onLogout}>Salir</button>
      </div>
    </header>
  )
}
