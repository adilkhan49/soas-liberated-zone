import LinkButton from "../components/linkbutton";
import React, { useState } from 'react'
import { SUBSCRIBE_API_URL } from '../constants';
import Subscribe from "../components/SubscribeForm";

const GetInvolvedLinks =

<div class="w-full text-center text-amber-50 px-4 md:p-12">
  <ol class="list-none list-inside text-justify space-y-10 ">
    <li class="flex flex-col gap-y-5 text-2xl sm:text-3xl md:text-4xl ">
      <div class="flex items-start gap-x-4 md:gap-x-10 "><span class="text-4xl sm:text-5xl md:text-6xl font-bold text-red-800">▼ </span> 
        Get in touch to find out how you can help organising media, campaigns and actions as well as holding the space at the encampment.</div>
      <form 
        action="/signup" 
        class="container text-black sm:text-3xl font-anton p-2 m-2 mx-auto w-2/3 sm:w-1/2 tracking-widest bg-amber-50 border-red-800 hover:bg-red-800 hover:border-black hover:text-amber-50 rounded-3xl border-10 items-center text-center">
        <button>find pathways to action </button>
      </form>
    </li>

    <li class="flex flex-col text-2xl sm:text-3xl md:text-4xl ">
      <div class="flex items-start gap-x-4 md:gap-x-10 "><span class="text-4xl sm:text-5xl md:text-6xl font-bold text-red-800">▼ </span> 
        Stay informed on the struggle at soas and upcoming events.
      </div>
      <form
        action="https://signal.group/#CjQKIM5LoPsS4lKVkHR08Nr686ZxJRWhm_hImbG3bNpJbJglEhCuU5LbAmsdAiz-oQgKH6lp"
        target="_blank"
        class="container text-black sm:text-3xl font-anton w-2/3 sm:w-1/2 p-2 m-2 mx-auto   tracking-widest bg-amber-50 border-red-800 hover:bg-red-800 hover:border-black hover:text-amber-50 rounded-3xl border-10 items-center text-center">
        <button>join the whatsapp broadcast </button>
      </form>
    </li>

    <li class="flex flex-col  gap-y-5 text-2xl sm:text-3xl md:text-4xl text-center">
      <div class=" flex gap-x-4 md:gap-x-10 "><span class="invisible text-3xl sm:text-7xl font-bold text-red-800">⧨ </span> 
        Or get email updates
      </div>
      <div class="container text-black  font-anton rounded-3xl p-2 m-2 mx-auto  bg-amber-50  tracking-widest border-10 border-red-800 items-center text-center">
        <Subscribe />
      </div>
    </li>

    <li class="flex flex-col  gap-y-5 text-2xl sm:text-3xl md:text-4xl ">
      <div class="flex items-start gap-x-4 md:gap-x-10 ">
        <span class="text-4xl sm:text-5xl md:text-6xl font-bold text-red-800">▼ </span> 
        <span>Come down to <a class="text-red-600" href="https://maps.app.goo.gl/3Su9dXtar73z7mG67" target="_blank">Byng Place,  WC1E 7LE</a>, visit the encampment and get connected on the ground</span>
      </div>
    </li>

  </ol>
</div>
;


const GetInvolved = props => {
    return (
      <div class = "flex min-w-full min-h-screen">
        <div class="w-full">


          <div class="hidden sm:block sm:relative h-[60vh] bg-[url('https://images2.imgbox.com/d7/b2/niZ4O6jj_o.jpg')] bg-top bg-cover">
            <div class="absolute p-4 text-center transform -translate-y-1/2 top-2/3 left-1/2">
              <div class="font-rubikvinyl text-amber-50  text-3xl lg:text-4xl xl:text-5xl">
                Calling all students, staff, and members of the community
              </div>
            </div>

          </div>

          <figure class="block sm:hidden border-l-10 border-l-black">
            <img
              class=" h-[30vh] w-full object-cover " 
              src="https://images2.imgbox.com/b4/81/ViuQaQXP_o.jpg" 
              alt="Get Involved" />
          </figure>

          <div class=' relative'>
            <div class="absolute z-10 w-full font-rubikmono text-red-800 font-outline-2-red-600 tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center py-20  ">
              JOIN THE MOVEMENT
            </div>

            <div class="absolute z-1 right-0 h-full w-full lg:w-4/5">
              <img 
                    class="h-full w-full object-cover " 
                    src={"https://images2.imgbox.com/f1/9b/VMZXyfBV_o.jpeg"}>
              </img>
            </div>
            <div class="absolute z-2 h-full bg-black bg-opacity-75 border-t-10 border-t-black  border-r-10 border-r-black w-full lg:w-4/5 xl:3/4">
              <div class="invisible w-full font-rubikmono text-red-600 font-outline-2-red-600 text-opacity-0 tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center py-20  ">
                JOIN
              </div>
              {GetInvolvedLinks}
            </div>
            <div class='invisible w-2/3'>
              <div class=" w-full font-rubikmono text-black tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center py-20  ">
                JOIN
              </div>
              {GetInvolvedLinks}
            </div>
          </div>

          
        </div>
      </div>
    );
};

export default GetInvolved;