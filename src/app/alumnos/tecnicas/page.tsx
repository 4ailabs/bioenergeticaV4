import type { Metadata } from 'next'
import TecnicasClient from './TecnicasClient'

export const metadata: Metadata = {
  title: 'Técnicas · Portal Alumnos',
}

export default function TecnicasPage() {
  return <TecnicasClient />
}
