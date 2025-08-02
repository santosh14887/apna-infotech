import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PlacementsPage() {
  const successStories = [
    {
      name: 'Sarah Johnson',
      role: 'Frontend Developer',
      company: 'TechCorp',
      salary: '$75,000',
      image: 'https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=SJ',
      testimonial: 'The training at STF Infotech completely transformed my career. I went from knowing nothing about web development to landing a great job in just 6 months!'
    },
    {
      name: 'Michael Chen',
      role: 'Mobile App Developer',
      company: 'StartupXYZ',
      salary: '$85,000',
      image: 'https://via.placeholder.com/150x150/10B981/FFFFFF?text=MC',
      testimonial: 'The Flutter course was excellent. The instructors were knowledgeable and the hands-on projects really helped me understand the concepts.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Full Stack Developer',
      company: 'Digital Solutions',
      salary: '$90,000',
      image: 'https://via.placeholder.com/150x150/F59E0B/FFFFFF?text=ER',
      testimonial: 'I learned React, Node.js, and MongoDB here. The project-based approach gave me the confidence to tackle real-world challenges.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Placements Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Placements</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our students have successfully secured positions at top companies worldwide. 
              See how our training programs have transformed careers.
            </p>
          </div>

          {/* Success Stories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{story.name}</h3>
                    <p className="text-blue-600 font-medium">{story.role}</p>
                    <p className="text-gray-600 text-sm">{story.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{story.testimonial}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-bold">{story.salary}</span>
                  <span className="text-sm text-gray-500">Annual Salary</span>
                </div>
              </div>
            ))}
          </div>

          {/* Placement Statistics */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Placement Statistics</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: '95%', label: 'Placement Rate' },
                { number: '500+', label: 'Students Placed' },
                { number: '$75K', label: 'Average Salary' },
                { number: '50+', label: 'Partner Companies' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Companies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Partner Companies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'TechCorp', logo: '🏢', color: 'bg-blue-500' },
                { name: 'StartupXYZ', logo: '🚀', color: 'bg-green-500' },
                { name: 'Digital Solutions', logo: '💻', color: 'bg-purple-500' },
                { name: 'Innovation Labs', logo: '🔬', color: 'bg-orange-500' }
              ].map((company, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className={`w-16 h-16 ${company.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                    {company.logo}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Career Services */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Career Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Resume Building',
                  description: 'Get help creating professional resumes that stand out to employers',
                  icon: '📄'
                },
                {
                  title: 'Interview Preparation',
                  description: 'Practice mock interviews and learn common technical questions',
                  icon: '🎯'
                },
                {
                  title: 'Job Placement Support',
                  description: 'Direct assistance in finding and securing job opportunities',
                  icon: '🤝'
                }
              ].map((service, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
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