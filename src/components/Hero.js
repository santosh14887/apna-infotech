const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white section-padding scroll-mt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Build Apps with{' '}
                <span className="text-yellow-400">Flutter</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Learn Flutter: Trending Course for Mobile, Web, and Desktop App Development 
                with Firebase & MongoDB - Become a Proficient Developer!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-black">
                Get Started
              </button>
              <button className="btn-secondary text-blue border-white hover:bg-white hover:text-blue-600">
                Success Story
              </button>
            </div>
            {/* Contact Info */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center space-x-2">
                <svg className="text-yellow-400" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">+9100000</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="text-yellow-400" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="font-semibold">WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Right Content - Course Cards */}
          <div className="space-y-6">
            {/* Course Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-3">Full Stack Web Development</h3>
              <p className="text-gray-200 mb-4">
                Master Full-Stack Web Development: Learn Next.js and React.js with Firebase 
                and MongoDB - Create Dynamic Applications!
              </p>
              <div className="flex gap-3">
                <button className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-black text-sm px-4 py-2">
                  Get Started
                </button>
                <button className="btn-secondary text-blue border-white hover:bg-white hover:text-blue-600 text-sm px-4 py-2">
                  Success Story
                </button>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-3">Learn Web Designing & React</h3>
              <p className="text-gray-200 mb-4">
                Learn to Master Responsive Web Design with jQuery, JavaScript, Bootstrap 
                and Become a Professional Designer.
              </p>
              <div className="flex gap-3">
                <button className="btn-primary bg-yellow-500 hover:bg-yellow-600 text-black text-sm px-4 py-2">
                  Get Started
                </button>
                <button className="btn-secondary text-blue border-white hover:bg-white hover:text-blue-600 text-sm px-4 py-2">
                  Success Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 