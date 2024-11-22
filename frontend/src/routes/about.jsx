import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import AboutComponent from '/src/components/about';

function About () {

    const location = useLocation();
    const { state } = useLocation();
    const lastHash = useRef('');

    useEffect(() => {
      if (location.hash) {
        lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
      }
  
      if (lastHash.current && document.getElementById(lastHash.current)) {
        setTimeout(() => {
          document
            .getElementById(lastHash.current)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          lastHash.current = '';
        }, 100);
      }
    }, [location]);

    return (
        

        <div>
          <AboutComponent state = {state} />
        </div>
    )
}

export default About

            
