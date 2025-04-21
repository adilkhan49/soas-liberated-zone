import LinkButton from "../components/linkbutton";
import { Component, useState } from 'react'
import { CALLS_TO_ACTION_API_URL } from "../constants";
import Subscribe from "../components/SubscribeForm";
import axios from "axios";
import AuthContext from "../context/AuthContext";




const GetInvolvedLinks = () => {
  return (

  <div class="w-full text-center text-amber-50">
    <ol class="list-none list-inside text-justify space-y-10 ">
      <li class="flex flex-col gap-y-5 text-2xl sm:text-3xl md:text-4xl px-4 md:px-12">
        <div class="flex items-start gap-x-4 md:gap-x-10 "><span class="text-4xl sm:text-5xl md:text-6xl font-bold text-red-800">▼ </span> 
          Find out how you can help organising media, campaigns and actions as well as holding the space at the encampment.</div>
        <form 
          action="/signup" 
          class="container font-bold md:text-xl lg:text-3xl  p-2 m-2 mx-auto w-2/3 tracking-widest text-amber-50 bg-red-800 border-green-800 hover:text-black hover:bg-amber-50 rounded-full border-10 items-center text-center"
          >

          <button>sign up</button>
        </form>
      </li>


      <li class="flex flex-col  gap-y-5 text-2xl sm:text-3xl md:text-4xl px-4 md:px-12">
        <div class="flex items-start gap-x-4 md:gap-x-10 ">
          <span class="text-4xl sm:text-5xl md:text-6xl font-bold text-red-800">▼ </span> 
          <span>Come down to <a class="text-red-600" href="https://maps.app.goo.gl/3Su9dXtar73z7mG67" target="_blank">Byng Place,  WC1E 7LE</a>, visit the encampment and get connected on the ground</span>
        </div>
      </li>

      <li class="flex flex-col text-2xl sm:text-3xl md:text-4xl px-4 md:px-12">
        <div class="flex items-start gap-x-4 md:gap-x-10 "><span class="text-4xl sm:text-5xl md:text-6xl font-bold text-red-800">▼ </span> 
          Stay informed and come to upcoming events and actions.
        </div>
        <form
          action="https://chat.whatsapp.com/Ku0wIdsGLIhADMAIwSgBcO"
          target="_blank"
          class="container font-bold md:text-xl lg:text-3xl  p-2 m-2 mx-auto w-2/3 tracking-widest text-amber-50 bg-red-800 border-green-800 hover:text-black hover:bg-amber-50 rounded-full border-10 items-center text-center"
          >
          <button>join the whatsapp broadcast </button>
        </form>
      </li>

      <li>
        <div 
            class="flex-row  border-y-10 border-green-800 font-leaguespartan bg-red-800 w-full text-amber-50 font-bold md:text-xl lg:text-3xl xl:text-4xl  py-4 px-4 md:px-20  min-w-full tracking-widest items-center text-center justify-evenly ">
            <div class='text-left'>Get email updates:</div>
            <Subscribe 
              class='w-full bg-blue-300'
              />
          </div>
      </li>

    </ol>
  </div>
  )
}

class GetInvolved extends Component {
  
  static contextType = AuthContext;

  state = {
    callstoaction: []
  };

  componentDidMount() {
    this.resetState();
  }

  getCallsToAction = () => {
    axios.get(CALLS_TO_ACTION_API_URL).then(res => this.setState({ callstoaction: res.data }));
  };

  resetState = () => {
    this.getCallsToAction();
  };


  render() {



    return (
      <div class = "flex min-w-full min-h-screen">
        <div class="w-full">


          <div class="relative h-[70vh] bg-[url('https://images2.imgbox.com/76/e2/O6zRK6Jd_o.jpg')] bg-top bg-cover">
            <div class="absolute p-4 text-center transform -translate-y-1/2 top-2/3 left-1/2">
              {/* <div class="font-rubikvinyl text-amber-50  text-3xl lg:text-4xl xl:text-5xl">
                Calling all students, staff, and members of the community
              </div> */}
            </div>
          </div>

          {/* <figure class="block border-l-10 border-l-black">
            <img
              class=" h-[70vh] w-full object-cover " 
              // src="https://images2.imgbox.com/b4/81/ViuQaQXP_o.jpg" 
              src="https://images2.imgbox.com/76/e2/O6zRK6Jd_o.jpg"
              alt="Get Involved" />
          </figure> */}

          <div class=' relative'>
            <div class="absolute z-10 w-full font-rubikmono text-red-800 font-outline-2-green-800 tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center py-20  ">
              JOIN THE MOVEMENT
            </div>

            <div class="absolute z-1 right-0 h-full w-full lg:w-4/5">
              <img 
                    class="h-full w-full object-cover " 
                    src={"https://images2.imgbox.com/f1/9b/VMZXyfBV_o.jpeg"}>
              </img>
            </div>
            <div class="absolute z-2 h-full bg-black bg-opacity-75 border-t-10 border-t-black w-full lg:w-4/5 xl:3/4">
              <div class="invisible w-full font-rubikmono text-red-800 font-outline-2-green-800 tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center py-20 ">
                JOIN
              </div>
              {GetInvolvedLinks(this.state.callstoaction)}
            </div>
            <div class='invisible w-2/3'>
              <div class=" w-full font-rubikmono text-black tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center py-20  ">
                JOIN
              </div>
              {GetInvolvedLinks(this.state.callstoaction)}
            </div>
          </div>

          <div 
        class='relative flex flex-col font-kanit bg-black border-10 border-black bg-opacity-65 p-4 lg:p-24 text-xl sm:text-3xl sm:m-8 rounded-3xl m-4 lg:mx-48 lg:mx-64 text-center'
      >
        <div class='text-3xl font-rubikmono text-red-800 font-outline-2-green-800 tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center pb-10'>
        CALLS TO ACTION
          </div>

          { this.context.user && 
            <form
              action="/callstoaction/create"
              target="_blank"
              class="container text-black sm:text-3xl font-anton w-2/3 sm:w-1/2 p-2 m-2 mx-auto   tracking-widest bg-amber-50 border-red-800 hover:bg-red-800 hover:border-black hover:text-amber-50 rounded-3xl border-10 items-center text-center">
              <button>Add a call to action </button>
            </form>
          }

          {this.state.callstoaction.map(c => ( 

                            
            <form
              action={c.link}
              target="_blank"
              class="container sm:text-3xl font-anton p-2 m-2 mx-auto   tracking-widest text-amber-50 bg-red-800 border-green-800 hover:text-black hover:bg-amber-50 rounded-3xl border-10 items-center text-center">
              <button>{c.title}</button>
            </form>

            ))}



      </div>

       
        </div>


      </div>
    );
};
}

export default GetInvolved;