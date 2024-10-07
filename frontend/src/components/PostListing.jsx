import React, { Component, useContext } from "react";
import timeAgo from "./timeAgo";
import ReactMarkdown from 'react-markdown'
import Checkbox from "./PostCheckbox";
import AuthContext from "../context/AuthContext";

class PostList extends Component {
    static contextType = AuthContext

    componentDidMount() {
        const user = this.context
        // console.log(user)
      }

    render() {

        const posts = this.props.posts.filter(post => {
            return post.is_approved === true || this.context.user
            });

        return (

        <div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">

                {!posts || posts.length <= 0 ? (
                    <b>Ops, no posts yet</b>
            ) : (
                posts.map(post => ( 
                         
                <div key={post.pk}>
                    <a class="py-3" href={"/journal/"+post.pk} >
                        <button class="container mx-auto px-4 space-y-4" 
                        >
                            <div class="">
                                <div class="bg-white p-4 rounded-lg shadow text-left">
                                    <div class="flex items-center mb-2">
                                    <div>
                                        <p class="font-semibold">{post.author} • {timeAgo(post.created_on)}</p>
                                    </div>
                                    <span class="w-10"></span>
                                    <span class="w-10"></span>
                                    <span class="w-10"></span>

                                    <div class='justify-end'>
                                        {this.context.user && 
                                            <Checkbox
                                                pk={post.pk}
                                                title={post.title}
                                                body={post.body}
                                                author={post.author}
                                                is_approved={post.is_approved}    
                                            />
                                        }
                                    </div>
                                    </div>
                                    <p class="text-gray-700 text-lg italic text-center">{post.title}</p>
                                    <p class="line-clamp-3 text-gray-700 h2">
                                        <div>{post.body}</div>
                                    </p>
                                </div>
                            </div>
                        </button>
                    </a>
                </div>

                ))
            )}

            </div>
        </div>
        );
    }
}

export default PostList;