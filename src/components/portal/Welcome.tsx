import styles from './Welcome.module.css'

export default function Welcome() {
  return (
    <div className={styles.welcomeSection}>
      <span className={styles.welcomeTag}>Módulo 1 · Jornada 01 · 21 Feb 2026</span>
      <h1>El Cuerpo como Sistema</h1>
      <p>Bienvenido al portal de contenidos. Aquí encontrarás el material completo de cada bloque. Haz clic en cualquier bloque para expandir su contenido directamente en la página.</p>
    </div>
  )
}
