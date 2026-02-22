import styles from './ProgressBar.module.css'

interface ProgressBarProps {
  completedCount: number
  totalCount: number
}

export default function ProgressBar({ completedCount, totalCount }: ProgressBarProps) {
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <div className={styles.progressBar}>
      <span className={styles.progressLabel}>Progreso</span>
      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${pct}%` }} />
      </div>
      <span className={styles.progressCount}>{completedCount} / {totalCount}</span>
    </div>
  )
}
