'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useProgress } from '@/hooks/useProgress'
import LoginGate from '@/components/portal/LoginGate'
import PortalHeader from '@/components/portal/PortalHeader'
import Welcome from '@/components/portal/Welcome'
import ProgressBar from '@/components/portal/ProgressBar'
import JornadaSection from '@/components/portal/JornadaSection'
import BloqueItem from '@/components/portal/BloqueItem'
import TecnicaItem from '@/components/portal/TecnicaItem'
import ResourcesSection from '@/components/portal/ResourcesSection'
import PortalFooter from '@/components/portal/PortalFooter'

import AxisDiagram from '@/components/portal/diagrams/AxisDiagram'
import NestedAgents from '@/components/portal/diagrams/NestedAgents'
import LevelsTower from '@/components/portal/diagrams/LevelsTower'
import GapJunctions from '@/components/portal/diagrams/GapJunctions'
import CellCompare from '@/components/portal/diagrams/CellCompare'
import IsolationFlow from '@/components/portal/diagrams/IsolationFlow'
import ThreeChannels from '@/components/portal/diagrams/ThreeChannels'
import Cartography from '@/components/portal/diagrams/Cartography'

import bloqueStyles from '@/components/portal/BloqueItem.module.css'
import { bloques } from '@/content/portal-bloques'
import { tecnicas } from '@/content/portal-tecnicas'

const diagramMap: Record<string, React.ReactNode> = {
  'axis-diagram': <AxisDiagram />,
  'nested-diagram': <NestedAgents />,
  'levels-tower': <LevelsTower />,
  'gap-diagram': <GapJunctions />,
  'cell-compare': <CellCompare />,
  'isolation-flow': <IsolationFlow />,
  'channels-diagram': <ThreeChannels />,
  'carto-diagram': <Cartography />,
}

export default function AlumnosClient() {
  const { isAuthenticated, isLoading, login, logout } = useAuth()
  const { completedIds, toggleProgress, progressCount, totalCount } = useProgress()
  const [openBloqueId, setOpenBloqueId] = useState<string | null>(null)

  if (isLoading) return null

  if (!isAuthenticated) {
    return <LoginGate onLogin={login} />
  }

  const openIdx = openBloqueId ? bloques.findIndex(b => b.id === openBloqueId) : -1

  const handleToggle = (id: string) => {
    setOpenBloqueId(prev => prev === id ? null : id)
  }

  const handlePrev = () => {
    if (openIdx > 0) setOpenBloqueId(bloques[openIdx - 1].id)
  }

  const handleNext = () => {
    if (openIdx < bloques.length - 1) setOpenBloqueId(bloques[openIdx + 1].id)
  }

  return (
    <div>
      <PortalHeader onLogout={logout} />
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 2rem 6rem' }}>
        <Welcome />

        {/* Jornada 01 */}
        <JornadaSection id="jornada01" title="El Cuerpo como Sistema" date="21 Feb 2026" defaultOpen>
          <ProgressBar completedCount={progressCount} totalCount={totalCount} />

          <div className={bloqueStyles.bloqueGrid}>
          {bloques.map((bloque, bloqueIdx) => (
            <BloqueItem
              key={bloque.id}
              id={bloque.id}
              num={bloque.num}
              title={bloque.title}
              subtitle={bloque.subtitle}
              isTame={bloque.isTame}
              icon={bloque.iconSvg}
              preview={bloque.ideaCentral.text}
              isCompleted={completedIds.includes(bloque.id)}
              isOpen={openBloqueId === bloque.id}
              hasPrev={openBloqueId === bloque.id && bloqueIdx > 0}
              hasNext={openBloqueId === bloque.id && bloqueIdx < bloques.length - 1}
              currentIndex={bloqueIdx + 1}
              totalCount={bloques.length}
              onToggle={() => handleToggle(bloque.id)}
              onPrev={handlePrev}
              onNext={handleNext}
              onToggleProgress={toggleProgress}
            >
              {/* Idea central */}
              <div className="idea-central">
                <span className="idea-central-label">{bloque.ideaCentral.label}</span>
                <p>{bloque.ideaCentral.text}</p>
              </div>

              {/* Content sections */}
              {bloque.sections.map((section, si) => (
                <div className="content-section" key={si}>
                  <span className="section-heading">{section.heading}</span>
                  {section.type === 'concepto-grid' && (
                    <div className="concepto-grid">
                      {section.items.map((item, ii) => (
                        <div className="concepto-card" key={ii}>
                          {item.title && <div className="concepto-card-title">{item.title}</div>}
                          <p>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.type === 'concepto-list' && (
                    <div className="concepto-list">
                      {section.items.map((item, ii) => (
                        <div className="concepto-list-item" key={ii}>
                          <div>
                            {item.title && <strong>{item.title}</strong>}
                            <span>{item.text}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.type === 'pilar-cards' && (
                    <div className="pilar-cards-row">
                      {section.items.map((item, ii) => (
                        <div className="pilar-card" key={ii}>
                          <div className="pilar-card-num">{item.subtitle}</div>
                          <div className="pilar-card-title">{item.title}</div>
                          <p>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.type === 'concepto-cards' && (
                    <div>
                      {section.items.map((item, ii) => (
                        <div className="concepto-card" key={ii} style={{ marginBottom: '.75rem' }}>
                          {item.title && <div className="concepto-card-title">{item.title}</div>}
                          <p>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.type === 'niveles-grid' && (
                    <div className="niveles-grid">
                      {section.items.map((item, ii) => (
                        <div className="nivel-card" key={ii}>
                          {item.title && <div className="nivel-card-title">{item.title}</div>}
                          <p>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Diagrams */}
              {bloque.diagrams?.map((d) => (
                <div key={d}>{diagramMap[d]}</div>
              ))}

              {/* Reflexion */}
              {bloque.reflexion && (
                <div className="reflexion-box">
                  <span className="reflexion-label">Reflexión</span>
                  <p>{bloque.reflexion}</p>
                </div>
              )}

              {/* Key quote */}
              {bloque.fraseClave && (
                <blockquote className="frase-clave">{bloque.fraseClave}</blockquote>
              )}

              {/* Quotes list */}
              {bloque.frasesList && (
                <div className="frases-list">
                  {bloque.frasesList.map((f, fi) => (
                    <div className="frase-item" key={fi}>
                      <p>&ldquo;{f.text}&rdquo;</p>
                      {f.author && <span className="frase-author">— {f.author}</span>}
                    </div>
                  ))}
                </div>
              )}

              {/* Tarea */}
              {bloque.tarea && (
                <div className="tarea-box">
                  <span className="tarea-label">Tarea</span>
                  <p>{bloque.tarea}</p>
                </div>
              )}
            </BloqueItem>
          ))}
          </div>
        </JornadaSection>

        {/* Técnicas */}
        <JornadaSection id="jornadaTecnicas" title="Técnicas de Reestructuración" date="Somato-Emocional">
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
        </JornadaSection>

        {/* Jornada 02 - locked */}
        <JornadaSection id="jornada02" title="Improntas de Supervivencia" date="7 Mar 2026" locked />

        {/* Jornada 03 - locked */}
        <JornadaSection id="jornada03" title="Protocolo de Sesión" date="21 Mar 2026" locked />

        <ResourcesSection />
      </main>
      <PortalFooter />
    </div>
  )
}
