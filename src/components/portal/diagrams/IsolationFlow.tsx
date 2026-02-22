import styles from './IsolationFlow.module.css'

const steps = [
  { icon: '✦', style: styles.flowStepIconJade, title: 'Campo conectado', desc: 'Células comparten voltaje e información via gap junctions' },
  { icon: '⚡', style: styles.flowStepIconAmber, title: 'Evento traumático', desc: 'Alto impacto emocional. El sistema necesita protegerse' },
  { icon: '◇', style: styles.flowStepIconAmber, title: 'Fragmentación', desc: 'Gap junctions se cierran. La zona se aísla del campo' },
  { icon: '◈', style: styles.flowStepIconViolet, title: 'Zona congelada', desc: 'Mantiene el patrón original sin actualizarse' },
]

export default function IsolationFlow() {
  return (
    <div className={styles.isolationFlow}>
      <div className={styles.isolationFlowTitle}>Mecanismo del aislamiento bioeléctrico</div>
      <div className={styles.flowSteps}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'contents' }}>
            <div className={styles.flowStep}>
              <div className={styles.flowStepIcon}>{s.icon}</div>
              <span className={styles.flowStepTitle}>{s.title}</span>
              <span className={styles.flowStepDesc}>{s.desc}</span>
            </div>
            {i < steps.length - 1 && <span className={styles.flowArrow}>&rarr;</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
