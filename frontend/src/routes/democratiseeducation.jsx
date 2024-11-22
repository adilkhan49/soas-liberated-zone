import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';


function DemocratiseEducation () {

  const location = useLocation();
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
    <div class = "min-h-screen bg-red-600 bg-repeat bg-[url('/src/images/hariya-green.svg')] sm:bg-[url('/src/images/hariya-green-1000x800.svg')] m-0">
      <div class='py-5 sm:py-10'>
        <div class= "flex h-48 sm:h-96 container min-w-full justify-center">
            <img

              src = 'https://i.postimg.cc/sDfKDyXM/democratiseeducation.png'
            />
        </div>
      </div>


      <div class='flex gap-20 font-anton bg-black opacity-75  text-opacity-100 text-white text-left text-2xl sm:text-6xl p-3 sm:px-14'>
          <img class="hidden sm:block object-fit h-96 pt-20 pb-20 " src="https://i.postimg.cc/q7knXKWT/megaphone-red.png"/>
          <div class = "m-auto text-opacity-100 text-center">
            We are launching the Democratise Education: End SOAS Repression campaign. To bring together students, staff, and our communities, as we defend our university’s democracy against increasingly repressive attacks. Will you join us? 
          </div>
      </div>

      <div class="flex flex-col gap-4 sm:gap-20 font-anton text-white text-xl sm:text-5xl p-8 sm:p-20 sm:px-64">
        <a href='#state-of-repression' class="text-white no-underline sm:indent-0"><span class=" text-3xl sm:text-7xl text-green-800">⧨ </span>The state of repression at SOAS</a>
        <a href='#initial-demands' class="text-white no-underline indent-8 sm:indent-40"><span class="text-3xl sm:text-7xl text-green-800">⧨ </span>Initial demands of the campaign</a>
        <a href='#work-to-democratise-education' class="text-white no-underline indent-16 sm:indent-80"><span class="text-3xl sm:text-7xl text-green-800">⧨ </span>Work to Democratise Education</a>
      </div>
      
      <div class='flex flex-col font-kanit bg-black text-white opacity-75 text-opacity-100 p-4 sm:p-24 text-xl sm:text-3xl sm:m-8 rounded-3xl m-4 sm:mx-64 text-center'>
        <div id='state-of-repression' class="pb-10">
          In the last few years SOAS management has steadily been creating an increasingly repressive environment at the university for both students and workers. Nevertheless the academic year of 23/24 has seen new heights of authoritarian crackdown with a truly alarming response to the growing student movement Palestine. Since the academic year 2023/2024:
        </div>
        <div class="pb-10">
          11 students have been suspended;
        </div>
        <div class="pb-10">
          One has been excluded;
        </div>
        <div class="pb-10">
          At least 6 students received final warnings for protestsl;
        </div>
        <div class="pb-10">
          2 out of 4 of the student union representatives have been dismissed for reasons relating to protest. 
        </div>
        <div class="pb-10">
          Most recently University of London has taken out a high court injunction to ban all pro-Palestine activism on campus. An unprecedented attack on advocacy within the university.
        </div>
        <div class="pb-10">
        The state of basic advocacy rights at SOAS is chilling, with detrimental impacts on workers' struggle at the university. We have recently seen blatent union victimisation, 100% pay cuts for lecturers taking strike action,  increasing decline in working conditions for cleaners, and a ban on the picket line at the entrance of SOAS, its historical location for decades.
        </div>
        <div class="pb-10">
          This repression has also taken place within wider institutional reforms such as new  protest guidelines that ban effective protest on campus, as well as a new constitution in the student union that has put in place external trustees in a previously independent, student-run union. All of this has been overseen by Adam Habib, a director who has recieved a vote of no confidence from all three unions at SOAS.  
        </div>
        <div>
          The verdict is clear. SOAS is shamelessly using its full force to silence the voices of its community. Our work is clear. We cannot let them set this precedent of repression with impunity. SOAS belongs to its students and staff and we will work for our community to be one we can be proud of. 
        </div>
      </div>

      <div class='p-8'>

      </div>
      
    </div>
  )
}

export default DemocratiseEducation

            
