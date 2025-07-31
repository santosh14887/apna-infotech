const About = () => {
  const stats = [
    { number: '500+', label: 'Satisfied Students' },
    { number: '50+', label: 'Completed Batches' },
    { number: '95%', label: 'Satisfied with Our Programs' },
    { number: '100%', label: 'Placement Assistance' }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 scroll-mt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ABOUT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Institute
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              "Our online training institute offers comprehensive courses in Mobile App Technologies, 
              Web Development, and Designing. Gain hands-on experience through live project-based training, 
              equipping you with practical skills for real-world applications. With flexible timing and 
              continuous support, we empower you to excel in the ever-evolving tech industry. Join us to 
              unlock your full potential today."
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Looking for Course-related Queries?
            </h3>
            <p className="text-gray-600 mb-6">
              Our Team is Always Ready to Assist You
            </p>
            
            <div className="bg-blue-600 text-white rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">Call Now Us:</h4>
              <div className="text-2xl font-bold">+9100000</div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-4">Recent Projects</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600">E-commerce Platform</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600">Mobile Banking App</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600">Social Media Dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 