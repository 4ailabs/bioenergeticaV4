import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.siteFooter}>
      <div className="container">
        <blockquote className={styles.footerQuote}>
          &ldquo;El cuerpo no miente. Cada tension, cada dolor, cada bloqueo es
          un mensaje que espera ser descifrado.&rdquo;
        </blockquote>
        <span className={styles.footerLegal}>
          &copy; {year} Instituto Centrobioenergetica. Todos los derechos
          reservados.
        </span>
      </div>
    </footer>
  )
}
