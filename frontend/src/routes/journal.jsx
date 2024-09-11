import React, { Component } from "react";
import { API_URL } from "../constants";
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
    axios.get(API_URL).then(res => this.setState({ posts: res.data }));
  };

  resetState = () => {
    this.getPosts();
  };

  render() {
    return (
      <div>
        <h1>
          SLZ Journal
        </h1>
        <section>
          <LinkButton 
            linkText={"Contribute"} 
            linkUrl={"journal/create"}
            target = ""
          ></LinkButton>

        </section>
        <PostList
          posts={this.state.posts}
          resetState={this.resetState}
        ></PostList>

      </div>
    );
  }
}

export default Journal;