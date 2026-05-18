"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@teispace/next-themes";

export default function Navbar(){

    const navStyles = "hover:text-violet-500 hover:border-b-2 hover:scale-105 transition-all duration-300";
    const [sideBar, setSideBar] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();

     const toggleTheme = () => {
        if (theme === "system") {
            const isDark = globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(isDark ? "light" : "dark");
        } else {
            setTheme(theme === "dark" ? "light" : "dark");
        }
    };
    
    return <header className="w-full dark:text-white text-slate-800">
        <nav className="flex justify-between items-center md:px-10 md:py-6 px-5 py-5">
            <a href="https://pankeet-manubarwala.vercel.app/" onClick={() => setSideBar(false)}>
                <Image src="/images/Logo.png" alt="Pm ."  className="fixed top-5 w-auto h-10 rounded-lg dark:opacity-100 opacity-85 hover:scale-110" width={50} height={50} priority/>
            </a>  
            <div className="md:flex hidden items-center gap-10 font-medium text-lg">
                <a href="https://pankeet-manubarwala.vercel.app/" className={navStyles} onClick={() => setSideBar(false)}>About</a>
                <a href="https://pankeet-manubarwala.vercel.app/projects" className={navStyles} onClick={() => setSideBar(false)}>Projects</a>
                <Link href="#" className=" dark:text-violet-600 text-violet-700 relative after:content-[''] after:absolute after:bg-[#7C3AED] after:w-1.5 after:h-1.5 after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-bottom-2" onClick={() => setSideBar(false)}>Contact</Link>
                <button  
                    aria-label="Toggle Theme"
                    onClick={toggleTheme}>
                     <span className="hidden dark:block hover:text-violet-600 rounded-xl">
                        <Sun />
                    </span>
                    <span className="block dark:hidden hover:text-violet-600 rounded-xl">
                        <Moon />
                    </span>
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