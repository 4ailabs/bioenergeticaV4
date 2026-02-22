import styles from './Cartography.module.css'

const axes = [
  { icon: '🫁', iconCls: 'cartoAxisIconAmber', titleCls: 'cartoAxisTitleAmber', title: 'Dónde', q: 'Localización somática', detail: '¿En qué zona del cuerpo? Forma, temperatura, textura' },
  { icon: '⏳', iconCls: 'cartoAxisIconJade', titleCls: 'cartoAxisTitleJade', title: 'Cuándo', q: 'Rastreo temporal', detail: '¿Primera vez que sentiste esto? Edad, contexto, momento' },
  { icon: '🤝', iconCls: 'cartoAxisIconViolet', titleCls: 'cartoAxisTitleViolet', title: 'Cómo', q: 'Dinámica relacional', detail: '¿Quién estaba? ¿Qué rol tenía cada uno?' },
]

export default function Cartography() {
  return (
    <div className={styles.cartoDiagram}>
      <div className={styles.cartoDiagramTitle}>Las tres dimensiones de la cartografía</div>
      <div className={styles.cartoAxes}>
        {axes.map((a) => (
          <div key={a.title} className={styles.cartoAxis}>
            <div className={`${styles.cartoAxisIcon} ${styles[a.iconCls]}`}>{a.icon}</div>
            <span className={`${styles.cartoAxisTitle} ${styles[a.titleCls]}`}>{a.title}</span>
            <span className={styles.cartoAxisQ}>{a.q}</span>
            <span className={styles.cartoAxisDetail}>{a.detail}</span>
          </div>
        ))}
      </div>
      <div className={styles.cartoResult}>
        <span>📍</span>
        <span className={styles.cartoResultText}>Mapa completo de la zona aislada</span>
      </div>
    </div>
  )
}
