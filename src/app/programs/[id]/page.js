import Header from '@/components/Header'
import Footer from '@/components/Footer'
import trainingPrograms from '@/components/TrainingPrograms';

export default async function programsLayout({ params }) {
  let {id} = await params;
  return (
    <main className="min-h-screen">
      <Header />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {id}
        </div>
      </section>
      <Footer />
    </main>
  )
}

export async function generateStaticParams() {
  // Ensure each id is a string
  return trainingPrograms.map(program => ({
    id: String(program.id),
  }));
}