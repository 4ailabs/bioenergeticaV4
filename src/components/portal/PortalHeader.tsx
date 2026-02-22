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
        <span className={styles.headerBadge}>Portal Alumnos</span>
        <span className={styles.headerTitle}>Bioenergética V4</span>
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
