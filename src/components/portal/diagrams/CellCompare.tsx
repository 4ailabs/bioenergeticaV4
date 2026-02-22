import styles from './CellCompare.module.css'

export default function CellCompare() {
  return (
    <div className={styles.cellCompare}>
      <div className={`${styles.cellState} ${styles.cellIsolated}`}>
        <div className={styles.cellVisual}><span className={styles.cellVisualInner}>◯</span></div>
        <span className={styles.cellStateTitle}>Célula sola</span>
        <span className={styles.cellStateDesc}>Información limitada. Decisiones locales. Sin contexto del sistema.</span>
      </div>
      <span className={styles.cellArrow}>&rarr;</span>
      <div className={`${styles.cellState} ${styles.cellConnected}`}>
        <div className={styles.cellVisual}><span className={styles.cellVisualInner}>✦</span></div>
        <span className={styles.cellStateTitle}>Conectada al campo</span>
        <span className={styles.cellStateDesc}>Acceso a la inteligencia colectiva. Comparte voltaje e identidad.</span>
      </div>
    </div>
  )
}
