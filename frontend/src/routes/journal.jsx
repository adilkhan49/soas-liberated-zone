import React, { Component } from "react";
import { POSTS_API_URL } from "../constants";
import PostList from "../components/PostListing";
import axios from 'axios';
import LinkButton from "../components/linkbutton";

const comment = (
<div class="py-8">
  <div class="container mx-auto px-4">
    <div class="space-y-4">
      <div class="bg-white p-4 rounded-lg shadow">
        <div class="flex items-center mb-2">
          <div>
            <h3 class="font-semibold">John Doe</h3>
            <p class="text-sm text-gray-500">Posted on March 15, 2024</p>
          </div>
        </div>
        <p class="text-gray-700">Great product! I've been using it for a week now and I'm very satisfied with its
          performance.</p>
      </div>
    </div>
  </div>
</div>
);


class Journal extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.resetState();
  }

  getPosts = () => {
    axios.get(POSTS_API_URL).then(res => this.setState({ posts: res.data }));
  };

  resetState = () => {
    this.getPosts();
  };

  render() {
    return (
      <div class=''>


        <div class='block sm:hidden flex justify-center h-[30vh] object-scale-down min-w-full '>
          <img
              class = "w-full  h-full"
              src={"https://images2.imgbox.com/cf/b7/iBo2qTKh_o.jpg"}
          />
        </div>

        <div class='hidden sm:block flex justify-center h-[60vh] object-scale-down min-w-full '>
          <img
              class = "w-full  h-full"
              src={"https://images2.imgbox.com/5c/be/jgWssuPa_o.jpg"}
          />
        </div>

        <div class='flex  flex-col  container bg-amber-50  min-w-full text-bold p-10 text-3xl mb-5'>
          <div class="flex flex-row w-full h-full ">

            <div class='md:w-4/5 '>
                <p class='font-bold sm:text-4xl'>
                The Palestinian people have long shown the strength of resistance through writing and culture. Our true enduring power is rooted in the collective knowledge and spirit that we amplify between us; that is why we seek true forms of education beyond the university, for the community by the community.
                </p>
                <p class="sm:text-3xl">
                  We invite anyone and everyone from the SLZ community and the growing global movement to contribute to the SLZ journal.
                </p>
            </div>

            <div class="hidden lg:block">
              <img
                class="object-cover"
                src="https://images2.imgbox.com/3e/e7/wsZw0VxE_o.png">
              </img>
            </div>
          </div>


          <LinkButton 
              linkText={"Contribute"} 
              linkUrl={"/journal/create"}
              target = ""
            ></LinkButton>

            <hr class="border-black border-2 border-dashed mt-4"/>

        </div>

        <PostList
          posts={this.state.posts}
          resetState={this.resetState}
        ></PostList>

      </div>
    );
  }
}

export default Journal;