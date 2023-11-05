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
        <div className="flex-1">
          <Link href="/">
            <Image
              src={fullLogo}
              onClick={closeMenu}
              alt="Newer World Aviation Logo"
              width={160}
              height={160}
              className="mx-auto aspect-square cursor-pointer"
            />
          </Link>
        </div>

        <div className="text-4xl cursor-pointer absolute right-6 my-16" onClick={openMenu}>
          ≡
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen bg-white w-4/5 z-10 shadow-black shadow-xl transform transition-transform ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link href="/">
          <Image
            src={fullLogo}
            onClick={closeMenu}
            alt="Newer World Aviation Logo"
            width={160}
            height={160}
            className="mx-auto aspect-square cursor-pointer"
          />
        </Link>

        <ul className="flex flex-col flex-1 bg-white">
          <li onClick={closeMenu}>
            <Link href="/services">Services</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/works">Works</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/book-me">Book Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
