'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import PortalHeader from '@/components/portal/PortalHeader'
import PortalFooter from '@/components/portal/PortalFooter'
import TecnicaItem from '@/components/portal/TecnicaItem'
import { tecnicas } from '@/content/portal-tecnicas'
import styles from './TecnicasClient.module.css'

export default function TecnicasClient() {
  const { isAuthenticated, isLoading, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/alumnos')
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading || !isAuthenticated) return null

  return (
    <div>
      <PortalHeader onLogout={logout} />
      <main className={styles.main}>

        <div className={styles.pageHeader}>
          <Link href="/alumnos" className={styles.backLink}>← Volver al portal</Link>
          <h1 className={styles.pageTitle}>Técnicas de Reestructuración</h1>
          <p className={styles.pageSubtitle}>Somato-Emocional · 10 técnicas</p>
        </div>

        <div className={styles.tecnicasGrid}>
          {tecnicas.map((tec) => (
            <TecnicaItem key={tec.id} id={tec.id} num={tec.num} title={tec.title} icon={tec.iconSvg}>
              <div className="tecnica-badges">
                {tec.badges.map((b, i) => (
                  <span key={i} className={`tecnica-badge ${b.variant ? `tecnica-badge-${b.variant}` : ''}`}>
                    {b.label}
                  </span>
                ))}
              </div>
              <div className="idea-central">
                <p>{tec.ideaCentral}</p>
              </div>
              <div className="indicaciones-tags">
                {tec.indicaciones.map((ind, i) => (
                  <span key={i} className="indicacion-tag">{ind}</span>
                ))}
              </div>
              <ol className="protocolo-steps">
                {tec.protocolo.map((step, i) => (
                  <li key={i}>
                    <strong>{step.title}</strong>
                    <span>{step.description}</span>
                  </li>
                ))}
              </ol>
              <blockquote className="frase-clave">{tec.fraseClave}</blockquote>
              <div className="practica-casa">
                <span className="practica-casa-label">Prácticas para casa</span>
                <ul>
                  {tec.practicasCasa.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </TecnicaItem>
          ))}
        </div>

      </main>
      <PortalFooter />
    </div>
  )
}
