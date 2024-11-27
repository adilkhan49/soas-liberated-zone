import LinkButton from "../components/linkbutton";
import React, { useState } from 'react'
import { SUBSCRIBE_API_URL } from '../constants';


function Subscribe() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

  try {
      const response = await fetch(SUBSCRIBE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (response.ok) {
          setSuccessMessage("Thank you for joining our newsletter!");
      } else {
          setErrorMessage("Failed to subscribe. Please try again later.")
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setErrorMessage("Failed to subscribe. Please try again later.")
    }
}

return (
  <>

    <form onSubmit={handleSubmit}>

      <div class="flex justify-center">
          <div class="max-w-2xl px-3 rounded-2xl md:px-8 ">
              <div class="my-1 flex gap-2 justify-evenly">
                  <input class="block w-full px-4 py-1 text-gray-800 placeholder-gray-500 bg-white border border-gray-300 rounded-md appearance-none sm:max-w-xs focus:outline-none focus:ring focus:ring-blue-50 focus:border-blue-300" 
                  type='email'
                  value={email}
                  placeholder='Email...'
                  onChange={handleEmailInput}
                  required
                  />
                  <button class="bg-black rounded-full hover:bg-red-800  hover:text-black  block w-full py-1  font-bold tracking-wide rounded shadow sm:ml-3 md:w-52 text-white focus"
                  type='submit'>subscribe</button>
              </div>
              {errorMessage && <p>{errorMessage}</p>}
              {successMessage && <p>{successMessage}</p>}
          </div>
      </div>
    </form>

  </>
)
}

const GetInvolvedLinks =
  <div class='text-center text-green-800 text-lg bg-green-700 sm:bg-transparent'>

    <div class="flex flex-col sm:flex-row sm:ml-10 justify-center items-center pt-5 sm:pt-0">
      <div class="w-10 h-10 rounded-full inline-flex items-center justify-center align-top bg-gradient-to-r from-green-500 to-green-900 text-white text-xl font-bold">
        1
      </div>
      <p class='container bg-amber-50 p-5 bg-green-700 sm:bg-transparent text-gray-50 sm:text-black mx-auto  text-lg sm:text-2xl font-kanit text-center'>
        Come down to the SLZ at Byng Place, come meet the movement, there are so many ways to get involved on the ground.
      </p>
    </div>

    <div class="flex flex-col sm:flex-row sm:ml-10 justify-center items-center ">
      <div class="w-10 h-10 rounded-full inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-900 text-white text-xl font-bold">
        2
      </div>
      <p class='container bg-amber-50 p-5 bg-green-700 sm:bg-transparent text-gray-50 sm:text-black mx-auto  text-lg sm:text-2xl font-kanit text-center'>
        Contact us @soasliberatedzone with your interests and availability so we can direct you to more specific tasks, and community group chats. 
      </p>
    </div>

    <div class="flex flex-col sm:flex-row sm:ml-10 justify-center items-center ">
      <div class="w-10 h-10 rounded-full inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-900 text-white text-xl font-bold">
        3
      </div>
      <p class='container bg-amber-50 p-5 bg-green-700 sm:bg-transparent text-gray-50 sm:text-black mx-auto  text-lg sm:text-2xl font-kanit text-center'>
        Support the encampment by providing hot meals non perishable foods, and volunteer for night shifts! 
      </p>
    </div>

    <div class="flex flex-col sm:flex-row sm:ml-10 justify-center items-center ">
      <div class="w-10 h-10 rounded-full inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-900 text-white text-xl font-bold">
        4
      </div>
      <p class='container bg-amber-50 p-5 bg-green-700 sm:bg-transparent text-gray-50 sm:text-black mx-auto  text-lg sm:text-2xl font-kanit text-center'>
        Stay connected! Make sure to come to ongoing actions, community events, and stay updated on the struggle at SOAS 
      </p>
    </div>

    <LinkButton 
      linkText={"Join the LZ community broadcast"} 
      linkUrl={"https://signal.group/#CjQKIM5LoPsS4lKVkHR08Nr686ZxJRWhm_hImbG3bNpJbJglEhCuU5LbAmsdAiz-oQgKH6lp"}
    ></LinkButton>
    <Subscribe />

    <div class="flex flex-col sm:flex-row sm:ml-10 justify-center items-center ">
      <div class="w-10 h-10 rounded-full inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-900 text-white text-xl font-bold">
        5
      </div>
      <p class='container bg-amber-50 p-5 bg-green-700 sm:bg-transparent text-gray-50 sm:text-black mx-auto  text-lg sm:text-2xl font-kanit text-center'>
        Write an entry for the LZ journal! We call on all members of the community to share writings, commentaries and all forms of media. We cannot rely on SOAS for a truly Decolonial education and know we must must grow our movements from our own collective wealth of knowledge.
      </p>
    </div>

    <LinkButton 
      linkText={"Write a submission to our journal"} 
      linkUrl={"/journal/create"}
      target = ""
    ></LinkButton>

    <div class="flex flex-col sm:flex-row sm:ml-10 justify-center items-center ">
      <div class="w-10 h-10 rounded-full inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-900 text-white text-xl font-bold">
        6
      </div>
      <p class='container bg-amber-50 p-5 bg-green-700 sm:bg-transparent text-gray-50 sm:text-black mx-auto  text-lg sm:text-2xl font-kanit text-center'>
       Donate
      </p>
    </div>

    <LinkButton 
      linkText={"Donate"} 
      linkUrl={"/fundraiser"}
      target = ""
    ></LinkButton>

  </div>;

