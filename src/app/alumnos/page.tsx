import type { Metadata } from 'next'
import AlumnosClient from './AlumnosClient'

export const metadata: Metadata = {
  title: 'Portal Alumnos',
}

export default function AlumnosPage() {
  return <AlumnosClient />
}
