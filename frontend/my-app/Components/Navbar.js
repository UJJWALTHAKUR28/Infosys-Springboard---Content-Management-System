import React from 'react'
import Link from 'next/link'
const Navbar = ({cart}) => {
  return (
    <header className="text-gray-600 body-font bg-orange-100">
    <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
      <div className="flex items-center flex-shrink-0 mr-6">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div className="ml-3 text-xl">
            <div className="logo-container flex items-center">
              <div className="logo mr-3">
                <div className="h-12 w-12 rounded-full border-4 border-black flex items-center justify-center">
                  <div className="text-black text-2xl">U</div>
                  <div className="text-black text-2xl">T</div>
                </div>
              </div>
              <span className="logo-text font-bold text-3xl ">Restaurant</span>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" legacyBehavior><a id="link" className="mr-5 hover:text-gray-900">HOME</a></Link>
          <Link href="/about1" legacyBehavior><a id="link" className="mr-5 hover:text-gray-900">GENERATE IMAGE</a></Link>
          <Link href="/Menu" legacyBehavior><a className="mr-5 hover:text-gray-900">MENU</a></Link>
        </nav>
      <button className="inline-flex items-center text-white bg-orange-500 border-0 py-2 px-4 focus:outline-no hover:bg-orange-600 rounded text-sm  mt-4 md:mt-0">SIGN UP       
      </button>
    </div>
  </header>
  )
}

export default Navbar