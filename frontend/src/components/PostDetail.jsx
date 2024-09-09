import { Component } from "react";
import { API_URL } from "../constants";
import axios from "axios";
import ReactMarkdown from 'react-markdown'

class PostDetail extends Component {
    state = {
        post: {}
      };

    getPost = () => {
        axios.get(API_URL + this.props.id).then(res => this.setState({ post: res.data }));
      };

    componentDidMount() {
        this.resetState();
    }

    resetState = () => {
        this.getPost();
      };

    onDeleteClick = () => {
        axios.delete(API_URL + this.props.id);
        window.location = '/journal/';
    }

    onEditClick = () => {
        window.location = '/journal/' + this.props.id + '/edit';
    }
    render() {

        return (
        <div>
            <div class="container flex-row">
                <div class = "">
                    
 
                    <div class="py-3 text-right" >
                        <button 
                            class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
                            onClick={() => this.onEditClick()}
                            >Edit
                        </button>
                    </div>


                    <div class="py-3 text-right" >
                        <button 
                            class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full"
                            onClick={() => this.onDeleteClick()}
                            >Delete
                        </button>
                    </div>
                </div>
            </div>
            <h1>
                {this.state.post.title}
            </h1>

            <div>
                <ReactMarkdown class=" ">{this.state.post.body}</ReactMarkdown>
            </div>

        </div>
    )}
    
}

export default PostDetail;

