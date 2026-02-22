import { modalidadPanels } from '@/content/landing'
import styles from './Modalidad.module.css'

export default function Modalidad() {
  const markers = ['\u2726', '\u25CE', '\u2691']

  return (
    <section className={styles.modalidad} id="modalidad">
      <div className="container">
        <div className="section-head">
          <span className="section-index">04</span>
          <div>
            <h2 className="section-title">Modalidad e Informacion</h2>
            <p className="section-sub">
              Todo lo que necesitas saber antes de inscribirte.
            </p>
          </div>
        </div>

        <div className={styles.infoTriptych}>
          {modalidadPanels.map((panel, i) => (
            <div key={i} className={styles.infoPanel}>
              <span className={styles.panelMarker}>{markers[i]}</span>
              <h3 className={styles.panelTitle}>{panel.title}</h3>
              <p>{panel.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
