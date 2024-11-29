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

const postcomment = (
  <section class="py-8">
    <div class="container mx-auto px-4">
  
      <form class="mt-8 bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-2">Add a Comment</h3>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
          <input type="text" id="name" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></input>
        </div>
        <div class="mb-4">
          <label for="comment" class="block text-gray-700 font-medium mb-2">Comment</label>
          <textarea id="comment" name="comment" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Post Comment
        </button>
      </form>
    </div>
  </section>
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

        <div class='flex justify-center h-[50vh] object-scale-down min-w-full '>
          <img
              class = "w-full  h-full"
              src={"https://images2.imgbox.com/47/e4/ZiP6HmHN_o.jpg"}
          />
        </div>

        <div class='container bg-amber-50  min-w-full text-bold p-10 text-3xl mb-5'>
          <div class="sm:w-3/5">
            <p class='font-bold sm:text-4xl'>
              We invite anyone and everyone from the SLZ community and the growing global solidarity movement for Palestine to write for the SLZ journal or to share existing writings.
            </p>
            <p class="sm:text-3xl">
              The Palestinian people have long shown the strength of resistance through writing and culture. Our true enduring power is rooted in the collective knowledge and spirit that we amplify between us; that is why we seek true forms of education beyond the university, for the community by the community
            </p>
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