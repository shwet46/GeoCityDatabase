import React from 'react'

function Navbar1() {
    return (
        <div class=" w-full bg-white fixed top-0 left-0 right-0 z-50">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-1 py-1 sm:px-6 lg:px-8">
    <div class="inline-flex items-center space-x-2">
      <span >
        <img src="src/images/logonav.png" alt="" className="w-44 max-md:w-28"/>
      </span>
    </div>
    <div class="hidden lg:block ">
      <ul class=" ml-100 inline-flex space-x-8">
        <li>
          <a
            href="#"
            class="text-sm  text-gray-800 hover:text-gray-900"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-sm  text-gray-800 hover:text-gray-900"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-sm text-gray-800 hover:text-gray-900"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
    <div class="hidden lg:block">
      <button
        type="button"
        class="rounded-md bg-sky-600 px-3 py-2 text-xs pt-2 pl-5 pr-5 font-size-10 mr-20 text-white font-poppins shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
        Sign up</button>
    </div>
    <div class="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>

    )
}

export default Navbar1
