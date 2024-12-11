import React, {useState, useContext} from 'react';
import AuthContext from '../context/AuthContext';



import '@mdxeditor/editor/style.css'
import {
    MDXEditor, 
    headingsPlugin, 
    listsPlugin, 
    quotePlugin, 
    thematicBreakPlugin, 
    toolbarPlugin,
    linkPlugin,
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
import { CALLS_TO_ACTION_API_URL } from "../constants";


function Editor(props) {


    const [title, setTitle] = useState('');
    const [release_date, setRealeseDate] = useState(null);
    const [is_link, setIsLink] = useState(true);
    const [link, setLink] = useState('');

    let {authTokens}  = useContext(AuthContext)

    const handleSave = async () => {
        event.preventDefault(); // Prevent form default submission
          try {
            const response = await fetch(CALLS_TO_ACTION_API_URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authTokens.access,
              },
              body: JSON.stringify({
                title: title,
                link: link,
                is_link: is_link,
                release_date: release_date,
              }),
            });
      
            if (response.ok) {
              alert("Successully created!")
              window.location = '/getinvolved';
            } else {
              alert('Failed to save markdown.');
            }
          } catch (error) {
            console.error('Error saving markdown:', error);
            alert('An error occurred while saving.');
          }
        }
      ;

    return (
      <div class="font-kanit min-w-full">
            {/* <div class="bg-black bg-opacity-85 mb-10 text-amber-50 py-4 sm:py-10 text-md sm:text-lg md:text-xl text-center ">
              Create a call to action
            </div> */}
            <div class = "mx-4">
              <form class = "bg-amber-50">

                <div class="flex flex-row gap gap-10 my-2  ">
                  <label class="w-36">Title</label>
                  <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder='Call to Action'
                      required
                  />
                </div>

                
 

                {is_link &&
                  <div class="flex flex-row gap gap-10 my-2">
                    <label class="w-36">Link</label>
                    <input
                        type="text"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        placeholder='External URL'
                        required
                    />
                  </div>
                }

                <div class="flex flex-row gap gap-10 my-2  ">
                  <label class="w-36">Release Date</label>
                  <input
                      type="date"
                      value={release_date}
                      onChange={(e) => setRealeseDate(e.target.value)}
                      required
                  />
                </div>

            </form>

            {/* <div class="bg-white container my-4 min-h-48">
              <MDXEditor 
                markdown={markdown}
                onChange={(newMarkdown) => setMarkdown(newMarkdown)}
                plugins={[
                    headingsPlugin(), 
                    listsPlugin(), 
                    quotePlugin(), 
                    thematicBreakPlugin(), 
                    linkPlugin(),
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
            </div> */}
            


  
            <button 
                class="bg-black hover:bg-gray-700 text-white font-bold my-4 py-2 px-4 rounded"
                onClick={handleSave}
              >Save 
            </button> 
          </div>
        </div>
  )
    
}


export default Editor

