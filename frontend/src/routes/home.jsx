import React, { Component } from "react";
import { InstagramEmbed } from 'react-social-media-embed';
import Carousel from '../components/carousel';
import axios from "axios";
import { CAROUSEL_IMAGES_API_URL } from "../constants";

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

        <p class='container text-white font-kanit font-bold italic bg-amber-50 p-10 bg-green-700 sm:bg-transparent text-gray-50 sm:text-black mx-auto  text-lg sm:text-3xl text-center text-italic'>The SOAS liberated zone is a student led site of anti colonial struggle for Gaza against SOAS university’s complicity in the ongoing genocide. We work to end SOAS’s living colonial legacy to become an institution in service of people’s liberation and a truly decolonial education.</p>

        <div class="flex grid grid-cols-1 sm:grid-cols-2 h-1/4 ">

          <div class=" h-auto border-none">
            <figure>
              <img class="" src={"https://i.postimg.cc/HkSY3qRW/jehad-1.jpg"} alt="Intifada to Victory" />
              {/* <a href="/login"><figcaption class="px-5 py-3 text-center text-lg text-white font-semibold underline ">!انتفاضة شامیے</figcaption></a> */}
            </figure>
          </div>

          <div>
            <p class='flex container h-full inline-block align-middle justify-center font-kanit font-bold italic bg-amber-50 p-10 bg-green-700 sm:bg-transparent text-gray-50 sm:text-black mx-auto  text-lg sm:text-2xl text-center text-italic '>
              The situation in Gaza is dire, but our spirit remains unbroken. Through countless hardships, from blockades to bombings, the people of Gaza continue to strive for a life of dignity, freedom, and peace.
	 Your support and solidarity matter more than words can express. It's not just about standing with Gaza; it's about standing for justice, human rights, and dignity everywhere. Now.</p>
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