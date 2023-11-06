'use client'
import { useState } from "react";
import Image from "next/image";
import fullLogo from "/public/full-logo.PNG";
import Link from "next/link";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openMenu = () => {
    setIsNavOpen(true);
  };

  const closeMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="">
      <div className="flex justify-center bg-white">
        <div className="my-2">
          <Link href="/">
            <Image
              src={fullLogo}
              onClick={closeMenu}
              alt="Newer World Aviation Logo"
              width={120}
              height={120}
              className="mx-auto aspect-square cursor-pointer"
            />
          </Link>
        </div>

        <div className="text-4xl cursor-pointer absolute right-6 my-hambuger" onClick={openMenu}>
          ≡
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen bg-white w-4/5 z-10 shadow-black shadow-xl transform transition-transform ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className={`absolute my-hambuger -left-16 top-0 text-3xl cursor-pointer ease-in-out transition-transform duration-300 hover:text-slate-500  ${isNavOpen ? "" : "hidden"}`} onClick={() => setIsNavOpen(false)} >X</div>

        <Link href="/">
          <Image
            src={fullLogo}
            onClick={closeMenu}
            alt="Newer World Aviation Logo"
            width={120}
            height={120}
            className="mx-auto my-2 aspect-square cursor-pointer"
          />
        </Link>

        <ul className="flex flex-col bg-white text-3xl gap-8 text-center mt-10">
          <li onClick={closeMenu} className="hover:text-slate-500">
            <Link href="/services">Services</Link>
          </li>
          <li onClick={closeMenu} className="hover:text-slate-500">
            <Link href="/about">About</Link>
          </li>
          <li onClick={closeMenu} className="hover:text-slate-500">
            <Link href="/works">Works</Link>
          </li>
          <li onClick={closeMenu} className="hover:text-slate-500">
            <Link href="/book-me">Book Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
