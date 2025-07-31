import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function InsightPage() {
  const insights = [
    {
      title: 'The Future of Web Development in 2024',
      excerpt: 'Discover the latest trends in web development including AI integration, WebAssembly, and the rise of edge computing.',
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Web+Dev+2024',
      category: 'Web Development',
      readTime: '5 min read',
      date: 'Dec 20, 2024'
    },
    {
      title: 'Why Flutter is Dominating Mobile Development',
      excerpt: 'Explore how Flutter is revolutionizing cross-platform mobile development and why it\'s becoming the preferred choice for developers.',
      image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Flutter+Trends',
      category: 'Mobile Development',
      readTime: '4 min read',
      date: 'Dec 18, 2024'
    },
    {
      title: 'Python in Data Science: A Complete Overview',
      excerpt: 'Learn about Python\'s role in data science, machine learning, and why it remains the most popular language for data professionals.',
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Python+Data',
      category: 'Data Science',
      readTime: '6 min read',
      date: 'Dec 15, 2024'
    }
  ]

  const trends = [
    {
      title: 'AI Integration in Development',
      percentage: '85%',
      description: 'Companies are increasingly integrating AI into their development workflows'
    },
    {
      title: 'Remote Learning Growth',
      percentage: '92%',
      description: 'Online training programs have seen unprecedented growth'
    },
    {
      title: 'Full-Stack Demand',
      percentage: '78%',
      description: 'Full-stack developers are in high demand across industries'
    },
    {
      title: 'Mobile-First Approach',
      percentage: '91%',
      description: 'Businesses are prioritizing mobile-first development strategies'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Insight Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Insights</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest insights on technology trends, 
              industry developments, and career opportunities in the tech world.
            </p>
          </div>

          {/* Featured Insights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Latest Insights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {insight.category}
                      </span>
                      <span className="text-sm text-gray-500">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{insight.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{insight.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{insight.date}</span>
                      <button className="btn-primary">Read More</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Industry Trends */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industry Trends</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trends.map((trend, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{trend.percentage}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{trend.title}</h3>
                  <p className="text-gray-600">{trend.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Insights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Popular Technology Stacks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'MERN Stack',
                  description: 'MongoDB, Express.js, React.js, Node.js',
                  popularity: 'High',
                  color: 'bg-green-500'
                },
                {
                  name: 'MEAN Stack',
                  description: 'MongoDB, Express.js, Angular, Node.js',
                  popularity: 'Medium',
                  color: 'bg-blue-500'
                },
                {
                  name: 'Flutter + Firebase',
                  description: 'Cross-platform mobile development',
                  popularity: 'Very High',
                  color: 'bg-purple-500'
                },
                {
                  name: 'Python + Django',
                  description: 'Web development with Python',
                  popularity: 'High',
                  color: 'bg-yellow-500'
                },
                {
                  name: 'React Native',
                  description: 'Mobile app development',
                  popularity: 'High',
                  color: 'bg-cyan-500'
                },
                {
                  name: 'Vue.js + Laravel',
                  description: 'Full-stack web development',
                  popularity: 'Medium',
                  color: 'bg-red-500'
                }
              ].map((stack, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className={`w-16 h-16 ${stack.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold`}>
                    {stack.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{stack.name}</h3>
                  <p className="text-gray-600 mb-3">{stack.description}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    stack.popularity === 'Very High' ? 'bg-green-100 text-green-800' :
                    stack.popularity === 'High' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {stack.popularity} Demand
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Insights */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Career Insights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Salary Trends',
                  description: 'Average salaries for different tech roles and how they\'re evolving',
                  icon: '💰'
                },
                {
                  title: 'Job Market',
                  description: 'Current job market trends and in-demand skills for 2024',
                  icon: '📈'
                },
                {
                  title: 'Skill Development',
                  description: 'Essential skills you need to stay competitive in the tech industry',
                  icon: '🎯'
                }
              ].map((insight, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{insight.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{insight.title}</h3>
                  <p className="text-gray-600 mb-4">{insight.description}</p>
                  <button className="btn-secondary">Learn More</button>
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