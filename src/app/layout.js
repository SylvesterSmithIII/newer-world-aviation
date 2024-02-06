import { PT_Serif } from "next/font/google"
import './globals.css'
import NavBar from '@/components/navbar/navbar'
import FullNavBar from "@/components/navbar/fullnavbar"

const ptSerif = PT_Serif({
   subsets: ['latin'],
   weight: "400",
   variable: "--ptSerif-font"
  })


export const metadata = {
  title: 'Newer World Aviation',
  description: 'Look at past work from Lantz Smith and book him for future drone work',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ptSerif.variable}>
      <body className="min-h-screen flex flex-col font-ptSerif">
        <NavBar />
        <FullNavBar />
        {children}
      </body>
    </html>
  )
}
