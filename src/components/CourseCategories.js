const CourseCategories = () => {
  const categories = [
    {
      number: '01',
      title: 'Website Design',
      description: 'Master Web Design through Practice & Real-time Training. Join for Live Sessions & Gain Web Development Insights.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      title: 'Flutter',
      description: 'Learn Flutter: Multi-Platform UI Development. High-Performance Apps for Mobile, Web, and Desktop with One Codebase.',
      color: 'from-green-500 to-green-600'
    },
    {
      number: '03',
      title: 'React Js/ Next Js',
      description: 'Learn ReactJS/Next.js: Master Dynamic Web Applications. Join Live Training to Enhance Your Web Development Skills.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '04',
      title: 'Python',
      description: 'Learn Python: Master the Versatile Programming Language. Join for Comprehensive Practice & Live Training to Enhance Your Skills.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      number: '05',
      title: 'Mobile Development',
      description: 'Flutter + Firebase + MongoDB: Master Mobile Development with Powerful Tools. Join Live Training to Become a Proficient Developer.',
      color: 'from-red-500 to-red-600'
    },
    {
      number: '06',
      title: 'PHP/Wordpress',
      description: 'Master Web Development with PHP and WordPress. Join Live Training to Become Proficient in Creating Dynamic Websites.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white scroll-mt-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Topics To Learn
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`bg-gradient-to-br ${category.color} text-white rounded-xl p-6 h-full transform group-hover:scale-105 transition-transform duration-300`}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-bold opacity-80">{category.number}</span>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                
                <button className="text-white font-semibold hover:underline">
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseCategories 