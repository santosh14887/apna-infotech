const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sapna',
      role: 'Python Developer',
      content: 'Perfect for learning web development and building websites. Highly recommended for aspiring web developers.',
      rating: 5
    },
    {
      name: 'Shubham',
      role: 'PHP Developer',
      content: 'Best web development course! Makes learning complex concepts easy and fun. Well-structured with important coding exercises',
      rating: 5
    },
    {
      name: 'Kartik Tyagi',
      role: 'Web Designer',
      content: 'This course is a beginner\'s dream, simplifying web development and providing invaluable materials for full stack exploration',
      rating: 5
    },
    {
      name: 'Vishal Nayak',
      role: 'Web Designer',
      content: 'This web development course is highly beneficial for aspiring web developers. Strongly recommended for learning and building websites',
      rating: 5
    },
    {
      name: 'Rohit Pal',
      role: 'Web Designer',
      content: 'This web development course is the best. It simplifies complex topics, offers an impressive structure, and valuable coding exercises.',
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-gray-50 scroll-mt-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Students Say
          </h2>
          <p className="text-lg text-gray-600">
            Truly Students Feedback
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-600 mb-4 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">({testimonial.role})</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Upgrading Skills and Student Satisfaction through Online Training Solutions
            </h3>
            <p className="text-gray-600">
              Get to Know
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 