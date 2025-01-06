// import { Component } from "react";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

function formatDate(image) {
    const date = new Date(image.release_date);
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
    if (image.exclude_date) {
        options = {
            year: 'numeric',
            month: 'long',
          }
    };
    if (image.exclude_month) {
        options = {
            year: 'numeric',
          }
    };
    return date.toLocaleString('en-GB', options)
    }


const useKeyPress = (targetKey) => {
    const [keyPressed, setKeyPressed] = useState(false);
  
    useEffect(() => {
      const downHandler = ({ key }) => {
        if (key === targetKey) {
          setKeyPressed(true);
        }
      };
  

      const upHandler = ({ key }) => {
        if (key === targetKey) {
          setKeyPressed(false);
        }
      };
  
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);
  
      return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
      };
    }, [targetKey]);
  
    return keyPressed;
  };


function GalleryListing ({images}) {

    const [carouselOpen, setCarouselOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(0)
    const [currentPage, setCurrentPage] = useState(2);
    const [postsPerPage] = useState(21);

    const openImg = (id) => {
        setSelectedImage(id);
        console.log('Gallery Image: ' + images[selectedImage].pk + ' - ' + images[selectedImage].title )
        setCarouselOpen(true);
    }

    const prevSlide = (id) => {
        if (selectedImage  > 0) {
            console.log('Gallery Image: ' + images[selectedImage-1].pk + ' - ' + images[selectedImage-1].title )
            setSelectedImage(selectedImage-1);
        }
    }

    const nextSlide = (id) => {
        if (selectedImage + 1 < images.length) {
            console.log('Gallery Image: ' + images[selectedImage+1].pk + ' - ' + images[selectedImage+1].title )
            setSelectedImage(selectedImage+1);
        }
    }

    const escPressed = useKeyPress('Escape');
    const arrowLeftPressed = useKeyPress('ArrowLeft');
    const arrowRightPressed = useKeyPress('ArrowRight');
  
    useEffect(() => {
        if (escPressed) {
          console.log('escPressed');
          setCarouselOpen(false)
        }
      }, [escPressed]);

    useEffect(() => {
        if (arrowLeftPressed && carouselOpen) {
          console.log('arrowLeftPressed');
          prevSlide(selectedImage);
        }
      }, [arrowLeftPressed]);

    useEffect(() => {
        if (arrowRightPressed) {
          console.log('arrowRightPressed');
          nextSlide(selectedImage)
        }
      }, [arrowRightPressed]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = images.slice(indexOfFirstPost, indexOfLastPost);
    

    return (
        <div>
            {
                carouselOpen &&

                    <div id="dialog" class="bg-black h-full w-full sm:h-3/4 sm:w-3/4 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md drop-shadow-lg">
                        <div class="absolute right-0 -translate-x-4">
                            <button 
                                id="close" 
                                onClick={() => setCarouselOpen(false)}
                                class="absolute right-0 top-0 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] hover:bg-gray-300 bg-gray-200 active:bg-white/30 z-45">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5L19 19M5 19L19 5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </button>
                        </div>
                        <div class="h-full w-full  border-gray-300">
                            <img
                                class='h-full w-full object-contain'
                                src = {images[selectedImage].url}
                            />
                        </div>



                        {(selectedImage  > 0) && 
                            <button
                                id='left-btn'
                                // class="absolute  top-1/2 left-0 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] hover:bg-gray-200 bg-gray-200 active:bg-white/30 z-45"
                                class="absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-1 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-gray-300 active:bg-gray/30 grid place-items-center z-45 sm:bg-gray-200"
                                onClick={prevSlide}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/></svg>
                            </button>
                        }
                        {(selectedImage + 1 < images.length) &&
                            <button
                                id='right-btn'
                                class="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-gray-300 active:bg-white/30 grid place-items-center z-45 sm:bg-gray-200"
                                onClick={nextSlide}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                            </button>
                        }

                        <div class="absolute w-full sm:relative bottom-0   text-lg text-center font-bold" >
                        <div>{formatDate(images[selectedImage])}</div>
                        {images[selectedImage].credit_to &&
                            <div>Credit - {images[selectedImage].credit_to}</div>
                        }
                        </div>


                    </div>
            }

           
            <div class={carouselOpen && "blur-3xl"}>
                <div className="grid grid-cols-1 gap-4 sm:gap-10 sm:grid-cols-3 md:grid-cols-3 m-4 sm:m-10 items-stretch">
                    {currentPosts.map(({ pk, title, url }, index) => (
                        <div key={index} class="h-30 w-45 sm:h-80 sm:w-120"> 
                            <button  class="h-full w-full"
                                onClick={ () => openImg(index)} 
                            >
                                <img
                                    class="h-full w-full object-cover "
                                    src={url}
                                    alt={pk}
                                >
                                </img>
                            </button>
                        </div>
                    ))}
                </div>

                <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={images.length}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                />
            </div>


        </div>
    );
}


export default GalleryListing;