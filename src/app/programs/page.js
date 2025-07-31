import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProgramsPage() {
  const courses = [
    {
      title: 'Build Apps with Flutter',
      description: 'Learn Flutter: Trending Course for Mobile, Web, and Desktop App Development with Firebase & MongoDB - Become a Proficient Developer!',
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Flutter',
      id: 'flutter'
    },
    {
      title: 'Full Stack Web Development',
      description: 'Master Full-Stack Web Development: Learn Next.js and React.js with Firebase and MongoDB - Create Dynamic Applications!',
      image: 'https://via.placeholder.com/400x250/1E40AF/FFFFFF?text=Web+Dev',
      id: 'react'
    },
    {
      title: 'Learn Web Designing & React',
      description: 'Learn to Master Responsive Web Design with jQuery, JavaScript, Bootstrap and Become a Professional Designer.',
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Web+Design',
      id: 'website-design'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Programs Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Training Programs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs designed to make you industry-ready with 
              hands-on projects and live training sessions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">4.8 (120 reviews)</span>
                    </div>
                    <button className="btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Programs */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">More Training Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Python Programming', icon: '🐍', color: 'bg-green-500' },
                { name: 'Mobile Development', icon: '📱', color: 'bg-purple-500' },
                { name: 'PHP/WordPress', icon: '🔧', color: 'bg-blue-500' },
                { name: 'UI/UX Design', icon: '🎨', color: 'bg-pink-500' }
              ].map((program, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className={`w-16 h-16 ${program.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                    {program.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{program.name}</h3>
                  <button className="btn-secondary w-full">View Details</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 