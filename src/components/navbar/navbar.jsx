'use client'
import { useState } from "react"
import Image from "next/image"
import fullLogo from "/public//full-logo.PNG"

export default function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const changeMenu = () => {
        setIsNavOpen(!isNavOpen)
    }


    return (
        <nav className="">
            <div className="flex justify-center bg-white">

                <div className="flex-1">
                    <a href="/"><Image src={fullLogo} alt="Newer World Aviation Logo" width={160} height={160} className="mx-auto aspect-square" /></a>
                </div>

                <div className="text-4xl cursor-pointer absolute right-6 my-16" onClick={changeMenu}>≡</div>

            </div>
            
            {
                isNavOpen ? 
                <ul className="flex flex-col flex-1 bg-white">
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/works">Works</a></li>
                    <li><a href="/book-me">Book Me</a></li>
                </ul> 
                :
                <></>
                }

        </nav>
    )
}