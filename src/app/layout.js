import Head from 'next/head'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Newer World Aviation',
//   description: 'Look at past work from Lantz Smith and book him for future drone work',
// }

export default function RootLayout({ children }) {
  return (
    <>
    <Head >
      <title>Newer World Aviation</title>
      <meta name="description" content="Look at past work from Lantz Smith and book him for future drone work" />
      <link rel="shortcut icon" href="/" />
    </Head>
    <html lang="en">
      <body className="h-screen bg-slate-500">
        <NavBar />
        {children}
        </body>
    </html>
    </>
  )
}
