'use client'

import { useState, useEffect, useCallback } from 'react'
import { ACCESS_PASSWORD } from '@/lib/constants'

const AUTH_KEY = 'bioV4_auth'

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem(AUTH_KEY) === 'true')
    setIsLoading(false)
  }, [])

  const login = useCallback((password: string): boolean => {
    if (password === ACCESS_PASSWORD) {
      localStorage.setItem(AUTH_KEY, 'true')
      setIsAuthenticated(true)
      return true
    }
    return false
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY)
    setIsAuthenticated(false)
  }, [])

  return { isAuthenticated, isLoading, login, logout }
}
