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
        <div class='font-archivoblack bg-black bg-opacity-85 hover:bg-opacity-50 text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-3 md:px-20'>
          <Link to='/getinvolved' class="no-underline text-black font-outline-2-white font-xxlbold">
          {"SOAS must end the complicity. End the repression. Become an institution in service of its community >>>"}
          </Link>
        </div>

        <div class='relative flex flex-col justify-center min-w-full container py-10 px-4 md: p-4 lg:p-14 pb-0 text-red-800  text-lg sm:text-2xl md:text-4xl text-center  text-italic justify-center '>
          <div class='order-last z-10 relative flex justify-center min-w-full container font-kanit font-bold italic p-2 md:py-5 sm:pl-0  md:pl-0  bg-none   text-lg sm:text-4xl text-left text-italic justify-center  border-red-800 leading-normal sm:tracking-wide text-black'>
            The SOAS liberated zone is a student led site of anti colonial struggle for Gaza against SOAS university’s complicity in the ongoing genocide.  We cannot accept forced complicity in crimes against humanity and antidemocratic repression in our community. That is why we work to end SOAS’s living colonial legacy to become an institution in service of people’s liberation and a truly decolonial education. 
          </div>


          <div className="lg:flex lg:flex-row gap-28 ">
            <div class= "hidden lg:block w-1/4 pt-5 container justify-center ">
              <img src = {logo}/>
            </div>
            <div class=' grid grid-cols-1 gap-y-3  p-6 font-kanit font-bold italic   text-lg sm:text-4xl text-center items-center'>
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
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2  text-center items-stretch">
            <img class="order-first w-full object-cover" 
              src={"https://images2.imgbox.com/47/35/6L4BFUJe_o.jpg"} 
             />
            <div 
            // class=" text-center py-4 sm:py-10 px-4 sm:px-16 m-auto align-start p-0"
            >
                <UpcomingEvents
                  events={this.state.upcoming_events}
                ></UpcomingEvents>
            </div>
          </div>


        {/* <div class='relative h-[80vh] my-5 '>
          <div class="relative h-full m-5 rounded-3xl bg-lime-900 bg-opacity-75">
              <div class="relative h-full mr-5 md:mr-20 ml-20 ">
                <img 
                  class="absolute h-full right-0 object-cover" 
                  src={"https://images2.imgbox.com/47/35/6L4BFUJe_o.jpg"} 
                />
                <div class="absolute top-0 right-0 left-0 top-4  w-1/2 xl:w-1/3 rounded-3xl text-black border-10 bg-amber-50 border-green-800 text-center py-4 sm:py-4 lg:py-12 align-middle   sm:space-y-4 
                  bg-repeat md:bg-[url('/src/hariya-tile-lg-light.svg')]
                  ">
                  <div class="font-anton font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl text-green-800 tracking-widest">
                    UPCOMING EVENTS
                  </div>
                  <div >
                    <ul class="font-anton text-lg lg:text-xl xl:text-2xl text-center sm:space-y-4">
                      <li>1/12 Trump is trampled</li>
                      <li>10/12 Netanyahu is arrested</li>
                      <li>12/12 Adam Habib is fired</li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div> */}

        <div class="my-10 mx-2 mx-10 sm:mx-20 md:mx-20 lg:mx-40">
          <div class="text-red-800 font-kanit text-5xl font-bold">
            STAY IN TOUCH
          </div>
          <form
            action="https://signal.group/#CjQKIM5LoPsS4lKVkHR08Nr686ZxJRWhm_hImbG3bNpJbJglEhCuU5LbAmsdAiz-oQgKH6lp"
            target="_blank"
            class="container text-black md:text-xl lg:text-3xl font-anton p-2 m-2 mx-auto w-2/3 xl:w-1/2 lg:-translate-x-20  tracking-widest bg-amber-50 border-red-800 hover:bg-red-800 hover:border-black hover:text-amber-50 rounded-full border-10 items-center text-center">
            <button>join the whatsapp broadcast </button>
          </form>
          <div
            class="container text-black md:text-xl lg:text-3xl font-anton p-2 m-2 mx-auto w-2/3 xl:w-1/2  tracking-widest bg-amber-50 border-red-800 rounded-full border-10 items-center text-center">
            <div>subscribe for email updates </div>
          </div>
          <Subscribe />
        </div>


        <div class="flex grid grid-cols-1 lg:grid-cols-2 ">

          <div class=" h-auto border-none">
            <figure>
              <img class="" src={"https://images2.imgbox.com/88/b3/x1Q7iTLQ_o.jpg"} />
            </figure>
          </div>

          <div class="bg-amber-50">
            <blockquote class="italic font-semibold py-4 sm:py-10 px-4 sm:px-20 m-auto align-middle">
              <svg class="w-8 h-8 text-black dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
              </svg>
              <p class='sm:text-4xl p-0'>
                "The reality of life in Gaza is often misrepresented and overlooked. It is a place where daily survival is a challenge, yet it is filled with stories of incredible human strength and perseverance. Children go to school amid ruins; families gather even in the darkest times - hope is not a luxury but a necessity. Your support and solidarity matter more than words can express."
              </p>
            </blockquote>
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