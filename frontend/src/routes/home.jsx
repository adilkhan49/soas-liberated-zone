import React, { Component } from "react";
import { InstagramEmbed } from 'react-social-media-embed';
import Carousel from '../components/carousel';
import axios from "axios";
import { CAROUSEL_IMAGES_API_URL } from "../constants";
import logo from "/src/slz-logo.png";
import { Link } from "react-router-dom";
import Subscribe from "../components/SubscribeForm";
import UpcomingEvents from "../components/upcoming_events";
import { UPCOMING_EVENTS_API_URL } from "../constants";

class Home extends Component {

  state = {
    carousel_images: [],
    upcoming_events : []
  };

  componentDidMount() {
    this.resetState();
  }

  getCarouselImages = () => {
    axios.get(CAROUSEL_IMAGES_API_URL).then(res => this.setState({ carousel_images: res.data }));
  };

  getUpcomingEvents = () => {
    axios.get(UPCOMING_EVENTS_API_URL).then(res => this.setState({ upcoming_events: res.data }));
  };


  resetState = () => {
    this.getCarouselImages();
    this.getUpcomingEvents();
  };


  render() {
    return (
      <div>

        <div class="flex justify-center  h-[80vh] ">
          <Carousel images={this.state.carousel_images} />
        </div>
        <div class='font-leaguespartan bg-black bg-opacity-90 hover:bg-opacity-50 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-3 py-8'>
          <Link to='/getinvolved' class="font-outline-1-black no-underline text-red-800  tracking-widest font-xxlbold">
          End SOAS's crimes to build a truly anticolonial university
          </Link>
        </div>

        <div class='flex flex-col justify-center min-w-full container py-10 px-4 md: p-4 lg:p-14 pb-0 text-red-800  text-lg sm:text-2xl md:text-4xl text-center  text-italic justify-center '>
         
          <div className="lg:flex lg:flex-row gap-28 ">
            <div class= "hidden lg:block w-1/4 pt-5 container justify-center ">
              <img src = {logo}/>
            </div>
            <div class=' grid grid-cols-1 gap-y-1  p-6 font-kanit font-bold italic   text-lg sm:text-4xl text-center items-center justify-evenly'>
                <Link to='/about#demands' state={{ demands: true, statements: false, timeline: false }}class="w-60 sm:w-96 p-4 border border-green-800 bg-white text-green-800 shadow-2xl rounded-3xl m-auto hover:bg-amber-50 no-underline hover:underline lg:-translate-x-10 xl:-translate-x-10">
                  {"Our Demands >>>"}
                </Link>
                <Link to='/about#statements' state={{ demands: false, statements: true, timeline: false }} class="w-60 sm:w-96 p-4 border border-green-800 bg-white text-green-800 shadow-2xl rounded-3xl m-auto hover:bg-amber-50 no-underline hover:underline lg:translate-x-20 xl:translate-x-40 ">
                  {"Our Statements >>>"}
                </Link>
                <Link to='/about#timeline' state={{ demands: false, statements: false, timeline: true }} class="w-60 sm:w-96 p-4 border border-green-800 bg-white text-green-800 shadow-2xl rounded-3xl m-auto hover:bg-amber-50 no-underline hover:underline lg:translate-x-40 xl:translate-x-80">
                {"Our Story >>>"}
                </Link>
            </div>
          </div>

          <div class='flex flex-col justify-center min-w-full container font-leaguespartan font-bold  p-2 md:py-5 sm:pl-0  md:pl-0  bg-none   text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left justify-center  border-red-800 leading-normal sm:tracking-wide text-green-800 font-outline-2-red-800'>

          <div class="mb-10">The Soas Liberated Zone (SLZ) is a student led site of anti colonial struggle against the university’s complicity in the ongoing genocide.</div>
          <div >We work to end SOAS’s living colonial legacy to become an institution in service of people’s liberation and a truly decolonial education. We work to enable the community we know SOAS to be to step out of the shadow of its institutional violence.</div>  
          </div>

        </div>



        <div class="mb-10 mx-2 mx-10 font-leaguespartan">
          <div class="flex justify-start">
            <div class="p-10 text-red-800 font-outline-2-green-800 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            • Join the movement!</div>
          </div>

          <form
              action="https://signal.group/#CjQKIM5LoPsS4lKVkHR08Nr686ZxJRWhm_hImbG3bNpJbJglEhCuU5LbAmsdAiz-oQgKH6lp"
              target="_blank"
              class="container w-40 font-bold md:text-xl lg:text-3xl  p-2 m-2 m-auto tracking-widest text-amber-50 bg-red-800 border-green-800 hover:text-black hover:bg-amber-50 rounded-full border-10 text-center align-middle">
              <button>sign up</button>
          </form>
          <form
            action="https://signal.group/#CjQKIM5LoPsS4lKVkHR08Nr686ZxJRWhm_hImbG3bNpJbJglEhCuU5LbAmsdAiz-oQgKH6lp"
            target="_blank"
            class="container  font-bold md:text-xl lg:text-3xl  p-2 m-2 mx-auto w-2/3 tracking-widest text-amber-50 bg-red-800 border-green-800 hover:text-black hover:bg-amber-50 rounded-full border-10 items-center text-center">
            <button>join the whatsapp broadcast </button>
          </form>

        </div>

        <div 
          class="flex-row md:flex  border-y-10 border-green-800 gap-x-10 font-leaguespartan bg-red-800 w-full text-amber-50 font-bold md:text-xl lg:text-3xl  py-4 px-20  min-w-full tracking-widest items-center text-center justify-evenly ">
          <div>Get email updates:</div>
          <Subscribe />
        </div>

        <div class="relative h-36 my-10 mx-2 mx-10 font-leaguespartan">
          <div class=" flex justify-start">
            <div class="p-10 text-red-800 font-outline-2-green-800 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            • Come to upcoming events</div>
          </div>
        </div>



        <div class="grid grid-cols-1 sm:grid-cols-2  text-center items-stretch">
            <img class="h-full w-full object-cover" 
              src={"https://images2.imgbox.com/47/35/6L4BFUJe_o.jpg"} 
             />
            <div class='h-full bg-green-800 overflow-x-auto overflow-y-auto '>
                <UpcomingEvents
                  events={this.state.upcoming_events}
                ></UpcomingEvents>
            </div>
          </div>

        <div class="my-10 font-leaguespartan">
          <div class="flex justify-start">
            <div class="p-10 text-red-800 font-outline-2-green-800 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center">
            We will not let our education be used against our brothers and sisters in Gaza </div>
          </div>
        </div>


        <div class="flex  w-full ">


          <div class=" flex border-none">
            <figure>
              <img class="h-full object-contain" width='1800px' src={"https://images2.imgbox.com/ed/13/5MMUDd9e_o.png"} />
            </figure>
          </div>

          <div class="bg-none">
            <div class="font-kanit text-red-800 font-semibold  sm:pt-10 px-4 sm:px-20 m-auto align-middle text-center sm:text-xl  sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              <div class='mb-10'>
                "The reality of life in Gaza is often misrepresented and overlooked. It is a place where daily survival is a challenge, yet it is filled with stories of incredible human strength and perseverance. Children go to school amid ruins; families gather even in the darkest times - hope is not a luxury but a necessity. Your support and solidarity matter more than words can express."
              </div>
              <div>- Jehad the voice of Gaza at SOAS. @jehadkmiri</div>
            </div>
          </div>

        </div>

  
        
        <div class="">
          <InstagramEmbed url="https://www.instagram.com/soasliberatedzone/"  />
        </div> 

      </div>

    );
  };
};

export default Home;