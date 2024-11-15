import { Component } from "react";
import { STATEMENTS_API_URL } from "../constants";
import axios from "axios";
import Markdown from 'markdown-to-jsx'
import AuthContext from "../context/AuthContext";

class StatementDetail extends Component {

    static contextType = AuthContext;

    state = {
        statement: {}
      };

    getStatement = () => {
        axios.get(STATEMENTS_API_URL + this.props.id).then(res => this.setState({ statement: res.data }));
      };

    componentDidMount() {
        this.resetState();
        const user = this.context;
    }

    resetState = () => {
        this.getStatement();
      };

    onDeleteClick = () => {
        axios.delete(
            STATEMENTS_API_URL + this.props.id,
            {
                headers: {
                  Authorization: 'Bearer ' + this.context.authTokens.access,
                }
               }
        );
        window.location = '/statements/';
    }

    onEditClick = () => {
        window.location = '/statements/' + this.props.id + '/edit';
    }
    render() {

        return (
        <div class="bg-amber-50">
            { this.context.user &&
                <div class="flex flex-row gap-5 justify-end">

                        <div class="py-3 text-right" >
                            <button 
                                class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
                                onClick={() => this.onEditClick()}
                                >Edit
                            </button>
                        </div>

                        <div class="py-3 text-right" >
                            <button 
                                class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full"
                                onClick={() => this.onDeleteClick()}
                                >Delete
                            </button>
                        </div>
                </div>
            }
            <h1 class="text-6xl font-anton m-14 text-left">
                {this.state.statement.title}
            </h1>

            <p class="text-3xl sm:mx-48 text-bold">
                {this.state.statement.release_date}
            </p>

            <div class="text-3xl sm:mx-48 ">
                <Markdown class="">{this.state.statement.body}</Markdown>
            </div>

        </div>
    )}
    
}

export default StatementDetail;

