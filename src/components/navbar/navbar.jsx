'use client'
import { useState } from "react"

export default function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const changeMenu = () => {
        setIsNavOpen(!isNavOpen)
    }


    return (
        <>
        <nav className="flex justify-between bg-white sticky top-0">
            {/* logo */}
            <div className="aspect-square w-20">
                {/* <a href="/"><img src="/small-logo.png" alt="New World Aviation Logo" /></a> */}
                
            </div>
            <div className="aspect-square w-40 ">
                <a href="/"><img src="/full-logo.png" alt="Newer World Aviation Logo" /></a>
            </div>
            {/* company name */}
            {/* <div className="my-auto text-2xl">NEWER WORLD AVIATION</div> */}
            {/* hambuger menu */}
            <div className="m-2 my-auto text-4xl cursor-pointer" onClick={changeMenu}>≡</div>
            
        </nav>
        {
            isNavOpen ? 
            <ul className="flex flex-col bg-white">
                <li><a href="/about">About</a></li>
                <li><a href="/videos">Videos</a></li>
                <li><a href="/works">Works</a></li>
                <li><a href="/book-me">Book Me</a></li>
            </ul> 
            :
            <></>
        }
        </>
    )
}