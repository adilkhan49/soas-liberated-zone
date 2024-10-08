import React, { useState } from 'react'
import { SUBSCRIBE_API_URL } from '../constants';

function Subscribe() {
    const [email, setEmail] = useState("");
    const [isValidEmail, setisValidEmail] = useState(false);
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

        <div class="flex justify-center px-20">
            <div class="max-w-2xl px-3 py-5 rounded-2xl md:px-8 md:py-7">
                <p class="max-w-xl mt-2 leading-relaxed lg:text-lg">
                        Subscribe to our newsletter
                </p>
                <div class="my-4 sm:flex sm:flex-row sm:justify-evenly">
                    <input class=" block w-full px-4 py-3 mt-3 text-gray-800 placeholder-gray-500 bg-white border border-gray-300 rounded-md appearance-none sm:max-w-xs focus:outline-none focus:ring focus:ring-blue-50 focus:border-blue-300" 
                    type='email'
                    value={email}
                    placeholder='Enter your email'
                    onChange={handleEmailInput}
                    required
                    />
                    <button class="bg-black hover:bg-gray-700 block w-full py-3 mt-3 font-bold tracking-wide rounded shadow sm:ml-3 md:w-52 text-white focus"
                    type='submit'>Subscribe</button>
                </div>
                {errorMessage && <p>{errorMessage}</p>}
                {successMessage && <p>{successMessage}</p>}
            </div>
        </div>
      </form>

    </>
  )
}

export default Subscribe;