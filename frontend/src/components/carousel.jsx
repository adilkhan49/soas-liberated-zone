import React, { useState, useEffect } from 'react';
import days_between from '../components/days_between';

var slzStartDate = new Date(2024, 4, 5);
var gazaStartDate = new Date(2023, 9, 7);
var today = new Date();
var slz_days = days_between(slzStartDate,today)
var gaza_days = days_between(gazaStartDate,today)

const Carousel = ({ images, autoSlide = true, autoSlideInterval = 10000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
    // relative w-full max-w-xl mx-auto
    // overflow-hidden relative h-64
  return (
    <div className=" relative object-scale-down w-full  h-full overflow-hidden">
      <div className="">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <img src={image.url} alt={`Slide ${index}`} className="w-full h-full mx-auto object-cover" />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center "
        onClick={prevSlide}
      >
                  <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center "
        onClick={nextSlide}
      >
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <div class="flex grid grid-cols-1 gap-y-1 absolute bottom-10 sm:bottom-10 left-5 transform translate-x-0 sm:translate-x-10">
          
          <div class="block max-w-sm p-2 border border-gray-200 rounded-lg shadow bg-black border-gray-700 justify-self-start">
            <h5 class="text-center mb-2 text-sm sm:text-xl font-bold tracking-tight text-white">Day {gaza_days} of the Genocide</h5>
          </div>

          <div class="block max-w-sm p-2 border border-gray-200 rounded-lg shadow bg-black border-gray-700 justify-self-start">
            <h5 class="text-center mb-2 text-sm sm:text-xl font-bold tracking-tight text-white">Day {slz_days} of the SLZ</h5>
          </div>

          <form action={'/about'} method="get" target={''}>
            <button
              className="bg-black font-tourney text-bold p-1 text-xl sm:text-5xl border-gray-700 hover:bg-gray-700 text-white px-4 rounded-full  rounded-full select-none transition-all text-white ">
              {'Our Demands >'}
            </button>
          </form>

      </div>



    </div>
  );
};

export default Carousel;