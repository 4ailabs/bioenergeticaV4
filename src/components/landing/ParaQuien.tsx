import { profileCards } from '@/content/landing'
import styles from './ParaQuien.module.css'

export default function ParaQuien() {
  return (
    <section className={styles.paraQuien}>
      <div className="container">
        <div className="section-head">
          <span className="section-index">02</span>
          <div>
            <h2 className="section-title">Para quien es este programa</h2>
            <p className="section-sub">
              Este curso es para ti si te identificas con alguna de estas
              situaciones.
            </p>
          </div>
        </div>

        <div className={styles.pqGrid}>
          {profileCards.map((text, i) => (
            <div key={i} className={styles.pqCard}>
              <span className={styles.pqIcon} aria-hidden="true">
                {i === 0 && '\u25C7'}
                {i === 1 && '\u21BB'}
                {i === 2 && '\u2691'}
                {i === 3 && '\u2609'}
              </span>
              <p className={styles.pqText}>{text}</p>
            </div>
          ))}
        </div>

        <p className={styles.pqNote}>
          No se requiere experiencia previa. El programa parte desde cero.
        </p>
      </div>
    </section>
  )
}
