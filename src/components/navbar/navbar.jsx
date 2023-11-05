'use client'
import { useState } from "react"
import Image from "next/image"
import fullLogo from "/public/full-logo.PNG"
import Link from "next/link"

export default function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const changeMenu = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <nav className="">
            <div className="flex justify-center bg-white">

                <div className="flex-1">
                    <Link href="/"><Image src={fullLogo} onClick={() => setIsNavOpen(false)} alt="Newer World Aviation Logo" width={160} height={160} className="mx-auto aspect-square" /></Link>
                </div>

                <div className="text-4xl cursor-pointer absolute right-6 my-16" onClick={changeMenu}>≡</div>

            </div>
            
            {
                isNavOpen ? 
                <div className="fixed top-0 right-0 h-screen bg-white w-4/5 z-10 shadow-black shadow-xl">

                    <Link href="/"><Image src={fullLogo} onClick={() => setIsNavOpen(false)} alt="Newer World Aviation Logo" width={160} height={160} className="mx-auto aspect-square" /></Link>
                
                    <ul className="flex flex-col flex-1 bg-white">
                        <li onClick={changeMenu}><Link href="/services">Services</Link></li>
                        <li onClick={changeMenu}><Link href="/about">About</Link></li>
                        <li onClick={changeMenu}><Link href="/works">Works</Link></li>
                        <li onClick={changeMenu}><Link href="/book-me">Book Me</Link></li>
                    </ul> 

                </div>
                :
                <></>
                }

            

        </nav>
    )
}