import styles from './LevelsTower.module.css'

const levels = [
  {
    num: 'N4',
    name: 'Consciente Racional',
    desc: 'Neocórtex · Lenguaje · Análisis',
    note: 'Accesible a la voluntad y al lenguaje verbal.',
    target: false,
  },
  {
    num: 'N3',
    name: 'Inconsciente Corporal',
    desc: 'Improntas · SNA · Supervivencia',
    note: 'Sede de los patrones de supervivencia. Opera por debajo del lenguaje — no se modifica con razonamiento.',
    target: true,
  },
  {
    num: 'N2',
    name: 'Homeostático',
    desc: 'Tejidos · Órganos · Memoria distribuida',
    note: 'Recibe las instrucciones de N3 y regula el entorno interno del organismo.',
    target: false,
  },
  {
    num: 'N1',
    name: 'Físico / Celular',
    desc: 'Células · Voltaje · Decisiones locales',
    note: 'Base bioeléctrica. Cada célula toma decisiones de supervivencia de forma autónoma.',
    target: false,
  },
]

export default function LevelsTower() {
  return (
    <div>
      <div className={styles.levelsTower}>
        {levels.map((l) => (
          <div key={l.num} className={`${styles.levelRow}${l.target ? ` ${styles.levelTarget}` : ''}`}>
            <div className={styles.levelBar}>
              <span className={styles.levelNum}>{l.num}</span>
              <div className={styles.levelNameGroup}>
                <span className={styles.levelName}>{l.name}</span>
                {l.note && <span className={styles.levelNote}>{l.note}</span>}
              </div>
            </div>
            <span className={styles.levelDesc}>{l.desc}</span>
            {l.target && <span className={styles.levelArrow}>PUNTO DE INTERVENCIÓN BV4*</span>}
          </div>
        ))}
      </div>
      <p className={styles.levelFootnote}>
        * <strong>BV4</strong> — Bioenergética Vectorial (4.ª generación): protocolo terapéutico somato-emocional que interviene directamente en N3, donde residen los patrones de supervivencia grabados antes del lenguaje.
      </p>
    </div>
  )
}
