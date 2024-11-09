import React, {useState, Component} from 'react';
import '@mdxeditor/editor/style.css'
import {
    MDXEditor, 
    headingsPlugin, 
    listsPlugin, 
    quotePlugin, 
    thematicBreakPlugin, 
    toolbarPlugin,
    linkDialogPlugin,
    imagePlugin,
} from '@mdxeditor/editor'

import { 
    UndoRedo, 
    BoldItalicUnderlineToggles,
    BlockTypeSelect,
    CreateLink,
    InsertImage,
    ListsToggle,
} from '@mdxeditor/editor'

import axios from "axios";
import { POSTS_API_URL } from "../constants";


function Editor(props) {


    const [markdown, setMarkdown] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [release_date, setRealeseDate] = useState(null);
    const [is_anonymous, setIsAnonymous] = useState(false);
    const [cover_picture_url, setCoverPictureURL] = useState('');

    
    const handleSave = async () => {
        event.preventDefault(); // Prevent form default submission

        try {
          const response = await fetch(POSTS_API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: title,
              author: author,
              body: markdown,
              is_anonymous: is_anonymous,
              release_date: release_date,
              cover_picture_url: cover_picture_url
            }),
          });
    
          if (response.ok) {
            alert("Successully created! Your contribution will be published once approved")
            window.location = '/journal';
          } else {
            alert('Failed to save markdown.');
          }
        } catch (error) {
          console.error('Error saving markdown:', error);
          alert('An error occurred while saving.');
        }
      };

    return <div class="m-4 pb-20">
        <form class = "bg-amber-50">
            <div>
            <label class="block">Title</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title of post'
                required
            />
            </div>
            {!is_anonymous &&
              <div>
              <label class="block">Author</label>
              <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder='Enter your name'
                  required
              />
              </div>
            }
            <div>
            <div>
            <label class="block">Post Anonymously</label>
            <input
                type="checkbox"
                value={is_anonymous}
                onChange={(e) => setIsAnonymous(!is_anonymous)}
                required
            />
            </div>

            <label class="block">Release Date</label>
            <input
                type="date"
                value={release_date}
                onChange={(e) => setRealeseDate(e.target.value)}
                required
            />

            <label class="block">Cover Picture</label>
            <input
                type="text"
                value={release_date}
                onChange={(e) => setRealeseDate(e.target.value)}
                placeholder='Enter URL of Cover Picture'
                required
            />

            </div>
        </form>
        <div class="bg-white container my-4 ">
        <MDXEditor 
        markdown={markdown}
        onChange={(newMarkdown) => setMarkdown(newMarkdown)}
        plugins={[
            headingsPlugin(), 
            listsPlugin(), 
            quotePlugin(), 
            thematicBreakPlugin(), 
            linkDialogPlugin(),
            imagePlugin(),
            listsPlugin(),
            toolbarPlugin({         
                toolbarContents: () => (
                <>
                {' '}
                <BoldItalicUnderlineToggles />
                <BlockTypeSelect />
                <CreateLink />
                <UndoRedo />
                <ListsToggle />
                <InsertImage />
                </>
            )})]} />
        </div>



    <button 
        class="bg-black hover:bg-gray-700 text-white font-bold my-4 py-2 px-4 rounded"
        onClick={handleSave}
                    >Save </button> 
    </div>
    
}


export default Editor

