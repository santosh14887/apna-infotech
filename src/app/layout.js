import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Apna Infotech - Training Institute',
  description: 'Comprehensive training programs in Mobile App Technologies, Web Development, and Designing. Learn Flutter, React, Python, and more with live project-based training.',
  keywords: 'online training ,offline training, web development, mobile development, flutter, react, python, programming courses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
