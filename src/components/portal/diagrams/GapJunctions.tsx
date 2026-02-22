import styles from './GapJunctions.module.css'

const cells = [
  { voltage: '−65mV', label: 'Célula' },
  { voltage: '−58mV', label: 'Célula' },
  { voltage: '−62mV', label: 'Célula' },
  { voltage: '−60mV', label: 'Célula' },
]

export default function GapJunctions() {
  return (
    <div className={styles.gapDiagram}>
      <div className={styles.gapDiagramTitle}>Células conectadas por gap junctions</div>
      <div className={styles.gapCells}>
        {cells.map((c, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <div className={styles.gapCell}>
              <span className={styles.gapCellV}>{c.voltage}</span>
              <span className={styles.gapCellLabel}>{c.label}</span>
            </div>
            {i < cells.length - 1 && <div className={styles.gapJunction} />}
          </div>
        ))}
      </div>
    </div>
  )
}
