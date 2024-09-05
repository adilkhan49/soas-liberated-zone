function LinkButton({ linkUrl, linkText }) {
  return (
<div class="container py-2 px-10 mx-0 min-w-full flex flex-col items-center">
    <form action={linkUrl} method="get" target="_blank">
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
      {linkText}
            </button>
    </form>
  </div>
  );
}


const GetInvolved = props => {
    return (
      <div class='text-center'>
        <h1>
          Get Involved
        </h1>
        <p>
          Come down to the SLZ, come talk to us, there are many ways to get involved on the ground 
        </p>
        <br></br>
        <p>Join these group chats</p>

        <LinkButton 
          linkText={"Link missing"} 
          linkUrl={"bar"}
        ></LinkButton>
        <br></br>

        <p>Write a submission for our journal </p>

        <LinkButton 
          linkText={"SLZ Journal"} 
          linkUrl={"/journal"}
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
  
      </div>

    );
};

export default GetInvolved;