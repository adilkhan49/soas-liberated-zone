import { Component } from "react";
import { POSTS_API_URL } from "../constants";
import axios from "axios";
import Markdown from 'markdown-to-jsx'
import AuthContext from "../context/AuthContext";

class PostDetail extends Component {

    static contextType = AuthContext;

    state = {
        post: {}
      };

    getPost = () => {
        axios.get(POSTS_API_URL + this.props.id).then(res => this.setState({ post: res.data }));
      };

    componentDidMount() {
        this.resetState();
        const user = this.context;
    }

    resetState = () => {
        this.getPost();
      };

    onDeleteClick = () => {
        axios.delete(POSTS_API_URL + this.props.id);
        window.location = '/journal/';
    }

    onEditClick = () => {
        window.location = '/journal/' + this.props.id + '/edit';
    }
    render() {

        return (
        <div>
            { this.context.user &&
                <div class="flex flex-row gap-5 justify-end">

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
            }
            <h1>
                {this.state.post.title}
            </h1>

            <div>
                <Markdown class=" ">{this.state.post.body}</Markdown>
            </div>

        </div>
    )}
    
}

export default PostDetail;

