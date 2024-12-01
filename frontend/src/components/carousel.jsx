import React, { useState, useEffect } from 'react';
import FlipCountdown from "../components/flipcountdown";
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
    <div className=" relative object-scale-down w-full  h-full overflow-hidden md:border-0 lg:border-60 border-black border-opacity-85">


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

      {/* Left Button */}
      <div class="absolute z-30 h-full w-full bg-repeat bg-[url('/src/hariya-tile-lg-light.svg')]">

      <button
        className="absolute z-45 top-1/2 left-0 transform -translate-y-1/2 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center "
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

      {/* Right Button */}

      <button
        className="absolute z-45 top-1/2 right-0 transform -translate-y-1/2 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center "
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

      {/* Slide Position */}

      <div className="absolute z-45 bottom-0 left-0 right-0 flex justify-center mb-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <div class = "absolute z-45 right-2 md:right-10 bottom-16 md:bottom-40">
          <FlipCountdown
            number={slz_days}
            caption={'Days of encampment'}
            top_color={'bg-black'}
            bottom_color={'bg-black'} 
            border_color={'border-green-900'} 
            line_color='bg-green-900'
            opacity={'opacity-80'}
            />
      </div>

      <div class = "absolute z-45 right-2 sm:right-10 -bottom-10 sm:bottom-0">
          <FlipCountdown
            number={gaza_days}
            caption={'Days of genocide'}
            top_color={'bg-red-700'}
            bottom_color={'bg-red-600'} 
            border_color={'border-gray-500'} 
            line_color={'bg-gray-500'}
            opacity={'opacity-90'}
            />
      </div>

      </div>


    </div>
  );
};

export default Carousel;