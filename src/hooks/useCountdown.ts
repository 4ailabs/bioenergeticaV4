'use client'

import { useState, useEffect } from 'react'
import { COURSE_DATE } from '@/lib/constants'

export function useCountdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    function update() {
      const diff = COURSE_DATE.getTime() - Date.now()
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, mins: 0, secs: 0 })
        return
      }
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}
