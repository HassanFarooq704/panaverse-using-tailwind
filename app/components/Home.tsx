import Image from 'next/image'
import React from 'react'

export default function () {
    return (
        <>
            <div className='bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhciDiotP-MM3JWamTW2v2ie1kCzh5FOTgg&usqp=CAU")] bg-cover bg-fixed text-center px-60 py-36 rounded-b-[30%]'>
                <h1 className='font-serif text-2xl my-2'>Earn as you learn program</h1>
                <h1 className='text-black text-5xl font-bold'>Prepare yourself for the Next Generation of Internet with Panaverse</h1>
                <p className='text-black text-lg my-4'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</p>
                <button className="inline-flex items-center bg-blue-500 rounded-lg py-3 px-5 focus:outline-none hover:bg-blue-300 text-lg text-white  md:mt-0">More Info
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>

            <div className='flex shadow-2xl w-[60%] justify-around py-[80px] m-auto -mt-[80px] bg-white rounded-3xl mb-16 '>
                <Image src="/logo5.webp" alt='panaverse' width={150} height={150} />
                <Image src="/logo.svg" alt='saylani' width={150} height={150} />
                <Image src="/saylaniLogo.webp" alt='panacloud' width={150} height={150} />
            </div>

            <div className='w-[80%] flex m-auto  '>
                <div className='w-1/2 '>
                    <Image src='/logo2.webp' alt='' width={400} height={400} />
                </div>
                <div className=' w-1/2' >
                    <h1 className='text-black text-4xl font-bold font-serif pt-12'>Program Of Studies</h1>
                    <p className='text-black text-md mt-4'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</p>
                    <button className="inline-flex items-center bg-blue-500 rounded-lg py-3 px-5 focus:outline-none hover:bg-blue-300 text-lg text-white  md:mt-0">Read More</button>
                </div>
            </div>
        </>
    )
}
