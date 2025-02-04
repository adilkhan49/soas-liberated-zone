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
        axios.delete(
            POSTS_API_URL + this.props.id,
            {
                headers: {
                  Authorization: 'Bearer ' + this.context.authTokens.access,
                }
               }
        );
        window.location = '/journal/';
    }

    onEditClick = () => {
        window.location = '/journal/' + this.props.id + '/edit';
    }
    render() {

        return (
        <div class="min-w-screen bg-amber-50">
            
            { (this.context.user && !this.state.post.cover_picture_url) &&
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
        
            { this.state.post.cover_picture_url &&
            <div class='flex justify-center h-[60vh] min-w-full '>
                <img
                    class = " w-full  h-full object-cover "
                    src={this.state.post.cover_picture_url}
                />
                
                { this.context.user &&
                    <div class="absolute flex flex-row gap-5 right-5">

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

            </div>
            }


        
            <div class="mx-5 sm:mx-10 ">

                <div class="my-10">

                    <h1 class="font-anton m-5 text-left ">
                        {this.state.post.title}
                    </h1>

                    {!this.state.post.is_anonymous &&
                        <div class="font-anton m-5 text-left italic text-lg">
                            By {this.state.post.author}
                        </div>
                
                      }
                 </div>

                <div class="text-3xl sm:mx-48 ">
                    <Markdown>{this.state.post.body}</Markdown>
                </div>
            
            </div>
        </div>
    )}
    
}

export default PostDetail;

