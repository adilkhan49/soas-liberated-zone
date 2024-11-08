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

    {/* <LinkButton 
      linkText={"Contact us to get involved"} 
      linkUrl={"bar"}
    ></LinkButton>
    <br></br> */}

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

    {/*   <p class='container bg-amber-50 p-5 bg-green-700 sm:bg-transparent text-gray-50 sm:text-black mx-auto  text-lg sm:text-2xl font-kanit text-center'>
      7. Contact us to share your skills or how you want to help at <a class= "text-white md:text-blue-700" href="mailto:soasliberatedzone@gmail.com">soasliberatedzone@gmail.com</a>
    </p> */}

  </div>;

const GetInvolved = props => {
    return (
      <div>
      <div class = "flex flex-grid grid-cols-2 ">
        <div class="hidden lg:block">
          <figure>
            <img class="h-auto max-w-full  object-fill " src="https://i.postimg.cc/Zn1GPY9P/get-involved.jpg" alt="Get Involved" />
            <a href="/login"></a>
          </figure>
        </div>
        <div class = "flex-1 container mx-auto ">
          {GetInvolvedLinks}
        </div>
      </div>
    </div>
    );
};

export default GetInvolved;