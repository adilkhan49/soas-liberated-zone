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

        <div class = 'pb-10 px-12'>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-1 items-stretch">

                {!posts || posts.length <= 0 ? (
                    <b>Oops, no posts yet</b>
            ) : (
                posts.map(post => ( 
                         
                <div
                    class = 'h-88'
                    key={post.pk}>
                    <a class="py-3" href={post.is_pdf ? post.body : "/journal/"+post.pk} target={post.is_pdf ? "_blank" : ""} >
                        <button class="container h-full mx-auto px-2 space-y-4 py-2" 
                        >
                            <div class="h-full">
                                <div class="bg-white p-4 h-full rounded-lg shadow text-left">
                                    
                                    {post.cover_picture_url ? 
                                    
                                        <img
                                            class = "object-cover object-center h-56 w-full"
                                            src={post.cover_picture_url}
                                        />
                                    :
                                        <img
                                        class = "object-cover h-56 w-full"
                                        src="https://i.postimg.cc/vTsH9NkQ/slz-cover.jpg"
                                        />

                                    }
                                    <div class="mb-2 hover:underline">

                                        <div class="text-gray-700 text-2xl font-bold line-clamp-2">{post.title}</div>
                                        
                                        {!post.is_anonymous &&
                                            <div class=" text-black line-clamp-1">
                                                {post.author}
                                            </div>
                                        }
                                        <div>{post.is_pdf}</div>

                                        <div class=''>
                                            {this.context.user && <Checkbox post={post} />}
                                        </div>

                                    </div>
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