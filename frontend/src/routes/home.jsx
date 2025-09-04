import React, { Component, useContext } from "react";
import { InstagramEmbed } from 'react-social-media-embed';
import Carousel from '../components/carousel';
import axios from "axios";
import { CAROUSEL_IMAGES_API_URL } from "../constants";
import logo from "/src/slz-logo.png";
import { Link } from "react-router-dom";
import Subscribe from "../components/SubscribeForm";
import UpcomingEvents from "../components/upcoming_events";
import { UPCOMING_EVENTS_API_URL } from "../constants";
import LinkButton from "../components/linkbutton";
import AuthContext from "../context/AuthContext";

class Home extends Component {

  static contextType = AuthContext

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
        <div class='font-kanit bg-black bg-opacity-90 hover:bg-opacity-50 text-center text-2xl sm:text-3xl lg:text-4xl xl:text-4xl px-3 py-8'>
          <Link to='/getinvolved' class="font-outline-1-black no-underline text-red-800  tracking-widest font-xxlbold">
          End SOAS's crimes to build a truly anticolonial education
          </Link>
        </div>

        <div class='flex flex-col justify-center min-w-full container py-10 px-4 md:p-4 lg:p-14 pb-0 text-red-800  text-lg sm:text-2xl md:text-4xl text-center  text-italic justify-center '>
          <div className="lg:flex lg:flex-row gap-28 ">
            <div class= "hidden lg:block w-1/4 pt-5 container justify-center ">
              <img src = {logo}/>
            </div>
            <div class=' grid grid-cols-1 gap-y-1  p-6 font-kanit font-bold italic   text-lg sm:text-4xl text-center items-center justify-evenly'>
                <Link to='/about#demands' state={{ demands: true, statements: false, timeline: false }} class="w-60 sm:w-96 p-4 border border-red-800 bg-amber-50 text-black shadow-xl rounded-3xl m-auto hover:bg-red-800 hover:text-amber-50 no-underline lg:-translate-x-10 xl:-translate-x-10">
                  {"Our Demands >>>"}
                </Link>
                <Link to='/about#statements' state={{ demands: false, statements: true, timeline: false }} class="w-60 sm:w-96 p-4 border border-red-800 bg-amber-50 text-black shadow-xl rounded-3xl m-auto hover:bg-red-800 hover:text-amber-50 no-underline lg:translate-x-20 xl:translate-x-40 ">
                  {"Our Statements >>>"}
                </Link>
                <Link to='/about#timeline' state={{ demands: false, statements: false, timeline: true }} class="w-60 sm:w-96 p-4 border border-red-800 bg-amber-50 text-black shadow-xl rounded-3xl m-auto hover:bg-red-800 hover:text-amber-50 no-underline lg:translate-x-40 xl:translate-x-80">
                  {"Our Story >>>"}
                </Link>
            </div>
          </div>

          <div class='flex flex-col justify-center min-w-full container font-kanit italic font-bold  px-6 py-4 md:py-5  bg-amber-50  text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-center justify-center border-2 border-red-800  rounded-3xl m-auto leading-normal sm:leading-loose sm:tracking-wide text-black drop-shadow-xl tracking-wide mt-10'>
            <div class="mt-0">
              The SOAS Liberated Zone (SLZ) is a student led site of anti colonial struggle against SOAS university’s complicity in the ongoing colonisation of the Palestinian people. We work to end SOAS’s living colonial legacy and build solidarity organising in service of people’s liberation and a truly decolonial education.
            </div>  
              {/* <div class="text-red-800 font-outline-1-black sm:font-outline-1-green-800 md:font-outline-2-green-800 mt-10">
             We work to enable the community we know SOAS to be beyond the shadow of its institutional violence.
              </div>   */}
            </div>

          </div>


          <div class="relative grid grid-cols-1 sm:grid-cols-2 text-center items-stretch sm:border sm:border-20 border-black sm:rounded-2xl my-2 sm:m-20 bg-repeat bg-black bg-[url('/src/hariya-tile-lg-light.svg')]">
          <img 
            class="order-first sm:order-last w-full object-cover" 
            src={"https://images2.imgbox.com/0c/36/qPcEzioe_o.jpeg"}
          />
          <div class="h-full text-amber-50 text-center py-4 sm:py-10 px-4 sm:px-16 m-auto align-middle p-0 ">
              <div class="h-full w-full flex flex-col justify-evenly">
                <div class='hidden sm:block text-2xl sm:text-3xl lg:text-4xl  tracking-widest text-amber-50 font-bold sm:text-2xl text-center mb-0 gap-y-5 mb-5'>
                URGENT UPDATE
                </div>
                <form
                    action="/statements/10"
                    target="_blank"
                    class="container  font-bold md:text-lg lg:text-2xl xl:text-3xl mb-4 p-2 mx-4 mx-auto tracking-widest text-amber-50 bg-red-800 border-green-800 hover:text-black hover:bg-amber-50 rounded-full border-10 text-center">
                    <button>{"Read the statement >>"}</button>
                </form>
                <form
                    action="https://linktr.ee/DefendHaya?"
                    target="_blank"
                    class="container font-bold md:text-lg lg:text-2xl xl:text-3xl  p-2 mx-4 mx-auto tracking-widest text-amber-50 bg-red-800 border-green-800 hover:text-black hover:bg-amber-50 rounded-full border-10 text-center">
                    <button>{"Call to Action >>"}</button>
                </form>
              </div>
            </div>
          </div>

