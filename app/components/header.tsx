"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
export default function Navbar(){

    const navStyles = "hover:text-violet-500 hover:border-b-2 hover:scale-105 transition-all duration-300";
    const [sideBar, setSideBar] = useState<boolean>(false);
    
    return <header className="w-full">
        <nav className="flex justify-between items-center md:px-8 md:py-6 px-5 py-5">
            <a href="https://pankeet-manubarwala.vercel.app/" onClick={() => setSideBar(false)}>
                <Image src="/images/Logo.png" alt="Pm ."  className="w-auto h-10 rounded-xl" width={50} height={50} priority/>
            </a>  
            <div className="md:flex hidden items-center gap-10 font-medium text-lg text-[#111111] dark:text-[#FFFFFF]">
                <a href="https://pankeet-manubarwala.vercel.app/" className={navStyles} onClick={() => setSideBar(false)}>About</a>
                <a href="https://pankeet-manubarwala.vercel.app/projects" className={navStyles} onClick={() => setSideBar(false)}>Projects</a>
                <Link href="#" className="text-violet-600 relative after:content-[''] after:absolute after:bg-[#7C3AED] after:w-1.5 after:h-1.5 after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-bottom-2" onClick={() => setSideBar(false)}>Contact</Link>
                <button>
                    {sideBar === true ? <Sun /> : <Moon />}
                </button>
            </div>
            <div className="md:hidden">
                <button onClick={() => setSideBar(!sideBar)} >
                    {sideBar ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
        </nav>
    </header>
}