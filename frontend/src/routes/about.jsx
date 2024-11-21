import { useState } from 'react';
import AboutComponent from '/src/components/about';
import { useLocation } from 'react-router-dom';

function About () {

    const { state } = useLocation();

    return (
        

        <div>
          <AboutComponent state = {state} />
        </div>
    )
}

export default About

            
