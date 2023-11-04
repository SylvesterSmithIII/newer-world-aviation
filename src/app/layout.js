import Head from 'next/head'
import { Inter } from 'next/font/google'
import { PT_Serif } from "next/font/google"
import './globals.css'
import NavBar from '@/components/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })
const ptSerif = PT_Serif({
   subsets: ['latin'],
   weight: "400"
  })

// export const metadata = {
//   title: 'Newer World Aviation',
//   description: 'Look at past work from Lantz Smith and book him for future drone work',
// }

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en" className={ptSerif.className}>
      <body className="h-screen bg-slate-500">
        <NavBar />
        {children}
        </body>
    </html>
    </>
  )
}
