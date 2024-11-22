import React, { Component } from "react";
import { InstagramEmbed } from 'react-social-media-embed';
import Carousel from '../components/carousel';
import axios from "axios";
import { CAROUSEL_IMAGES_API_URL } from "../constants";
import FlipCountdown from "../components/flipcountdown";
import logo from "/src/slz-logo.png";
import { Link } from "react-router-dom";

class Home extends Component {

  state = {
    carousel_images: []
  };

  componentDidMount() {
    this.resetState();
  }

  getCarouselImages = () => {
    axios.get(CAROUSEL_IMAGES_API_URL).then(res => this.setState({ carousel_images: res.data }));
  };

  resetState = () => {
    this.getCarouselImages();
  };


  render() {
    return (
      <div>

        <div class="flex justify-center  h-[80vh] ">
          <Carousel images={this.state.carousel_images} />
        </div>
        <div class=' font-tourney  bg-black opacity-85 hover:opacity-50 text-opacity-100 text-left text-2xl sm:text-5xl p-3 sm:px-14'>
          <Link to='/getinvolved' class="no-underline text-green-900 font-bold">
            {"End the complicity. End the repression. SOAS must become an institution in service of its community >>>"}
          </Link>
        </div>

        <div class='relative flex flex-col justify-center min-w-full container py-10 px-4 sm:p-14 pb-0 text-red-800  text-lg sm:text-4xl text-center  text-italic justify-center '>
          <div class='z-10 relative flex justify-center min-w-full container font-kanit font-bold italic p-2 sm:py-5 sm:px-32  bg-amber-50 text-red-800  text-lg sm:text-4xl text-center text-italic justify-center shadow-2xl border-4 border-red-800 leading-normal'>
            The SOAS liberated zone is a student led site of anti colonial struggle for Gaza against SOAS university’s complicity in the ongoing genocide.  We cannot accept forced complicity in crimes against humanity and antidemocratic repression in our community. That is why we work to end SOAS’s living colonial legacy to become an institution in service of people’s liberation and a truly decolonial education. 
            {/* <div class= "sm:h-96 hidden sm:block absolute w-1/4 pt-5 sm:p-10 sm:h-96 container justify-center left-0 translate-y-32 z-20">
              <img src = {logo}/>
            </div> */}
          </div>


          <div className="sm:flex sm:flex-row gap-28 ">
            <div class= "hidden sm:block w-1/4 pt-5 container justify-center ">
              <img src = {logo}/>
            </div>
            <div class=' grid grid-cols-1 gap-y-3  p-6 font-kanit font-bold italic   text-lg sm:text-4xl text-center items-center'>
                <Link to='/about#demands' state={{ demands: true, statements: false, timeline: false }}class="w-60 sm:w-96 p-4 border border-green-800 bg-white text-green-800 shadow-2xl rounded-3xl m-auto hover:bg-amber-50 no-underline hover:underline -translate-x-10">
                  {"Our Demands >>>"}
                </Link>
                <Link to='/about#statements' state={{ demands: false, statements: true, timeline: false }} class="w-60 sm:w-96 p-4 border border-green-800 bg-white text-green-800 shadow-2xl rounded-3xl m-auto hover:bg-amber-50 no-underline hover:underline sm:translate-x-40 ">
                  {"Our Statements >>>"}
                </Link>
                <Link to='/about#timeline' state={{ demands: false, statements: false, timeline: true }} class="w-60 sm:w-96 p-4 border border-green-800 bg-white text-green-800 shadow-2xl rounded-3xl m-auto hover:bg-amber-50 no-underline hover:underline translate-x-10 sm:translate-x-80">
                {"Our Story >>>"}
                </Link>
            </div>
          </div>
        </div>


        <div class="flex grid grid-cols-1 sm:grid-cols-2 ">

          <div class=" h-auto border-none">
            <figure>
              <img class="" src={"https://i.postimg.cc/2S5kJHb5/jehad-cut.jpg"} />
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