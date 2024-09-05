import React, { Component } from "react";

// import NewStudentModal from "./NewStudentModal";

// import ConfirmRemovalModal from "./ConfirmRemovalModal";
import ReactMarkdown from 'react-markdown'

function timeAgo(input) {
    const date = (input instanceof Date) ? input : new Date(input);
    const formatter = new Intl.RelativeTimeFormat('en');
    const ranges = {
      years: 3600 * 24 * 365,
      months: 3600 * 24 * 30,
      weeks: 3600 * 24 * 7,
      days: 3600 * 24,
      hours: 3600,
      minutes: 60,
      seconds: 1
    };
    const secondsElapsed = (date.getTime() - Date.now()) / 1000;
    for (let key in ranges) {
      if (ranges[key] < Math.abs(secondsElapsed)) {
        const delta = secondsElapsed / ranges[key];
        return formatter.format(Math.round(delta), key);
      }
    }
  }

class PostList extends Component {
  render() {
    const posts = this.props.posts;
    return (

    <div>
        <div>
            {!posts || posts.length <= 0 ? (
                <b>Ops, no posts yet</b>
          ) : (
            posts.map(post => ( 


<div class="py-8">
  <div class="container mx-auto px-4">
    <div class="space-y-4">
      <div class="bg-white p-4 rounded-lg shadow">
        <div class="flex items-center mb-2">
          <div>
            <p class="font-semibold">{post.author} • {timeAgo(post.created_on)}</p>
          </div>
          
        </div>
        <p class="text-gray-700 text-lg italic">{post.title}</p>
        <div class="line-clamp-5 text-gray-700 text-lg">
            <ReactMarkdown class=" ">{post.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  </div>
</div>
                
                // <div class="p-30">
                //     <div class="text-sm">
                //         {post.author} • {timeAgo(post.created_on)}
                //     </div>
                //     <div class="text-xl">
                //         {post.title}
                //     </div>
                //     <div>
                //         {post.body}
                //     </div>
                // </div>

            ))
          )}
        </div>



</div>
    );
  }
}

export default PostList;