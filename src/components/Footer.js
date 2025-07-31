import React from 'react'
import trainingPrograms from './TrainingPrograms'
const Footer = () => {

  const otherLinks = [
   { name: 'Contact Us', href: '/contact' },
    { name: 'About Us', href: '/about' },
  ]

  const moreInfo = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'About Us', href: '/about' },
    { name: 'Privacy & Policy', href: '/privacy' },
    { name: 'Why choose us', href: '/why-choose-us' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Refund Policy', href: '/refund-policy' },
    
  ]

  return (
    <footer className="bg-gray-900 text-white section-padding scroll-mt-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                                  <p>support@apnainfotech.com</p>
                <p>apnainfotech1@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>Zirakpur - Derabassi Office</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p>+9100000</p>
              </div>
            </div>
          </div>

          {/* Training Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Training Programs</h3>
            <ul className="space-y-2">
              {trainingPrograms.map((program, index) => (
                <li key={index}>
                  <a href={program.href} className="text-gray-300 hover:text-white transition-colors">
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Others Links</h3>
            <ul className="space-y-2">
              {otherLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">More Info</h3>
            <ul className="space-y-2">
              {moreInfo.map((info, index) => (
                <li key={index}>
                  <a href ={info.href} className="text-gray-300 hover:text-white transition-colors">
                    {info.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            ©copyright 2024 ApnaInfotech
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 