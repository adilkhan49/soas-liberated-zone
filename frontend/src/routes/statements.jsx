import { Component } from "react";
import { STATEMENTS_API_URL } from "../constants";
import StatementList from "../components/StatementListing";
import LinkButton from "../components/linkbutton";
import axios from "axios";
import AuthContext from "../context/AuthContext";

class Statements extends Component {
  static contextType = AuthContext;

  state = {
    statements: []
  };

  componentDidMount() {
    this.resetState();
    const user = this.context;
  }

  getStatements = () => {
    axios.get(STATEMENTS_API_URL).then(res => this.setState({ statements: res.data }));
  };

  resetState = () => {
    this.getStatements();
  };

  render() {
    return (
      <div class='h-screen'>
        <section>
          { this.context.user &&
            <LinkButton 
              linkText={"Add Statement"} 
              linkUrl={"/statements/create"}
              target = ""
            ></LinkButton>
          }
        </section>
        <StatementList
          statements={this.state.statements}
          resetState={this.resetState}
        ></StatementList>

      </div>
    );
  }
}

export default Statements;