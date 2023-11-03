import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Newer World Aviation',
  description: 'Look at past work from Lantz Smith and book him for future drone work',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <NavBar />
        {children}
        </body>
    </html>
  )
}
