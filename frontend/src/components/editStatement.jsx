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
    linkPlugin,
    linkDialogPlugin,
    imagePlugin,
} from '@mdxeditor/editor';

import { 
    UndoRedo, 
    BoldItalicUnderlineToggles,
    BlockTypeSelect,
    CreateLink,
    InsertImage,
    ListsToggle,
} from '@mdxeditor/editor';

import { STATEMENTS_API_URL } from "../constants";

class Editor extends Component {

    static contextType = AuthContext

    constructor(props) {
        super(props);
        this.state = {
            markdown: '',
            title: '',
            release_date: '',
            video_url: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    // Fetch initial data when the component mounts using the postId
    async componentDidMount() {

        try {
            const response = await fetch(STATEMENTS_API_URL + this.props.id); // Use postId in API request
            const data = await response.json();

            // Assuming the API response contains the initial title and markdown
            this.setState({
                title: data.title,
                release_date: data.release_date,
                markdown: data.body,
                video_url: data.video_url,
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

        const { title, release_date, markdown } = this.state;
        // const { postId: statement_id } = this.props; // Access postId from props
        try {
            const response = await fetch(STATEMENTS_API_URL+this.props.id, { // Use postId in the request
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.context.authTokens.access,
                },
                body: JSON.stringify({
                    id: this.props.id,
                    title: this.state.title,
                    release_date: this.state.release_date,
                    body: this.state.markdown,
                    video_url: this.state.video_url,
                }),
            });

            if (response.ok) {
                alert('Saved Successfully');
                window.location = '/statements/'+this.props.id;
            } else {
                alert('Failed to edit statement.');
            }
        } catch (error) {
            console.error('Error saving statement:', error);
            alert('An error occurred while saving.');
        }
    }

    render() {
      const { title, release_date, markdown, video_url } = this.state;
  
      return (
          <div className="m-4 pb-20">
              <form onSubmit={this.handleSave}>
                  <button 
                    className="bg-black hover:bg-gray-700 text-white font-bold my-4 py-2 px-4 rounded"
                    onClick={this.handleSave}>
                    Save
                  </button>
                  <div>
                      <label className="block">Title</label>
                      <input
                          type="text"
                          name="title"
                          value={title}
                          onChange={this.handleChange}
                          required
                      />
                  </div>

                  <div>
                      <label className="block">Release Date</label>
                      <input
                          type="date"
                          name="release_date"
                          value={release_date}
                          onChange={this.handleChange}
                          required
                      />
                  </div>

                  <div>
                      <label className="block">Video URL</label>
                      <input
                          type="text"
                          name="video_url"
                          value={video_url}
                          onChange={this.handleChange}
                      />
                  </div>

              </form>
              <div className="bg-white container my-4">
                  {markdown ? ( // Render MDXEditor only when markdown is available
                      <MDXEditor
                          markdown={markdown}
                          onChange={(newMarkdown) => this.setState({ markdown: newMarkdown })}
                          plugins={[
                              headingsPlugin(),
                              listsPlugin(),
                              quotePlugin(),
                              thematicBreakPlugin(),
                              linkPlugin(),
                              linkDialogPlugin(),
                              listsPlugin(),
                              imagePlugin(),
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
