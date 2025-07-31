const Blog = () => {
  const blogPosts = [
    {
      title: 'Getting Started with Flutter Development',
      excerpt: 'Learn the basics of Flutter and how to create your first mobile app...',
      date: 'Dec 15, 2024',
      category: 'Mobile Development',
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Flutter+Blog'
    },
    {
      title: 'Mastering React Hooks',
      excerpt: 'Deep dive into React Hooks and how they can improve your component logic...',
      date: 'Dec 12, 2024',
      category: 'Web Development',
      image: 'https://via.placeholder.com/400x250/1E40AF/FFFFFF?text=React+Blog'
    },
    {
      title: 'Python for Data Science',
      excerpt: 'Explore how Python can be used for data analysis and machine learning...',
      date: 'Dec 10, 2024',
      category: 'Python',
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Python+Blog'
    }
  ]

  return (
    <section id="blog" className="section-padding bg-white scroll-mt-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Latest Articles
          </h2>
          <p className="text-lg text-gray-600">
            New Blogs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <span className="text-sm font-semibold">{post.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <button className="text-blue-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog 