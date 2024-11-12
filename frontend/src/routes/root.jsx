import { useState } from "react";

import { Outlet, Link } from "react-router-dom";
import { useContext } from 'react'
import AuthContext from "../context/AuthContext";
import logo from "/src/slz-logo.jpg";
import Subscribe from "../components/SubscribeForm";



export default function Root() {
  
  let { user, logoutUser } = useContext(AuthContext)
  const [isNavOpen, setIsNavOpen] = useState(false);
  // function toggleMenu() {
  //   const menu = document.querySelector("#mobile-menu")
  //   if (menu.classList.contains('hidden')) {
  //       menu.classList.remove('hidden');
  //   } else {
  //       menu.classList.add('hidden');
  //   }
  // }

  return (
<div class="min-h-screen relative w-full bg-amber-50">
  <nav class="bg-red-800 sticky top-0 z-10">
    <div class="flex flex-row-reverse sm:flex-col mx-auto text-lg sm:px-2 py-2 px-2 sm:px-6 lg:px-8 justify-between">
      <div class="flex">
           <div class="flex flex-shrink-0 items-center px-10">
            <a href="/">
             <img src={logo} class="h-9 w-auto rounded-full" ></img>
            </a>
          </div>
        <div class="font-tourney sm:text-3xl md:text-4xl font-bold text-white"> SOAS Liberated Zone for Gaza</div>
      </div>
      <div class="relative flex h-12 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <Link to={``} class="rounded-md px-3 py-2 text-lg md:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">Home</Link>
              <Link to={`getinvolved`} class="rounded-md px-3 py-2 text-lg md:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline active:bg-black">Get Involved</Link>
              <Link to={`calendar`} class="rounded-md px-3 py-2 text-lg md:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">Calendar</Link>
              <Link to={`statements`} class="rounded-md px-3 py-2 text-lg md:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">Statements</Link>
              <Link to={`journal`} class="rounded-md px-3 py-2 text-lg md:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">SLZ Journal</Link>
              <Link to={`fundraiser`} class="rounded-md px-3 py-2 text-lg md:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">Fundraiser</Link>
              <Link to={`about`} class="rounded-md px-3 py-2 text-lg md:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">About</Link>

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
        <button class="rounded-md px-3 py-2 text-lg md:text-xl font-medium text-gray-300 hover:bg-red-700 hover:text-white no-underline">
            {user && <div onClick={logoutUser}>LOGOUT {user.username}</div>}
        </button>
      </div>
    </div>
  
    <div class={!isNavOpen && "hidden"}>
      <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <a href="/" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Home</a>
          <a href="/getinvolved" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Get Involved</a>
          <a href="/calendar" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Calendar</a>
          <a href="/statements" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Statements</a>
          <a href="/journal" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Journal</a>
          <a href="/fundraiser" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Fundraiser</a>
          <a href="/about" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">About</a>
        </div>
      </div>
    </div>
  </nav>

  <div class="bg-repeat border-2e bg-[url('/src/hariya-tile-lg-light.svg')] sm:bg-[url('/src/hariya-tile-lg-light.svg')]">
      <Outlet />
  </div>

  <div class="flex flex-row h-16 bg-red-800 z-10 bottom-0 ">
    <div class="max-w-7xl pl-4 sm:pl-20">
      <Subscribe />
    </div>
  </div>

</div>

  );
}