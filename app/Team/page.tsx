import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/zia.webp"width={80} height={80}/>
          <div className="flex-grow">
            <h2 className="text-white title-font font-medium">Holden Caulfield</h2>
            <p className="text-gray-600">UI Designer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/zia.webp"width={80} height={80}/>
          <div className="flex-grow">
            <h2 className="text-white title-font font-medium">Henry Letham</h2>
            <p className="text-gray-600">CTO</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/zia.webp" width={80} height={80}/>
          <div className="flex-grow">
            <h2 className="text-white title-font font-medium">Oskar Blinde</h2>
            <p className="text-gray-600">Founder</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/zia.webp" width={80} height={80}/>
          <div className="flex-grow">
            <h2 className="text-white title-font font-medium">John Doe</h2>
            <p className="text-gray-600">DevOps</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/zia.webp" width={80} height={80}/>
          <div className="flex-grow">
            <h2 className="text-white title-font font-medium">Martin Eden</h2>
            <p className="text-gray-600">Software Engineer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/zia.webp" width={80} height={80}/>
          <div className="flex-grow">
            <h2 className="text-white title-font font-medium">Boris Kitua</h2>
            <p className="text-gray-600">UX Researcher</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/zia.webp" width={80} height={80}/>
          <div className="flex-grow">
            <h2 className="text-white title-font font-medium">Atticus Finch</h2>
            <p className="text-gray-600">QA Engineer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/zia.webp" width={80} height={80}/>
          <div className="flex-grow">
            <h2 className="text-white title-font font-medium">Alper Kamu</h2>
            <p className="text-gray-600">System</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/zia.webp" width={80} height={80}/>
          <div className="flex-grow">
            <h2 className="text-white title-font font-medium">Rodrigo Monchi</h2>
            <p className="text-gray-600">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
