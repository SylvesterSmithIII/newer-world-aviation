import Image from "next/image";
import fullLogo from "/public/full-logo.PNG";
import Link from "next/link";

export default function FullNavBar() {
    return (
        <nav className="hidden bg-white justify-start text-2xl py-4 lg:flex">

             <div className="pl-4">
                <Link href="/">
                    <Image
                    src={fullLogo}
                    alt="Newer World Aviation Logo"
                    width={120}
                    height={120}
                    className="aspect-auto cursor-pointer"
                    />
                </Link>
            </div>

           <ul className="flex-1 flex flex-row justify-evenly my-auto"> 
            <li className="self-center"><Link href="/services" className="hover:text-cyan-800">Services</Link></li>
            <li className="self-center"><Link href="/about" className="hover:text-cyan-800">About</Link></li>
            <li className="w-2/6 py-2 bg-cyan-800 rounded-full text-center text-white hover:bg-opacity-75 hover:text-gray-800">
                <Link href="/login">Login</Link>
            </li>
           </ul>

        </nav>
    )
}