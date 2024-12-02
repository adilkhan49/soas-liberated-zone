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
              src = 'https://images2.imgbox.com/9f/aa/7qVqi0UC_o.png'
            />
        </div>
      </div>

      <div class='flex items-center gap-20 font-leaguespartan bg-black bg-opacity-65  text-opacity-100 text-white text-left text-2xl sm:text-4xl p-3 sm:px-14'>
          <img class="hidden lg:block object-fit h-72 pt-10 pb-10 " src="https://images2.imgbox.com/ea/4f/X5dVV8cZ_o.png"/>
          <div class = "m-auto text-opacity-100 text-center">
            We are launching the Democratise Education: End SOAS Repression campaign. To bring together students, staff, and our communities, as we defend our university’s democracy against increasingly repressive attacks. Will you join us? 
          </div>
      </div>

      <div class="flex flex-col gap-2 sm:gap-5 font-leaguespartan font-bold text-white text-xl sm:text-3xl lg:text-4xl xl:text-5xl p-8 lg:p-10 xl:px-20">
        <a href='#state-of-repression' class="hover:text-red-800 font-outline-2-black text-white no-underline sm:indent-0">The state of repression at SOAS <span class="text-3xl sm:text-4xl text-red-800">&#x25ba;</span></a>
        <a href='#initial-demands' class="hover:text-red-800 font-outline-2-black text-white no-underline sm:indent-8 xl:indent-40">Initial demands of the campaign <span class="text-3xl sm:text-4xl text-red-800">&#x25ba;</span></a>
        <a href='#work-to-democratise-education' class="hover:text-red-800 font-outline-2-black text-white no-underline sm:indent-16 xl:indent-80">Work to Democratise Education <span class="text-3xl sm:text-4xl text-red-800">&#x25ba;</span></a>
      </div>
      
      <div
        id='state-of-repression' 
        class='flex flex-col font-kanit bg-black text-white bg-opacity-75 p-4 lg:p-24 text-xl sm:text-3xl sm:m-8 rounded-3xl m-4 lg:mx-48 lg:mx-64 text-center'>
        <div class='text-3xl sm:text-5xl lg:text-7xl font-outline-4-black font-bold pb-10'>
          The state of repression at SOAS
        </div>
        <div class="pb-10">
          In the last few years SOAS management has steadily been creating an increasingly repressive environment at the university for both students and workers. Nevertheless the academic year of 23/24 has seen new heights of authoritarian crackdown with a truly alarming response to the growing student movement Palestine. Since the academic year 2023/2024:
        </div>
        <div class="pb-10 text-red-500">
          - 11 students have been suspended;
        </div>
        <div class="pb-10 text-red-500">
          - One has been excluded;
        </div>
        <div class="pb-10 text-red-500">
          - At least 6 students received final warnings for protestsl;
        </div>
        <div class="pb-10 text-red-500">
          - 2 out of 4 of the student union representatives have been dismissed for reasons relating to protest. 
        </div>
        <div class="pb-10 text-red-500">
          - Most recently University of London has taken out a high court injunction to ban all pro-Palestine activism on campus. An unprecedented attack on advocacy within the university.
        </div>
        <div class="pb-10">
        The state of basic advocacy rights at SOAS is chilling, with detrimental impacts on workers' struggle. We have recently seen blatent union victimisation, 100% pay cuts for lecturers taking strike action,  increasing decline in working conditions for cleaners, and a ban on the picket line at the entrance of SOAS, its historical location for decades.
        </div>
        <div class="pb-10">
          This repression has also taken place within wider institutional reforms such as new  protest guidelines that ban effective protest on campus, as well as a new constitution in the student union that has put in place external trustees in a previously independent, student-run union. All of this has been overseen by Adam Habib, a director who has recieved a vote of no confidence from all three unions at SOAS.  
        </div>
        <div>
          The verdict is clear. SOAS is shamelessly using its full force to silence the voices of its community. Our work is clear. We cannot let them set this precedent of repression with impunity. SOAS belongs to its students and staff and we will work for our community to be one we can be proud of. 
        </div>
      </div>

      <div class='py-5 sm:py-10'>
        <div class= "flex h-48 sm:h-96 container min-w-full justify-center">
            <img
              src = 'https://images2.imgbox.com/9f/aa/7qVqi0UC_o.png'
            />
        </div>
      </div>

      <div id='initial-demands' class='flex flex-col font-anton  bg-black text-white bg-opacity-65 gap-y-10 font-leaguespartanfont-bold text-black text-3xl sm:text-5xl lg:text-6xl xl:text-8xl pb-10 text-left align-middle justify-evenly'>
          <div class="mt-4 indent-20 text-red-500 font-outline-4-black ">Initial Demands</div>
          <div class='text-red-500 font-leaguespartan flex flex-col  font-bold   px-4 lg:px-24 text-xl sm:text-3xl lg:text-5xl sm:mx-8 rounded-3xl  text-left'>
          The campaign has these few initial demands, the bare minimum to ensure basic democracy within SOAS. 
        </div>
          

        {/* <div class='flex flex-col font-kanit text-white bg-opacity-75 px-4 lg:px-24 text-xl sm:text-3xl sm:mx-8 rounded-3xl m-4 lg:mx-48 lg:mx-64 text-center' */}
      <div class='flex flex-col font-kanit font-bold  text-black bg-opacity-75 px-4 lg:px-24 text-xl sm:text-3xl sm:mx-8 rounded-3xl  text-center'>


        <div class="flex flex-col gap-y-4 m-4 lg:mx-24 lg:mx-64 sm:gap-5  text-xl sm:text-3xl md:text-4xl lg:text-4xl p-8 text-white ">
        <div><span class=" text-3xl sm:text-5xl text-red-800">▼ </span><span class="font-outline-3-red-800">
          Reinstate our SU co-Presidents Abel and Alex
          </span> 
          </div>
          <div><span class=" text-3xl sm:text-5xl text-red-800">▼ </span><span class="font-outline-3-red-800">
            Drop the ongoing suspensions six month suspensions against Haya and Tara
            </span>
          </div>
          <div><span class=" text-3xl sm:text-5xl text-red-800">▼ </span><span class="font-outline-3-red-800">
            Drop the final warnings against four students for participating in peaceful protest 
            </span>
          </div>
          <div><span class=" text-3xl sm:text-5xl text-red-800">▼ </span><span class="font-outline-3-red-800">
            Scrap the authoritarian ‘Protest events at SOAS - guidelines for students’
            </span>
          </div>
        </div>

      </div>
      </div>

      <div 
        id='work-to-democratise-education' 
        class='flex flex-col font-kanit bg-black text-white bg-opacity-65 p-4 lg:p-24 text-xl sm:text-3xl sm:m-8 rounded-3xl m-4 lg:mx-48 lg:mx-64 text-center'
      >
        <div class='text-3xl sm:text-5xl lg:text-7xl font-outline-4-black  font-bold pb-10'>
          Work to Democratise Education
          </div>
          <div>
          Sign up here to get connected with other students/ staff and find pathways to action or send us an email directly <a href='mailto:soasliberatedzone@gmail.com' class='text-blue-400'>soasliberatedzone@gmail.com</a>
          </div>
          <form 
            action="/signup" 
            class="container text-black md:text-3xl font-anton rounded-3xl p-2 m-2 mx-auto mt-8 w-60 bg-amber-50 border-red-800 hover:bg-red-800 hover:border-black hover:text-amber-50 tracking-widest border-10 items-center text-center">
            <button>sign up</button>
          </form>
          <form
            action="https://signal.group/#CjQKIM5LoPsS4lKVkHR08Nr686ZxJRWhm_hImbG3bNpJbJglEhCuU5LbAmsdAiz-oQgKH6lp"
            target="_blank"
            class="container text-black sm:text-3xl font-anton w-2/3 sm:w-1/2 p-2 m-2 mx-auto   tracking-widest bg-amber-50 border-red-800 hover:bg-red-800 hover:border-black hover:text-amber-50 rounded-3xl border-10 items-center text-center">
            <button>join the whatsapp broadcast </button>
          </form>
      </div>

      <div class='text-center font-bold text-3xl sm:text-4xl font-kanit md:py-12 md:px-36'>
        SOAS can be an institution <span class=''>FOR</span> the community <span class=''>BY</span> the community, one we can be proud to work and study at, but only through our collective struggle  
      </div>
      <img
        class='h-[100vh] w-full object-cover object-bottom'
        src='https://images2.imgbox.com/f1/9b/VMZXyfBV_o.jpeg'
      ></img>


      
    </div>
  )
}

export default DemocratiseEducation

            
