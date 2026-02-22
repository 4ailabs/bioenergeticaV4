'use client'

import styles from './PortalFooter.module.css'

export default function PortalFooter() {
  return (
    <div className={styles.portalFooter}>
      © Instituto CentroBioenergética · Bioenergética V4 · Uso exclusivo para alumnos del programa
      <br />
      <a
        href="#"
        className={styles.backToTop}
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
      >
        ↑ Volver al inicio
      </a>
    </div>
  )
}
