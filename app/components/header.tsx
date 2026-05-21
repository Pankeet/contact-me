"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@teispace/next-themes";

export default function Navbar(){

    const navStyles = "hover:text-violet-500 hover:border-b-2 hover:scale-105 transition-transform duration-300";
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
                <Image src="/images/Logo.png" alt="Pm ."  className="z-9999 fixed top-5 w-auto h-10 rounded-xl 
                dark:opacity-100 opacity-85 shadow-2xl ring-1 ring-cyan-300/20 hover:scale-110 
                transition-transform duration-300 drop-shadow-[0_0_12px_rgba(125,220,255,0.55)] dark:drop-shadow-[0_0_10px_rgba(125,220,255,0.28)]
                hover:drop-shadow-[0_0_25px_rgba(125,220,255,0.9)] dark:hover:drop-shadow-[0_0_18px_rgba(125,220,255,0.5)]" 
                width={50} height={50} priority/>
            </a>  
            <div className="md:flex hidden items-center gap-10 font-medium text-lg">
                <a href="https://pankeet-manubarwala.vercel.app/" className={navStyles} onClick={() => setSideBar(false)}>About</a>
                <a href="https://pankeet-manubarwala.vercel.app/projects" className={navStyles} onClick={() => setSideBar(false)}>Projects</a>
                <Link href="#" className=" dark:text-violet-600 text-violet-700 relative after:content-[''] after:absolute after:bg-[#7C3AED] after:w-1.5 after:h-1.5 after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-bottom-2" onClick={() => setSideBar(false)}>Contact</Link>
                <button  
                    aria-label="Toggle Theme"
                    onClick={toggleTheme}>
                     <span className="hidden dark:block hover:bg-slate-500 rounded-xl p-1">
                        <Sun />
                    </span>
                    <span className="block dark:hidden hover:bg-slate-500 rounded-xl p-1 hover:text-white">
                        <Moon />
                    </span>
                </button>
            </div>
            <div className="md:hidden">
                <button onClick={() => setSideBar(!sideBar)} className="fixed top-6 right-10 z-50">
                    {sideBar ? <X className="w-7 h-6" /> : <Menu className="w-7 h-6" />}
                </button>
            </div>
        </nav>
                <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${sideBar ? "opacity-100 visible" :"opacity-0 invisible"}`}>
                    <button aria-label="Close sidebar" className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSideBar(false)} />
                    <div className={`absolute right-0 top-0 h-screen w-64 bg-white dark:bg-slate-900 shadow-2xl p-8 flex flex-col gap-8 transition-transform duration-300 ease-in-out ${sideBar ? "translate-x-0" : "translate-x-full"}`}>

                        <a href="https://pankeet-manubarwala.vercel.app/" onClick={() => setSideBar(false)} className={`${navStyles} mt-12`} >
                            About
                        </a>

                        <a href="https://pankeet-manubarwala.vercel.app/projects" onClick={() => setSideBar(false)} className={navStyles}>
                            Projects
                        </a>

                        <Link href="/" onClick={() => setSideBar(false)} className="text-violet-600" >
                            Contact
                        </Link>

                        <button onClick={toggleTheme} className="flex items-center gap-3 mt-5 ">
                            {theme === "dark" ? <Sun /> : <Moon /> }
                            Theme
                        </button>
                    </div>
                </div>
    </header>
}