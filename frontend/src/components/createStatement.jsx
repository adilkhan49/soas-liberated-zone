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
} from '@mdxeditor/editor'

import axios from "axios";
import { STATEMENTS_API_URL } from "../constants";
import AuthContext from '../context/AuthContext';

function Editor(props) {


    const [markdown, setMarkdown] = useState('Statement Content');
    const [title, setTitle] = useState('Statement Title');
    const [releaseDate, setReleaseDate] = useState('');
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
              release_date: releaseDate
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

        <form>
            <button 
              class="bg-black hover:bg-gray-700 text-white font-bold my-4 py-2 px-4 rounded"
              onClick={handleSave}>Save 
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
            <label class="block">Release Date</label>
            <input
                type="date"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
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
            toolbarPlugin({         
                toolbarContents: () => (
                <>
                {' '}
                <BoldItalicUnderlineToggles />
                <BlockTypeSelect />
                <CreateLink />
                <UndoRedo />
                <InsertImage />
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

