import React, { Component } from "react";
import { InstagramEmbed } from 'react-social-media-embed';
import Carousel from '../components/carousel';
import axios from "axios";
import { CAROUSEL_IMAGES_API_URL } from "../constants";

// const images = [
//   {'url': 'https://i.postimg.cc/cJ72zVC4/soas-lib-zone-4-gaza.jpg'},
//   {'url': 'https://i.postimg.cc/N0NSYR6W/soas-camp.jpg'},
//   {'url': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.washingtonpost.com%2Fresizer%2Fly2vKeOrSRj3m7VcJuyM2WyaTRs%3D%2F1484x0%2Farc-anglerfish-washpost-prod-washpost.s3.amazonaws.com%2Fpublic%2FZXEQYUC27YI6RBMPCK7MWTLAM4.jpg&f=1&nofb=1&ipt=11d2c6567034101f3f04776b679f6d4508dc1fa8783eeec7c25b8eed0a7b622e&ipo=images'},
// ];

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
      <div
      // class = "w-full bg-repeat border-2e bg-[url('/src/hariya-tile-lg.svg')] sm:bg-[url('/src/hariya-tile.svg')]"
      >
        <div class="flex justify-center  h-[80vh] ">
          <Carousel images={this.state.carousel_images} />
        </div>

        <p class='container font-kanit font-bold italic bg-amber-50 p-5 bg-green-700 sm:bg-transparent text-gray-50 sm:text-black mx-auto  text-lg sm:text-3xl text-center text-italic'>The SOAS liberated zone is a student led site of anti colonial struggle for Gaza against SOAS university’s complicity in the ongoing genocide. We work to end SOAS’s living colonial legacy to become an institution in service of people’s liberation and a truly decolonial education.</p>




        {/* <div class="flex justify-center items-center border-none">
          <figure>
            <img class="h-auto max-w-full rounded-lg " src={homepageimg} alt="Intifada to Victory" />
            <a href="/login"><figcaption class="px-5 py-3 text-center text-lg text-white font-semibold underline ">!انتفاضة شامیے</figcaption></a>
          </figure>
        </div>
        */}
        <div class="">
          <InstagramEmbed url="https://www.instagram.com/soasliberatedzone/"  />
        </div> 

      </div>

    );
  };
};

export default Home;