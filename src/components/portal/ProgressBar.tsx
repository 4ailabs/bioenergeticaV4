import styles from './ProgressBar.module.css'

interface ProgressBarProps {
  completedCount: number
  totalCount: number
}

export default function ProgressBar({ completedCount, totalCount }: ProgressBarProps) {
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0
  const r = 26
  const circumference = 2 * Math.PI * r
  const dashOffset = circumference - (pct / 100) * circumference
  const isComplete = completedCount === totalCount && totalCount > 0

  return (
    <div className={styles.progressWidget}>
      <div className={styles.ringWrap}>
        <svg width="68" height="68" viewBox="0 0 68 68" aria-hidden="true">
          <circle cx="34" cy="34" r={r} fill="none" stroke="var(--line-strong)" strokeWidth="3" />
          <circle
            cx="34" cy="34" r={r}
            fill="none"
            stroke="var(--jade)"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            transform="rotate(-90 34 34)"
            style={{ transition: 'stroke-dashoffset .6s cubic-bezier(0.4,0,0.2,1)' }}
          />
        </svg>
        <span className={styles.ringPct}>{pct}%</span>
      </div>

      <div className={styles.progressStats}>
        <div className={styles.statMain}>
          <span className={styles.statNum}>{completedCount}</span>
          <span className={styles.statOf}>de {totalCount}</span>
        </div>
        <div className={styles.statLabel}>bloques completados</div>
        {isComplete ? (
          <div className={styles.statDone}>Jornada completa ✓</div>
        ) : (
          <div className={styles.statRemaining}>
            {totalCount - completedCount} pendiente{totalCount - completedCount !== 1 ? 's' : ''}
          </div>
        )}
      </div>
    </div>
  )
}
