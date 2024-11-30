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

        <div class="flex flex-row justify-between lg:flex-col mx-auto text-lg lg:px-2 py-2 px-2 lg:px-6 lg:px-8">

          <div class="relative flex h-12 items-center justify-between">

            <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
              <button 
                type="button" 
                class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <div class={isNavOpen && "hidden"}>
                  <svg class ="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                </div>
                <div class={!isNavOpen && "hidden"}>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
              </button>
            </div>

            <div class="flex space-x-5 pl-12">
              <div id='logo' class="flex flex-shrink-0 items-center ">
                <a href="/">
                  <img src={logo} class="h-9 w-auto rounded-full" ></img>
                </a>
              </div>
              <div class="font-tourney line-clamp-2 lg:text-3xl lg:text-4xl font-bold text-white">
                SOAS Liberated Zone for Gaza
              </div>
            </div>

           </div>

            <div class="flex flex-1  lg:items-stretch lg:justify-between">
              <div class="hidden lg:block ml-6 ">
                <div class="flex space-x-4">
                  <Link to={``} class="rounded-md px-3 py-2 text-lg md:text-lg xl:text-lg font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">Home</Link>
                  <Link to={`about`} class="rounded-md px-3 py-2 text-lg md:text-lg xl:text-lg font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">About</Link>
                  <Link to={`getinvolved`} class="rounded-md px-3 py-2 text-lg md:text-lg xl:text-lg font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline active:bg-black">Get Involved</Link>
                  {/* <Link to={`calendar`} class="rounded-md px-3 py-2 text-lg md:text-lg xl:text-lg font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">Calendar</Link> */}
                  <Link to={`journal`} class="rounded-md px-3 py-2 text-lg md:text-lg xl:text-lg font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">SLZ Journal</Link>
                  <Link to={`gallery`} class="rounded-md px-3 py-2 text-lg md:text-lg xl:text-lg font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">Gallery</Link>
                  <Link to={`democratiseeducation`} class="rounded-md px-3 py-2 text-lg md:text-lg xl:text-lg font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">Democratise Education</Link>
                  <Link to={`fundraisers`} class="rounded-md px-3 py-2 text-lg md:text-lg xl:text-lg font-medium text-gray-300 hover:bg-red-700 hover:text-white border-white no-underline">Fundraisers</Link>
                </div>
              </div>

              {user && 
                <button 
                  class="rounded-md px-3 py-2 text-lg lg:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline"
                  onClick={logoutUser}>
                    LOGOUT {user.username}
                </button>
              }
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
                <a href="/fundraiser" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Fundraisers</a>
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