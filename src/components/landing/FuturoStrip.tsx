import { marqueeItems } from '@/content/landing'
import styles from './FuturoStrip.module.css'

export default function FuturoStrip() {
  /* Duplicate the items array to create seamless loop */
  const doubled = [...marqueeItems, ...marqueeItems]

  return (
    <div className={styles.futuroStrip} aria-hidden="true">
      <div className={styles.futuroMarquee}>
        {doubled.map((item, i) => (
          <span key={i}>
            {i > 0 && <span className={styles.futuroDot}>{'\u2022'}</span>}
            {' '}{item}{' '}
          </span>
        ))}
      </div>
    </div>
  )
}
