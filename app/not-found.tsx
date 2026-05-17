"use client";
import Link from "next/link"
export default function NotFound(){
return (
        <main className="text-center px-4 flex items-center justify-center h-screen font-sans">
            <div className='mr-12'>
              <h1 className="text-8xl font-extrabold tracking-tight text-purple-700 drop-shadow-lg">404</h1>
              <p className="text-2xl mt-4 font-semibold">Oops! Page not found</p>
            </div>
            <div className="mt-6">
              <p className="text-gray-400">Looks like you took a wrong turn into the void of Parthism 💫</p>
              <Link aria-label='Go back to Home Page' href="/" className="mt-5 inline-block px-6 py-3 bg-purple-700 hover:bg-purple-800 hover:shadow-fuchsia-800 text-white font-medium rounded-xl transition-all duration-200 shadow-md">
                🏠 Back to Home
              </Link>
            </div>
        </main>
    )
}