import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function programsLayout({ params }) {
  return (
    <main className="min-h-screen">
    < Header />

    <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {params.id}
        </div>
      </section>
    <Footer />
    </main>
  )
}
