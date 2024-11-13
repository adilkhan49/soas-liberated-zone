import React, { Component } from 'react';
import AuthContext from '../context/AuthContext';

import '@mdxeditor/editor/style.css';
import {
    MDXEditor,
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    toolbarPlugin,
    linkDialogPlugin,
    imagePlugin,
} from '@mdxeditor/editor';

import { 
    UndoRedo, 
    BoldItalicUnderlineToggles,
    BlockTypeSelect,
    CreateLink,
    InsertImage,
    ListsToggle
} from '@mdxeditor/editor';

import { POSTS_API_URL } from "../constants";

class Editor extends Component {

    static contextType = AuthContext

    constructor(props) {
        super(props);
        this.state = {
            markdown: '',
            title: '',
            release_date: '',
            cover_picture_url: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    // Fetch initial data when the component mounts using the postId
    async componentDidMount() {

        try {
            const response = await fetch(POSTS_API_URL + this.props.id); // Use postId in API request
            const data = await response.json();

            // Assuming the API response contains the initial title and markdown
            this.setState({
                title: data.title,
                author: data.author,
                markdown: data.body,
                release_date: data.release_date,
                cover_picture_url: data.cover_picture_url

            });
        } catch (error) {
            console.error('Error fetching initial data:', error);
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    async handleSave(event) {
        event.preventDefault();

        const { title, author, markdown, release_date, cover_picture_url } = this.state;
        const { postId } = this.props; // Access postId from props

        try {
            const response = await fetch(POSTS_API_URL+this.props.id, { // Use postId in the request
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.context.authTokens.access,

                },
                body: JSON.stringify({
                    id: this.props.id,
                    title: title,
                    author: author,
                    body: markdown,
                    release_date: release_date,
                    cover_picture_url: cover_picture_url,
                }),
            });

            if (response.ok) {
                alert('Saved Successfully');
                window.location = '/journal/'+this.props.id;
            } else {
                alert('Failed to save markdown.');
            }
        } catch (error) {
            console.error('Error saving markdown:', error);
            alert('An error occurred while saving.');
        }
    }

    render() {
      const { title, author, markdown, release_date, cover_picture_url } = this.state;
  
      return (
          <div className="m-4 pb-20">
              <form class="bg-amber-50" onSubmit={this.handleSave}>
                 <div class="flex flex-row gap gap-10 my-2">
                    <label className="w-36">Title</label>
                      <input
                          type="text"
                          name="title"
                          value={title}
                          onChange={this.handleChange}
                          required
                      />
                  </div>

                  <div class="flex flex-row gap gap-10 my-2">
                     <label className="w-36">Release Date</label>
                      <input
                          type="date"
                          name="release_date"
                          value={release_date}
                          onChange={this.handleChange}
                      />
                  </div>

                  <div class="flex flex-row gap gap-10 my-2">
                      <label className="w-36">Cover Picture URL</label>
                      <input
                          type="text"
                          name="cover_picture_url"
                          value={cover_picture_url}
                          onChange={this.handleChange}
                      />
                  </div>

              </form>
              <div className="bg-white container my-4 min-h-48">
                  {markdown ? ( // Render MDXEditor only when markdown is available
                      <MDXEditor
                          markdown={markdown}
                          onChange={(newMarkdown) => this.setState({ markdown: newMarkdown })}
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
                                          <BoldItalicUnderlineToggles />
                                          <BlockTypeSelect />
                                          <CreateLink />
                                          <UndoRedo />
                                          <ListsToggle />
                                          <InsertImage />
                                      </>
                                  ),
                              }),
                          ]}
                      />
                  ) : (
                      <p>Loading editor...</p>
                  )}
              </div>
              <button 
                  className="bg-black hover:bg-gray-700 text-white font-bold my-4 py-2 px-4 rounded"
                  onClick={this.handleSave}
              >
                  Save
              </button>
          </div>
      );
  }
  
}

export default Editor;
