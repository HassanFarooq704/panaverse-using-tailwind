import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font shadow-2xl bg-cyan-700">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/">
                        <Image className='mr-1.5' src="/logo5.webp" alt='panaverse' width={120} height={120} />
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl text-cyan-600 font-mono justify-center">
                        <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href="/" className="mr-5 hover:text-gray-900">About</Link>
                        <Link href="/" className="mr-5 hover:text-gray-900">Syllabus</Link>
                        <Link href="/" className="mr-5 hover:text-gray-900">Contact us</Link>
                    </nav>
                    <button className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    )
}
