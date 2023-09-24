import Image from 'next/image'
import React from 'react'

export default function () {
    return (
        <>
            <div className='bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhciDiotP-MM3JWamTW2v2ie1kCzh5FOTgg&usqp=CAU")] bg-cover bg-fixed text-center md:px-60 px-12 pt-[144px] pb-[90px]  md:rounded-b-[30%] rounded-b-[15%]'>
                <h1 className='font-serif md:text-2xl text-lg md:my-2 pt-20 pb-4'>Earn as you learn program</h1>
                <h1 className='text-black md:text-5xl text-3xl md:font-bold font-semibold'>Prepare yourself for the Next Generation of Internet with Panaverse</h1>
                <p className='text-black md:text-lg text-md my-4'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</p>
                <button className="inline-flex items-center bg-blue-500 rounded-lg py-3 px-5 focus:outline-none hover:bg-blue-300 text-lg text-white  md:mt-0">More Info
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>

             <div className='flex shadow-2xl w-[60%] justify-around py-[80px] m-auto md:-mt-[80px] -mt-[60px] bg-white rounded-3xl mb-16 md:flex-row flex-col space-y-11 items-center'>
                <Image src="/logo5.webp" alt='panaverse' width={150} height={150} />
                <Image src="/logo.svg" alt='saylani' width={150} height={150} />
                <Image src="/saylaniLogo.webp" alt='panacloud' width={150} height={150} />
            </div>

            <div className='w-[80%] flex m-auto md:flex-row flex-col'>
                <div className='md:w-1/2 w-full'>
                    <Image src='/logo2.webp' alt='' width={400} height={400} />
                </div>
                <div className=" md:w-1/2  " >
                    <h1 className='text-black md:text-4xl text-3xl font-bold font-serif border-l-[4px] border-l-blue-700 pl-3'>Program Of Studies</h1>
                    <p className='text-black text-md mt-4'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</p>
                    <button className="inline-flex items-center bg-blue-500 rounded-lg py-3 px-5 focus:outline-none hover:bg-blue-300 text-lg text-white  md:mt-0 mt-6">Read More</button>
                </div>
            </div>

            <div className='flex md:my-11 my-9 md:flex-row flex-col'>
                <div className='bg-[url("/bootcamp.jpeg")] bg-cover bg-center h-[11cm] lg:w-1/2 '  ></div>
                <div className='lg:w-1/2 bg-[url("/bg123.avif")] bg-cover md:-my-8 md:p-20 p-14'>
                    <h1 className='text-black md:text-4xl text-2xl font-bold font-serif border-l-[4px] border-l-blue-700 pl-3'>Bootcamp 2023</h1>
                    <p className='text-black md:text-md text-md mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis, labore perferendis eius eos recusandae voluptatum suscipit at, architecto impedit tempora excepturi nostrum odio, blanditiis numquam veniam fugiat voluptatem delectus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis, labore perferendis eius eos recusandae voluptatum suscipit at, architecto impedit tempora excepturi nostrum odio, blanditiis numquam veniam fugiat voluptatem delectus!</p>
                    <button className="inline-flex items-center bg-blue-500 rounded-lg py-3 px-5 focus:outline-none hover:bg-blue-300 text-lg text-white  md:mt-0 mt-6">Read More</button>
                </div>
            </div> 
        </>
    )
}
