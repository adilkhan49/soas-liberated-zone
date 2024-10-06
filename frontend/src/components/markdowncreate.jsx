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
} from '@mdxeditor/editor'

import axios from "axios";
import { API_URL } from "../constants";


function Editor(props) {


    const [markdown, setMarkdown] = useState('Reflections, Meditations and Revolutionary Ideas');
    const [title, setTitle] = useState('Journal Entry');
    const [username, setUsername] = useState('Anonymous');

    
    const handleSave = async () => {
        event.preventDefault(); // Prevent form default submission

        try {
          const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: title,
              author: username,
              body: markdown,
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

        <form>
            <button 
              class="bg-black hover:bg-gray-700 text-white font-bold my-4 py-2 px-4 rounded"
              onClick={handleSave}
              >Save 
            </button> 
            <div>
            <label class="block">Title</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            </div>
            <div>
            <label class="block">Username</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            toolbarPlugin({         
                toolbarContents: () => (
                <>
                {' '}
                <BoldItalicUnderlineToggles />
                <BlockTypeSelect />
                <CreateLink />
                <UndoRedo />
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

