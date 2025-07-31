import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Process />
      <Testimonials />
      <Footer />
    </main>
  )
}
