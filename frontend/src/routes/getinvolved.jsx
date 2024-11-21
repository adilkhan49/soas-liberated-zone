import LinkButton from "../components/linkbutton";
import Subscribe from "../components/SubscribeForm";

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
              class="h-[50vh] sm:h-[80vh] w-full   object-fill " src="https://i.postimg.cc/sXJKyYn8/slz-call-to-action.jpg" 
              alt="Get Involved" />
          </figure>

          <div class='font-anton bg-amber-50 text-red-800 text-left text-2xl sm:text-6xl p-3 sm:p-7 m-6 sm:m-12 border-4 border-red-800 shadow-lg'>
            Only together can we make SOAS an institution for its members by its members, in service of a truly decolonial education. 
          </div>

          <div class='bg-black opacity-75 text-opacity-100 py-6 sm:py-24 text-3xl sm:text-5xl p-3 sm:m-8 rounded-3xl m-4 sm:mx-64'>
            
            <div class='font-rubikvinyl text-red-800 italic text-5xl sm:text-9xl text-center pb-4 sm:pb-20'>JOIN THE MOVEMENT</div>
            
            <div class="font-kanit text-white text-2xl sm:text-4xl sm:px-4 sm:mx-24 ">
              <ol class="list-none list-inside text-justify space-y-5">
                <li>
                  <span class="text-3xl sm:text-5xl font-bold text-red-600">⧨</span> Get yourself involved, think about it theres so much more of us than them.
                </li>
                <li>
                  <span class="text-3xl sm:text-5xl font-bold text-red-600">⧨</span> Get yourself involved, think about it theres so much more of us than them.
                </li>   
                <li>
                  <span class="text-3xl sm:text-5xl font-bold text-red-600">⧨</span> Get yourself involved, think about it theres so much more of us than them.
                </li>
                <li>
                  <span class="text-3xl sm:text-5xl font-bold text-red-600">⧨</span> Get yourself involved, think about it theres so much more of us than them.
                </li>   
                <li>
                  <span class="text-3xl sm:text-5xl font-bold text-red-600">⧨</span> Get yourself involved, think about it theres so much more of us than them.
                </li>
                <li>
                  <span class="text-3xl sm:text-5xl font-bold text-red-600">⧨</span> Get yourself involved, think about it theres so much more of us than them.
                </li> 
                <li>
                  <span class="text-3xl sm:text-5xl font-bold text-red-600">⧨</span> Get yourself involved, think about it theres so much more of us than them.
                </li>
                <li>
                  <span class="text-3xl sm:text-5xl font-bold text-red-600">⧨</span> Get yourself involved, think about it theres so much more of us than them.
                </li>   
                <li>
                  <span class="text-3xl sm:text-5xl font-bold text-red-600">⧨</span> Get yourself involved, think about it theres so much more of us than them.
                </li>
                <li>
                  <span class="text-3xl sm:text-5xl font-bold text-red-600">⧨</span> Get yourself involved, think about it theres so much more of us than them.
                </li>   
                <li>
                  <span class="text-3xl sm:text-5xl font-bold text-red-600">⧨</span> Get yourself involved, think about it theres so much more of us than them.
                </li>
                <li>
                  <span class="text-3xl sm:text-5xl font-bold text-red-600">⧨</span> Get yourself involved, think about it theres so much more of us than them.
                </li>   
                 
              </ol>


            </div>
          </div>


          <div class="grid grid-cols-1 sm:grid-cols-2 bg-black text-center items-stretch
          ">
            <img class="order-first sm:order-last w-full object-cover" src={"https://i.postimg.cc/pdzq7FmB/kidz-1.jpg"} />

            <div class="text-amber-50 bg-black text-center py-4 sm:py-10 px-4 sm:px-16 m-auto align-middle p-0
              bg-repeat bg-[url('/src/hariya-tile-lg-light.svg')]
            ">
              <p class='sm:text-4xl sm:leading-loose sm:pb-10 '>
                Everyone from our community is needed to end the complicity that puts blood on all of our hands.
              </p>
              <p class='sm:text-4xl  sm:leading-loose sm:pb-10'>
                Everyone at SOAS and beyond is needed in the process of transforming our instution.  
              </p>
              <p class='sm:text-4xl  sm:leading-loose'>
              Together can create a university of dignified working and learning conditions, which serves the anticolonial purpose it claims to support.
              </p>
            </div>
          </div>


          


          
        </div>
      </div>
    );
};

export default GetInvolved;