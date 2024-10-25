import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import days_between from '../components/days_between';
import homepageimg from '/src/home-page.jpeg'

var slzStartDate = new Date(2024, 4, 5);
var gazaStartDate = new Date(2023, 9, 7);
var today = new Date();
var slz_days = days_between(slzStartDate,today)
var gaza_days = days_between(gazaStartDate,today)

const Home = props => {
  return (
    <div
    // class = "w-full bg-repeat border-2e bg-[url('/src/hariya-tile-lg.svg')] sm:bg-[url('/src/hariya-tile.svg')]"
    >
      <h1>SOAS Liberated Zone for Gaza</h1>

      <p class='text-3xl font-kanit text-center'>The SOAS liberated zone is a student led site of anti colonial struggle for Gaza against SOAS university’s complicity in the ongoing genocide. We work to end SOAS’s living colonial legacy to become an institution in service of people’s liberation and a truly decolonial education.</p>



        <div class="flex sm:h-40 grid grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-2 sm:gap-y-4 md:gap-y-6 lg:gap-y-8 xl:gap-y-1 place-items-center m-10 sm:m-2 ">
        
          <div class="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-black border-gray-700">
            <h5 class="text-center mb-2 text-sm sm:text-xl font-bold tracking-tight text-white">Day {gaza_days} of the Genocide</h5>
          </div>

        
          <a href="about" rel="noopener noreferrer">
            <div class="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-black border-gray-700 hover:bg-gray-700">
              <h5 class="text-center mb-2 text-sm sm:text-xl font-bold tracking-tight text-white">Day {slz_days} of the SLZ</h5>
            </div>
          </a>

          <a href="https://www.middleeasteye.net/live-update/soas-students-suspended-after-attending-pro-palestine-protest" rel="noopener noreferrerb" target="_blank">
            <div class="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-black border-gray-700 hover:bg-gray-700">
              <h5 class="text-center mb-2 text-sm sm:text-xl font-bold tracking-tight text-white">10 Students Suspended</h5>
            </div>
          </a>

       </div>



      <div class="flex justify-center items-center border-none">
        <figure>
          <img class="h-auto max-w-full rounded-lg " src={homepageimg} alt="Intifada to Victory" />
          <a href="/login"><figcaption class="px-5 py-3 text-center text-lg text-white font-semibold underline ">!انتفاضة شامیے</figcaption></a>
        </figure>
      </div>
      
      <div class="">
        <InstagramEmbed url="https://www.instagram.com/soasliberatedzone/"  />
      </div>
    </div>

  );
};

export default Home;