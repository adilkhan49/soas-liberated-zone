import React, {useState, Component, useContext} from 'react';
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
import { STATEMENTS_API_URL } from "../constants";
import AuthContext from '../context/AuthContext';

function Editor(props) {


    const [markdown, setMarkdown] = useState('');
    const [title, setTitle] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    let {authTokens}  = useContext(AuthContext)
    
    const handleSave = async () => {
        event.preventDefault(); // Prevent form default submission

        try {
          const response = await fetch(STATEMENTS_API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + authTokens.access,
            },
            body: JSON.stringify({
              title: title,
              body: markdown,
              release_date: releaseDate,
              video_url: videoUrl,
            }),
          });
    
          if (response.ok) {
            alert("Saved Successfully")
            window.location = '/statements';
          } else {
            alert('Failed to save statement.');
          }
        } catch (error) {
          console.error('Error saving statement:', error);
          alert('An error occurred while saving.');
        }
      };

    return <div class="m-4 pb-20">

        <form class='bg-amber-50'>
            <div>
            <label class="block">Title</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title'
                required
            />
            </div>
            <div>
            <label class="block">Release Date</label>
            <input
                type="date"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
                required
            />
            </div>
            <div>
            <label class="block">Video URL</label>
            <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder='Youtube URL'
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
                <InsertImage />
                <ListsToggle />
                </>
            )})]} />
        </div>



      <button 
        class="bg-black hover:bg-gray-700 text-white font-bold my-4 py-2 px-4 rounded"
        onClick={handleSave}>Save 
      </button> 
    </div>
    
}


export default Editor

