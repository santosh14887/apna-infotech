const SuccessStories = () => {
  const students = [
    { name: 'Kaif Khan', role: 'Web Designer' },
    { name: 'Kartik Tyagi', role: 'Web Designer' },
    { name: 'Shubham', role: 'Flutter Developer' },
    { name: 'Rohit Pal', role: 'Web Designer' },
    { name: 'Vishal Nayak', role: 'Web Designer' },
    { name: 'Lakshman Pal', role: 'Web Designer' },
    { name: 'Sapna', role: 'Python Developer' },
  ]

  return (
    <section id="placements" className="section-padding bg-white scroll-mt-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Successfully Placed Students Shine Brightly
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The success of our students, placed in leading companies, is a testament to the quality of our coding training programs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {students.map((student, index) => (
            <div key={index} className="text-center group">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                {student.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{student.name}</h3>
              <p className="text-sm text-gray-600">{student.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View Placements
          </button>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Gain Real-World Experience with our Live Project-Based Training
          </h3>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories 