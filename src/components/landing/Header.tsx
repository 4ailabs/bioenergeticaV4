'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/hooks/useTheme'
import { WHATSAPP_URL } from '@/lib/constants'
import styles from './Header.module.css'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.logo} aria-label="Inicio">
            <span className={styles.logoPrefix}>Instituto</span>
            <span className={styles.logoName}>Centrobioenergetica</span>
          </Link>

          <nav className={styles.nav}>
            <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
              <Link href="#programa" onClick={closeMenu}>
                Programa
              </Link>
              <Link href="#modalidad" onClick={closeMenu}>
                Modalidad
              </Link>
              <a
                href={WHATSAPP_URL}
                className={styles.navCta}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Inscribirme
              </a>
              <Link href="/alumnos" className={styles.navAlumnos} onClick={closeMenu}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                Alumnos
              </Link>
            </div>

            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
            >
              {theme === 'light' ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            <button
              className={`${styles.mobileMenuToggle} ${menuOpen ? styles.active : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menú"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </nav>
        </div>
      </header>

      <div
        className={`${styles.menuOverlay} ${menuOpen ? styles.menuOverlayActive : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  )
}
