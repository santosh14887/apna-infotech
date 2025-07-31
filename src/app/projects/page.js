import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProjectsPage() {
  const topics = [
    { name: 'HTML & CSS', icon: '🌐', color: 'bg-orange-500' },
    { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-500' },
    { name: 'React.js', icon: '⚛️', color: 'bg-blue-500' },
    { name: 'Node.js', icon: '🟢', color: 'bg-green-500' },
    { name: 'Python', icon: '🐍', color: 'bg-blue-600' },
    { name: 'Flutter', icon: '📱', color: 'bg-cyan-500' },
    { name: 'MongoDB', icon: '🍃', color: 'bg-green-600' },
    { name: 'Firebase', icon: '🔥', color: 'bg-orange-600' }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Projects Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Live Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Work on real-world projects to build your portfolio and gain practical 
              experience in the latest technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className={`w-16 h-16 ${topic.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {topic.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.name}</h3>
                <button className="btn-secondary w-full">View Projects</button>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'E-Commerce Platform',
                  description: 'Full-stack e-commerce application built with React, Node.js, and MongoDB',
                  image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=E-Commerce',
                  tech: ['React', 'Node.js', 'MongoDB']
                },
                {
                  title: 'Mobile Banking App',
                  description: 'Cross-platform mobile application developed with Flutter and Firebase',
                  image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Banking+App',
                  tech: ['Flutter', 'Firebase', 'Dart']
                },
                {
                  title: 'Task Management System',
                  description: 'Web-based project management tool with real-time collaboration features',
                  image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Task+Manager',
                  tech: ['Next.js', 'TypeScript', 'PostgreSQL']
                }
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="btn-primary w-full">View Project</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Statistics */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Project Statistics</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: '150+', label: 'Projects Completed' },
                { number: '500+', label: 'Students Trained' },
                { number: '95%', label: 'Success Rate' },
                { number: '50+', label: 'Technologies Covered' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
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