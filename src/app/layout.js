import { PT_Serif } from "next/font/google"
import './globals.css'
import NavBar from '@/components/navbar/navbar'
import FullNavBar from "@/components/navbar/fullnavbar"
import Background from "@/components/background"




export const metadata = {
  title: 'Newer World Aviation',
  description: 'Look at past work from Lantz Smith and book him for future drone work',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans relative m-0 p-0 box-border">
        <NavBar />
        {/* <Background /> */}
        {children}
      </body>
    </html>
  )
}
