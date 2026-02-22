import { WHATSAPP_URL } from '@/lib/constants'
import styles from './ResourcesSection.module.css'

export default function ResourcesSection() {
  return (
    <div className={styles.recursosSection}>
      <div className={styles.recursosTitle}>Recursos del programa</div>
      <div className={styles.recursosGrid}>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.recursoCard}>
          <span className={styles.recursoIcon}>💬</span>
          <div className={styles.recursoName}>WhatsApp del equipo</div>
          <div className={styles.recursoDesc}>Gestión, dudas administrativas y soporte</div>
        </a>
        <div className={`${styles.recursoCard} ${styles.recursoCardDisabled}`}>
          <span className={styles.recursoIcon}>🎥</span>
          <div className={styles.recursoName}>Grabaciones</div>
          <div className={styles.recursoDesc}>Próximamente</div>
        </div>
      </div>
    </div>
  )
}
