import React, { Component } from "react";
import { API_URL } from "../constants";
import PostList from "../components/PostListing";
import axios from 'axios';
import LinkButton from "../components/linkbutton";


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
          <div class="relative h-20">
            <div class="absolute right-10">
              <LinkButton 
                linkText={"Contribute"} 
                linkUrl={"/journal/create"}
                target = ""
              ></LinkButton>
            </div>
          </div>
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