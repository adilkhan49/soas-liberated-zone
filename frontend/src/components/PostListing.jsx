import React, { Component } from "react";
import timeAgo from "./timeAgo";
import ReactMarkdown from 'react-markdown'


class PostList extends Component {

    render() {
        const posts = this.props.posts;
        return (

        <div>
            <div class="grid grid-cols-3 gap-5">

                {!posts || posts.length <= 0 ? (
                    <b>Ops, no posts yet</b>
            ) : (
                posts.map(post => ( 

                <form class="py-3" action={"/journal/"+post.pk} method="get" >
                    <button class="container mx-auto px-4 space-y-4" 
                    >
                        <div class="">
                            <div class="bg-white p-4 rounded-lg shadow text-left">
                                <div class="flex items-center mb-2">
                                <div>
                                    <p> <span class="font-semibold">{post.author} </span> <span class="text-smtext-gray-400">• {timeAgo(post.created_on)}</span></p>
                                </div>
                                
                                </div>
                                <p class="text-gray-700 text-lg italic text-center">{post.title}</p>
                                <p class="line-clamp-3 text-gray-700 h2">
                                    <div>{post.body}</div>
                                </p>
                            </div>
                        </div>
                    </button>
                </form>

                ))
            )}

            </div>
        </div>
        );
    }
}

export default PostList;