const GetInvolved = props => {
    return (
      <div class = "flex min-w-full min-h-screen">
        <div class="w-full">

          <figure>
            <img
              class="h-[50vh] sm:h-[80vh] w-full object-fill " src="https://i.postimg.cc/sXJKyYn8/slz-call-to-action.jpg" 
              alt="Get Involved" />
          </figure>

          {/* <div class='font-anton bg-amber-50 text-red-800 text-left text-2xl sm:text-4xl p-3 sm:p-7 m-6 sm:m-12 border-4 border-red-800 shadow-lg'>
            Only together can we make SOAS an institution for its members by its members, in service of a truly decolonial education. 
          </div> */}

          <div class='bg-black bg-opacity-75 text-opacity-100 py-6 sm:py-24 text-3xl sm:text-5xl p-3 sm:m-8 rounded-3xl m-4 sm:mx-64'>
            
            <div class='font-rubikvinyl text-red-800 italic text-5xl sm:text-7xl text-center pb-4 sm:pb-20'>
              JOIN THE MOVEMENT
            </div>
            
            <div class="font-kanit text-amber-50 text-xl sm:text-3xl sm:px-4 sm:mx-2 ">
              <ol class="list-none list-inside text-justify space-y-5">
              <li class="flex flex-row sm:text-4xl">
                  <div class="flex w-2/3"><span class="w-1/2 text-3xl sm:text-7xl font-bold text-red-600">⧨ </span> 
                    Fill in the form to get involved. Help to organising media, campaigns and actions and to hold the space at the encampment. Bring any skills and time you have and become a part of the community!  
                    </div>
                  <form 
                    action="/signup" 
                    class="container h-20 text-black sm:text-3xl font-anton rounded-full p-2 m-2 mx-auto my-20 w-60 bg-amber-50 border-red-800 hover:bg-red-800 hover:border-black hover:text-amber-50 tracking-widest border-10 items-center text-center">
                    <button>sign up</button>
                  </form>
                </li>
                <li class="flex flex-col sm:text-4xl">
                  <div><span class="text-3xl sm:text-7xl font-bold text-red-600">⧨ </span> 
                    Stay in touch and informed! 
                  </div>
                  <form
                    action="https://signal.group/#CjQKIM5LoPsS4lKVkHR08Nr686ZxJRWhm_hImbG3bNpJbJglEhCuU5LbAmsdAiz-oQgKH6lp"
                    target="_blank"
                    class="container text-black sm:text-3xl font-anton p-2 m-2 mx-auto w-full  tracking-widest bg-amber-50 border-red-800 hover:bg-red-800 hover:border-black hover:text-amber-50 rounded-full border-10 items-center text-center">
                    <button>join the whatsapp broadcast </button>
                  </form>
                </li>
                <li class="flex flex-col sm:text-4xl">
                  <div><span class="text-3xl sm:text-7xl font-bold text-red-600">⧨ </span> 
                    Subscribe for updates
                  </div>
                  <div class="container text-black  font-anton rounded-full p-2 m-2 mx-auto w-2/3 bg-amber-50  tracking-widest border-10 border-red-800 items-center text-center">
                    <Subscribe />
                  </div>

                </li>
                <li class="flex flex-col sm:text-4xl">
                <div><span class="text-3xl sm:text-7xl font-bold text-red-600">⧨ </span> 
                  Come down to <a class="text-red-600" href="https://maps.app.goo.gl/3Su9dXtar73z7mG67" target="_blank">Byng Place,  WC1E 7LE</a>, visit the encampment and get connected on the ground,
                </div>
                </li>

                 
              </ol>


            </div>
          </div>


          <div class="relative h-[90vh] container items-end min-w-full my-12">
            <img 
              class="absolute w-2/3 h-[80vh] bottom-0 right-0 object-cover object-bottom" 
              src={"https://i.postimg.cc/q79FMn1j/marching.jpg"} />
            <div class="absolute w-1/2 translate-x-0 translate-y-0  text-black border-10 bg-amber-50 border-red-800 text-center py-4 px-4 sm:px-16 m-auto align-middle mx-20 ">
              <p class='sm:text-4xl mb-0   tracking-wide '>
              SOAS can be an institution <span class="text-red-700">for its members by its members</span>, in service of the <span class="text-red-700">anticolonial education</span> its claims to provide; but only through our <span class="text-red-700">collective struggle</span>! We cannot be silent as SOAS repeatedly fails the people of Palestine and its own community. 
              </p>
            </div>
          </div>


          


          
        </div>
      </div>
    );
};

export default GetInvolved;