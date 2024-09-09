import React, { Component } from 'react';
import '@mdxeditor/editor/style.css';
import {
    MDXEditor,
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    toolbarPlugin,
    linkDialogPlugin,
} from '@mdxeditor/editor';

import { 
    UndoRedo, 
    BoldItalicUnderlineToggles,
    BlockTypeSelect,
    CreateLink,
} from '@mdxeditor/editor';

import { API_URL } from "../constants";

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: '',
            title: '',
            username: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    // Fetch initial data when the component mounts using the postId
    async componentDidMount() {

        try {
            const response = await fetch(API_URL + this.props.id); // Use postId in API request
            const data = await response.json();

            // Assuming the API response contains the initial title and markdown
            this.setState({
                title: data.title,
                username: data.author,
                markdown: data.body,
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

        const { title, username, markdown } = this.state;
        const { postId } = this.props; // Access postId from props

        try {
            const response = await fetch(API_URL+this.props.id, { // Use postId in the request
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: this.props.id,
                    title: title,
                    author: username,
                    body: markdown,
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
      const { title, username, markdown } = this.state;
  
      return (
          <div className="m-4 pb-20">
              <form onSubmit={this.handleSave}>
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
                              linkDialogPlugin(),
                              toolbarPlugin({
                                  toolbarContents: () => (
                                      <>
                                          <BoldItalicUnderlineToggles />
                                          <BlockTypeSelect />
                                          <CreateLink />
                                          <UndoRedo />
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
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded"
                  onClick={this.handleSave}
              >
                  Save
              </button>
          </div>
      );
  }
  
}

export default Editor;
