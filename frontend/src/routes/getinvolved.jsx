import LinkButton from "../components/linkbutton";
import Subscribe from "../components/SubscribeForm";

const GetInvolvedLinks =
 <div class='text-center text-green-800 text-lg'>
  <p class='container bg-amber-50 p-5 bg-green-700 sm:bg-transparent text-gray-50 sm:text-black mx-auto  text-lg sm:text-3xl font-kanit text-center'>
  Come down to the SLZ, come talk to us, there are many ways to get involved on the ground 
  </p>

  <Subscribe />

  <LinkButton 
    linkText={"Join the LZ community broadcast"} 
    linkUrl={"bar"}
  ></LinkButton>
  <br></br>

  <LinkButton 
    linkText={"Contact us to get involved"} 
    linkUrl={"bar"}
  ></LinkButton>
  <br></br>

  <LinkButton 
    linkText={"Donate to fundraisers"} 
    linkUrl={"/fundraiser"}
    target = ""
  ></LinkButton>
  <br></br>

<LinkButton 
    linkText={"Write a submission to our journal"} 
    linkUrl={"/journal/create"}
    target = ""
  ></LinkButton>

  <br></br>

  <p class='container bg-amber-50 p-5 bg-green-700 md:bg-transparent text-gray-50 md:text-black mx-auto  text-lg md:text-3xl font-kanit text-center'>
    Contact us to share your skills or how you want to help at <a class= "text-white md:text-blue-700" href="mailto:soasliberatedzone@gmail.com">soasliberatedzone@gmail.com</a>
  </p>

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