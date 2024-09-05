import React from "react";
import axios from "axios";

import { API_URL } from "../constants";

class NewPostForm extends React.Component {
  state = {
    pk: 0,
    title: "",
    boduy: "",
    author: "",
  };

  componentDidMount() {
    if (this.props.post) {
      const { pk, title, body, author} = this.props.post;
      this.setState({ pk, title, body, author});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createPost = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editPost = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (

<form>
    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="title">
       Title
      </label>
</form>
    );
  }
}

export default NewPostForm;