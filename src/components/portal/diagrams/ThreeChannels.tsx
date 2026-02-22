import styles from './ThreeChannels.module.css'

const channels = [
  { cls: 'channelVerbal', icon: '💬', label: 'Verbal', desc: 'Palabras, afirmaciones, preguntas' },
  { cls: 'channelSomatic', icon: '🫁', label: 'Somático', desc: 'Sensación, localización, temperatura' },
  { cls: 'channelRelational', icon: '🤝', label: 'Relacional', desc: 'Campo facilitador-consultante' },
]

export default function ThreeChannels() {
  return (
    <div className={styles.channelsDiagram}>
      <div className={styles.channelsDiagramTitle}>Convergencia de los tres canales</div>
      <div className={styles.channelsVisual}>
        {channels.map((ch) => (
          <div key={ch.label} className={`${styles.channelArm} ${styles[ch.cls]}`}>
            <div className={styles.channelDot}>{ch.icon}</div>
            <span className={styles.channelLabel}>{ch.label}</span>
            <span className={styles.channelDesc}>{ch.desc}</span>
            <div className={styles.channelLine} />
          </div>
        ))}
      </div>
      <div className={styles.channelsTarget}>
        <div className={styles.channelsTargetDot}>📍</div>
        <span className={styles.channelsTargetLabel}>Localización confirmada</span>
      </div>
    </div>
  )
}
