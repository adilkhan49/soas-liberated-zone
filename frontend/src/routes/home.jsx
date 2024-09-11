import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import days_between from '../components/days_between';


var slzStartDate = new Date(2024, 4, 5);
var gazaStartDate = new Date(2023, 9, 7);
var today = new Date();
var slz_days = days_between(slzStartDate,today)
var gaza_days = days_between(gazaStartDate,today)

const Home = props => {
  return (
    <div>
      <h1>SOAS Liberated Zone for Gaza</h1>

      <h2 class='italic'>Educative online room making school cool</h2>



        <div class="h-40 grid grid-cols-3 gap-1 gap-y-2 sm:gap-y-4 md:gap-y-6 lg:gap-y-8 xl:gap-y-1 place-items-center flex">
        
        <div class="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-black border-gray-700">
          <h5 class="text-center mb-2 text-xl font-bold tracking-tight text-white">Day {gaza_days} of the Genocide</h5>
        </div>

        <a href="about" rel="noopener noreferrer">
          <div class="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-black border-gray-700 hover:bg-gray-700">
            <h5 class="text-center mb-2 text-xl font-bold tracking-tight text-white">Day {slz_days} of the Liberated Zone</h5>
          </div>
        </a>

        <a href="https://www.middleeasteye.net/live-update/soas-students-suspended-after-attending-pro-palestine-protest" rel="noopener noreferrerb" target="_blank">
          <div class="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-black border-gray-700 hover:bg-gray-700">
            <h5 class="text-center mb-2 text-xl font-bold tracking-tight text-white">10 Suspensions</h5>
          </div>
        </a>
      


    </div>



      <div class="flex justify-center items-center">
        <figure>
          <img class="h-auto max-w-full rounded-lg" src="/src/home-page.jpeg" alt="Intifada to Victory" />
          <figcaption class="mt-2 text-sm text-center">!انتفاضة شامیے</figcaption>
        </figure>
      </div>
      <p> </p>

      {/* <p>
        The genocide in gaza has continued for {gaza_days} days.
        <br></br>
        Today is day {slz_days} of our encampment
      </p>  */}
      
      <div class="m-20">
        <InstagramEmbed url="https://www.instagram.com/soasliberatedzone/"  />
      </div>
    </div>

  );
};

export default Home;