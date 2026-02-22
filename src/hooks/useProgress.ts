'use client'

import { useState, useEffect, useCallback } from 'react'

const PROGRESS_KEY = 'bioV4_progress'
const TOTAL_BLOQUES = 9

export function useProgress() {
  const [completedIds, setCompletedIds] = useState<string[]>([])

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '[]')
      setCompletedIds(saved)
    } catch {
      setCompletedIds([])
    }
  }, [])

  const toggleProgress = useCallback((id: string) => {
    setCompletedIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  return {
    completedIds,
    toggleProgress,
    progressCount: completedIds.length,
    totalCount: TOTAL_BLOQUES,
  }
}
