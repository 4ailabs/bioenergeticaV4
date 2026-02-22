import styles from './AxisDiagram.module.css'

const points = [
  { label: 'Moléculas', sub: 'Voltaje' },
  { label: 'Células', sub: 'Señales químicas' },
  { label: 'Tejidos', sub: 'Campo bioeléctrico' },
  { label: 'Organismos', sub: 'Emoción' },
  { label: 'Humanos', sub: 'Narrativa' },
]

export default function AxisDiagram() {
  return (
    <div className={styles.axisDiagram}>
      <div className={styles.axisDiagramTitle}>Eje de persuadabilidad</div>
      <div className={styles.axisTrack}>
        <div className={styles.axisZone}>
          <span className={styles.axisZoneLabel}>Zona de patrones BV4</span>
        </div>
      </div>
      <div className={styles.axisPoints}>
        {points.map((p) => (
          <div key={p.label} className={styles.axisPoint}>
            <span className={styles.axisDot} />
            <span className={styles.axisPointLabel}>{p.label}</span>
            <span className={styles.axisPointSub}>{p.sub}</span>
          </div>
        ))}
      </div>
      <div className={styles.axisLabels}>
        <span className={styles.axisEndLabel}>&larr; Señales simples</span>
        <span className={styles.axisEndLabel}>Señales complejas &rarr;</span>
      </div>
    </div>
  )
}
