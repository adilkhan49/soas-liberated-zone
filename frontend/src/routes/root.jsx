import { useState } from "react";

import { Outlet, Link } from "react-router-dom";
import { useContext } from 'react'
import AuthContext from "../context/AuthContext";
import logo from "/src/slz-logo.jpg";
import Subscribe from "../components/SubscribeForm";



export default function Root() {
  
  let { user, logoutUser } = useContext(AuthContext)
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
<div class="min-h-screen relative w-full bg-amber-50">
  <nav class="bg-red-800 sticky top-0 z-50">
    <div class="flex flex-row-reverse sm:flex-col mx-auto text-lg lg:px-2 py-2 px-2 lg:px-6 lg:px-8 justify-between">
      <div class="flex">
           <div class="flex flex-shrink-0 items-center px-10">
            <a href="/">
             <img src={logo} class="h-9 w-auto rounded-full" ></img>
            </a>
          </div>
        <div class="font-tourney lg:text-3xl lg:text-4xl font-bold text-white"> SOAS Liberated Zone for Gaza</div>
      </div>
      <div class="relative flex h-12 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
          <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
          <div class="hidden lg:ml-6 lg:block">
            <div class="flex space-x-4">
              {/* <Link to={``} class="rounded-md px-3 py-2 text-lg md:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">Home</Link> */}
              <Link to={`about`} class="rounded-md px-3 py-2 text-lg md:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">About</Link>
              <Link to={`getinvolved`} class="rounded-md px-3 py-2 text-lg md:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline active:bg-black">Get Involved</Link>
              {/* <Link to={`calendar`} class="rounded-md px-3 py-2 text-lg md:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">Calendar</Link> */}
              <Link to={`journal`} class="rounded-md px-3 py-2 text-lg md:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">SLZ Journal</Link>
              <Link to={`gallery`} class="rounded-md px-3 py-2 text-lg md:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">Gallery</Link>
              <Link to={`democratiseeducation`} class="rounded-md px-3 py-2 text-lg md:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">Democratise Education</Link>
              <Link to={`fundraiser`} class="rounded-md px-3 py-2 text-lg md:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">Fundraiser</Link>

            </div>
          </div>
        </div>

        {/* <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>

          <div class="relative ml-3">
            <div>
              <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Open user menu</span>
              </button>
            </div>
            </div>

        </div> */}
        <button class="rounded-md px-3 py-2 text-lg lg:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">
            {user && <div onClick={logoutUser}>LOGOUT {user.username}</div>}
        </button>
      </div>
    </div>
  
    <div class={!isNavOpen && "hidden"}>
      <div class="lg:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">
          {/* <a href="/" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Home</a> */}
          <a href="/about" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">About</a>
          <a href="/getinvolved" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Get Involved</a>
          {/* <a href="/calendar" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Calendar</a> */}
          {/* <a href="/statements" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Statements</a> */}
          <a href="/journal" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Journal</a>
          <a href="/gallery" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Gallery</a>
          <a href="/democratiseeducation" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Democratise Education</a>
          <a href="/fundraiser" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Fundraiser</a>
        </div>
      </div>
    </div>
  </nav>

  <div 
  class="z-45 bg-repeat bg-[url('/src/hariya-tile-lg-light.svg')]"
  >
      <Outlet />
  </div>

  <div class="flex bg-red-800 z-50 bottom-0 items-center gap-x-10">
    <div class="">
      <div class="flex flex-col items-start max-w-7xl pl-4 lg:pl-20 lg:py-2">
        <div class="font-kanit text-xl text-amber-50">
          Stay Updated! Join our newsletter:
        </div>
        <Subscribe />
        <div class="font-kanit text-xl text-amber-50">
          Contact us: <a href='mailto:soasliberatedzone@gmail.com' class='text-blue-500'>soasliberatedzone@gmail.com</a>
        </div>
      </div>
    </div>
    <div class='absolute hidden sm:block right-0 sm:right-10 md:right-15'>
      <a href="/">
        <img src={logo} class="h-16 w-auto rounded-full" ></img>
      </a>
    </div>
  </div>
</div>

  );
}