import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import StatsStrip from '@/components/landing/StatsStrip'
import ParaQuien from '@/components/landing/ParaQuien'
import Schedule from '@/components/landing/Schedule'
import Modalidad from '@/components/landing/Modalidad'
import FAQ from '@/components/landing/FAQ'
import FuturoStrip from '@/components/landing/FuturoStrip'
import CTA from '@/components/landing/CTA'
import Footer from '@/components/landing/Footer'
import BackToTop from '@/components/landing/BackToTop'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <ParaQuien />
        <Schedule />
        <Modalidad />
        <FAQ />
        <FuturoStrip />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
