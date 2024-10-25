import LinkButton from "../components/linkbutton";
import Subscribe from "../components/SubscribeForm";

const GetInvolvedLinks =
 <div class='text-center'>
  <p>
    Come down to the SLZ, come talk to us, there are many ways to get involved on the ground 
  </p>
    <Subscribe />

    <p>Donate to our fundraisers</p>

    <LinkButton 
      linkText={"Fundraisers"} 
      linkUrl={"/fundraiser"}
      target = ""
    ></LinkButton>

  <p>Join these group chats</p>

  <LinkButton 
    linkText={"Link missing"} 
    linkUrl={"bar"}
  ></LinkButton>
  <br></br>

  <p>Write a submission for our journal </p>

  <LinkButton 
    linkText={"Create Journal Entry"} 
    linkUrl={"/journal/create"}
    target = ""
  ></LinkButton>
  <br></br>

  <p>Sign petition </p>

    <LinkButton 
      linkText={"Demand SOAS reinstate democracitally elected sabbatical officers"} 
      linkUrl={"https://actionnetwork.org/petitions/d33bee9f647b75f213294b527aa82317d8725b09?source=direct_link&"}
    ></LinkButton>
  <br></br>

  <p>Email templates </p>

    <LinkButton 
      linkText={"Email Template to SOAS to end its repression of Pro Palestinian activists"} 
      linkUrl={"https://docs.google.com/document/d/1-_8-ENHZ_nY0yW4YV8TKanNhAlKdx8HZ45OYXyMvAQ0/"}
    ></LinkButton>

  <LinkButton 
      linkText={"Email your MP"} 
      linkUrl={"https://docs.google.com/document/d/1PSMPRqX_sxLu0oEsVwgo590o-gtTY-57EJokLEA8vP0/edit"}
    ></LinkButton>
  
  <br></br>


    <p>
    Contact us at <a href="mailto:soasliberatedzone@gmail.com">soasliberatedzone@gmail.com</a>
    </p>

</div>;

const GetInvolved = props => {
    return (
      <div>
        <h1>
          Get Involved
        </h1>
      <div class = "flex flex-grid grid-cols-2">
        <div class="">
          <figure>
            <img class="h-auto max-w-full rounded-lg object-fill " src="https://c1.staticflickr.com/9/8348/8243750175_61fb8a7779_z.jpg" alt="Intifada to Victory" />
            <a href="/login"><figcaption class="px-5 py-3 text-center text-lg text-white font-semibold underline ">!انتفاضة شامیے</figcaption></a>
          </figure>
        </div>
        <div class = "flex-1">
          {GetInvolvedLinks}
        </div>
      </div>
    </div>
    );
};

export default GetInvolved;