        <div class="mt-10 w-full h-full py-20 border-t-10 border-t-black bg-[url('https://images2.imgbox.com/76/e2/O6zRK6Jd_o.jpg')] bg-top bg-cover">
          
          <div class="flex justify-start ">
            <div class="hidden font-archivoblack mb-20 px-2 sm:px-10 text-red-800 font-outline-1-green-800 sm:font-outline-2-green-800 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-bold">
              Join the movement
             </div>
          </div>
          <form
              action="/signup"
              target="_blank"
              class="container w-52 font-bold md:text-xl lg:text-3xl xl:text-4xl  p-2 m-4 m-auto tracking-widest text-amber-50 bg-red-800 border-green-800 hover:text-black hover:bg-amber-50 rounded-full border-10 text-center align-middle">
              <button>sign up</button>
          </form>
          <form
            action="https://chat.whatsapp.com/Ku0wIdsGLIhADMAIwSgBcO"
            target="_blank"
            class="container  font-bold md:text-xl lg:text-3xl  p-2 m-2 mx-auto w-2/3 tracking-widest text-amber-50 bg-red-800 border-green-800 hover:text-black hover:bg-amber-50 rounded-full border-10 items-center text-center">
            <button>join the whatsapp broadcast </button>
          </form>

        </div>

        <div 
          class="flex-row   border-y-10 border-green-800 font-leaguespartan bg-red-800 w-full text-amber-50 font-bold md:text-xl lg:text-3xl xl:text-4xl  py-4 px-4 md:px-20  min-w-full tracking-widest items-center text-center justify-evenly ">
          <div class='text-left'>Get email updates:</div>
          <Subscribe 
            class='w-full bg-blue-300'
            />
        </div>





        <div class="text-center items-stretch">
            <div class="h-full bg-green-800 bg-opacity-85 bg-repeat bg-[url('/src/hariya-tile-lg-light.svg')] overflow-x-auto overflow-y-auto">
              <div class="mt-10 mx-2 mx-10 font-leaguespartan">
                <div class=" flex justify-start">
                  <div class="text-left font-archivoblack mb-10 px-2 sm:px-10 text-red-800 font-outline-1-green-800 sm:font-outline-2-green-800 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-bold">
                    ▼ Upcoming events
                  </div>
                </div>
              </div>
              { this.context.user && 
                <LinkButton
                  linkText={'Update Calendar'}
                  linkUrl={'/calendar'}
                />
              }
              <UpcomingEvents
                events={this.state.upcoming_events}
              ></UpcomingEvents>
            </div>
          </div>

        <div class="my-10 font-leaguespartan">
          <div class="flex justify-start">
            {/* <div class="py-0 text-red-800 font-outline-1-green-800 sm:font-outline-2-green-800 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center">
              We will not let our education be used against our brothers and sisters in Gaza 
            </div> */}
          </div>
        </div>

{/* 
        <div class="flex flex-col md:flex-row  w-full ">

          <div class="hidden md:block flex border-none">
            <figure>
              <img class="h-full object-contain" width='1800px' src={"https://images2.imgbox.com/ed/13/5MMUDd9e_o.png"} />
            </figure>
          </div>

          <div class="bg-none hidden md:block">
            <div class="font-kanit text-red-800 font-semibold  px-4 sm:px-20 m-auto align-middle text-center sm:text-xl  sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              <div class='mb-10'>
                "The reality of life in Gaza is often misrepresented and overlooked. It is a place where daily survival is a challenge, yet it is filled with stories of incredible human strength and perseverance. Children go to school amid ruins; families gather even in the darkest times - hope is not a luxury but a necessity. Your support and solidarity matter more than words can express."
              </div>
              <div>- Jehad the voice of Gaza at SOAS. <a href="https://www.instagram.com/jehadkmiri/">@jehadkmiri</a></div>
            </div>
          </div>

          <div class='md:hidden flex flex-col justify-center min-w-full container font-leaguespartan font-bold  p-2 md:py-5 sm:pl-0  md:pl-0  bg-none   text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-center justify-center  border-red-800 leading-normal sm:tracking-wide text-green-800 font-outline-1-black sm:font-outline-1-red-800 md:font-outline-2-red-800'>
            <div class="">
            "The reality of life in Gaza is of ten misrepresented and overlooked. It is a place where daily survival is a challenge, yet it is filled with stories of incredible human strength and perseverance. Children go to school amid ruins; families gather even in the darkest times - hope is not a luxury but a necessity. Your support and solidarity matter more than words can express."
              </div>  
              <div class='mt-4'>- Jehad the voice of Gaza at SOAS. <a href="https://www.instagram.com/jehadkmiri/">@jehadkmiri</a></div>
          </div>

        </div> */}

  
        
        <div class="">
          <InstagramEmbed url="https://www.instagram.com/soasliberatedzone/"  />
        </div> 

      </div>

    );
  };
};

export default Home;