import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BlogPage() {
  const articles = [
    {
      title: 'Getting Started with Flutter Development',
      excerpt: 'Learn the basics of Flutter and how to create your first mobile application with this comprehensive guide.',
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Flutter+Guide',
      date: 'Dec 15, 2024',
      author: 'John Doe',
      category: 'Mobile Development'
    },
    {
      title: 'React.js Best Practices for 2024',
      excerpt: 'Discover the latest React.js best practices and patterns that will help you build better applications.',
      image: 'https://via.placeholder.com/400x250/1E40AF/FFFFFF?text=React+Best+Practices',
      date: 'Dec 12, 2024',
      author: 'Jane Smith',
      category: 'Web Development'
    },
    {
      title: 'Python for Data Science: A Complete Guide',
      excerpt: 'Master Python programming for data science with practical examples and real-world applications.',
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Python+Data+Science',
      date: 'Dec 10, 2024',
      author: 'Mike Johnson',
      category: 'Data Science'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Blog Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tutorials, and insights in technology 
              and software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {article.author}</span>
                    <button className="btn-primary">Read More</button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Blog Categories */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Blog Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Web Development', count: '25', color: 'bg-blue-500' },
                { name: 'Mobile Development', count: '18', color: 'bg-green-500' },
                { name: 'Data Science', count: '12', color: 'bg-purple-500' },
                { name: 'UI/UX Design', count: '15', color: 'bg-pink-500' }
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold`}>
                    {category.count}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">Articles</p>
                  <button className="btn-secondary w-full">Browse Articles</button>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest articles, tutorials, and 
                industry insights directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="btn-primary whitespace-nowrap">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 