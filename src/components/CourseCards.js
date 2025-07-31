const CourseCards = () => {
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
    <section id="programs" className="bg-gray-50 section-padding scroll-mt-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} id={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 scroll-mt-20">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-sm opacity-90">{course.description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-3">
                  <button className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-black text-sm px-4 py-2 flex-1">
                    Get Started
                  </button>
                  <button className="btn-secondary text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white text-sm px-4 py-2">
                    Success Story
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseCards 