import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FAQPage() {
  const faqs = [
    {
      question: 'What courses do you offer?',
      answer: 'We offer comprehensive training programs in Flutter, React.js, Next.js, Python, Web Design, Mobile Development, and PHP/WordPress. All courses include hands-on projects and live training sessions.'
    },
    {
      question: 'How long does it take to complete a course?',
      answer: 'Course duration varies depending on the program. Most courses take 3-6 months to complete, with flexible scheduling options available for working professionals.'
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'Yes! We have a dedicated placement team that helps students with resume building, interview preparation, and job placement support. Our placement rate is 95%.'
    },
    {
      question: 'Are the courses online or offline?',
      answer: 'We offer both online and offline training options. Our online courses include live interactive sessions, while offline courses are conducted at our training center.'
    },
    {
      question: 'What is the course fee structure?',
      answer: 'Course fees vary by program. We offer flexible payment plans and early bird discounts. Please contact us for detailed pricing information.'
    },
    {
      question: 'Do you provide certificates upon completion?',
      answer: 'Yes, we provide industry-recognized certificates upon successful completion of our training programs. These certificates are valued by employers worldwide.'
    },
    {
      question: 'What if I miss a class?',
      answer: 'We provide recorded sessions and make-up classes for students who miss scheduled sessions. Our 24/7 support ensures you never fall behind.'
    },
    {
      question: 'Do you offer free trial classes?',
      answer: 'Yes, we offer free demo classes for all our programs. This helps you understand our teaching methodology before enrolling in a full course.'
    },
    {
      question: 'What are the prerequisites for joining?',
      answer: 'Most of our courses are designed for beginners. However, basic computer knowledge and enthusiasm to learn are recommended. We provide foundational training when needed.'
    },
    {
      question: 'How do I enroll in a course?',
      answer: 'You can enroll by calling us at +9100000, emailing us at support@apnainfotech.com, or filling out the contact form on our website.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                             Find answers to common questions about our training programs, enrollment process, 
               and what makes Apna Infotech the right choice for your career.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      Q
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed ml-9">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you couldn't find the answer you're looking for, don't hesitate to reach out to us. 
              Our team is here to help you make the best decision for your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Call Us Now</button>
              <button className="btn-secondary">Send Email</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 