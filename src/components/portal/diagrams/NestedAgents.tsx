import styles from './NestedAgents.module.css'

export default function NestedAgents() {
  return (
    <div className={styles.nestedDiagram}>
      <div className={styles.nestedDiagramTitle}>Agentes cognitivos anidados</div>
      <div className={styles.nestedRings}>
        <div className={`${styles.nestedRing} ${styles.r5}`}>
          <span className={styles.nestedRingLabel}>Organismo</span>
          <div className={`${styles.nestedRing} ${styles.r4}`}>
            <span className={styles.nestedRingLabel}>Órgano</span>
            <div className={`${styles.nestedRing} ${styles.r3}`}>
              <span className={styles.nestedRingLabel}>Tejido</span>
              <div className={`${styles.nestedRing} ${styles.r2}`}>
                <span className={styles.nestedRingLabel}>Célula</span>
                <div className={`${styles.nestedRing} ${styles.r1}`}>
                  <span className={styles.nestedRingLabel}>Mol.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.nestedCaption}>
        &ldquo;Todo agente cognitivo está compuesto por partes que son, a su vez, agentes cognitivos.&rdquo;
      </div>
    </div>
  )
}
