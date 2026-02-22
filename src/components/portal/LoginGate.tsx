'use client'

import { useState, FormEvent } from 'react'
import styles from './LoginGate.module.css'

interface LoginGateProps {
  onLogin: (password: string) => boolean
}

export default function LoginGate({ onLogin }: LoginGateProps) {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!onLogin(password.trim())) {
      setError(true)
    }
  }

  return (
    <div className={styles.loginScreen}>
      <div className={styles.loginBox}>
        <div className={styles.loginLogo}>
          <span className={styles.loginLogoPrefix}>Instituto CentroBioenergética</span>
          <span className={styles.loginLogoMain}>Bioenergética V4</span>
        </div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label htmlFor="pw">Contraseña de acceso</label>
          <div className={styles.pwWrap}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="pw"
              autoComplete="current-password"
              placeholder="••••••••••••"
              autoFocus
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false) }}
            />
            <button
              type="button"
              className={styles.pwToggle}
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Mostrar contraseña"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {showPassword ? (
                  <>
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </>
                ) : (
                  <>
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </>
                )}
              </svg>
            </button>
          </div>
          <button type="submit" className={styles.loginBtn}>Entrar al portal</button>
          {error && <p className={styles.loginError}>Contraseña incorrecta. Inténtalo de nuevo.</p>}
        </form>
        <p className={styles.loginNote}>Acceso exclusivo para alumnos del programa.</p>
      </div>
    </div>
  )
}
