import styles from './LevelsTower.module.css'

const levels = [
  { num: 'N4', name: 'Consciente Racional', desc: 'Neocórtex · Lenguaje · Análisis', target: false },
  { num: 'N3', name: 'Sistemas Emocionales', desc: 'Improntas · SNA · Supervivencia', target: true },
  { num: 'N2', name: 'Homeostático', desc: 'Tejidos · Órganos · Memoria distribuida', target: false },
  { num: 'N1', name: 'Físico / Celular', desc: 'Células · Voltaje · Decisiones locales', target: false },
]

export default function LevelsTower() {
  return (
    <div className={styles.levelsTower}>
      {levels.map((l) => (
        <div key={l.num} className={`${styles.levelRow}${l.target ? ` ${styles.levelTarget}` : ''}`}>
          <div className={styles.levelBar}>
            <span className={styles.levelNum}>{l.num}</span>
            <span className={styles.levelName}>{l.name}</span>
          </div>
          <span className={styles.levelDesc}>{l.desc}</span>
          {l.target && <span className={styles.levelArrow}>&larr; BV4</span>}
        </div>
      ))}
    </div>
  )
}
