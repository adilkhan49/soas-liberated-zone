import { Component } from "react";
import { STATEMENTS_API_URL } from "../constants";
import StatementList from "../components/StatementListing";
import LinkButton from "../components/linkbutton";
import axios from "axios";

class Statements extends Component {
  state = {
    statements: []
  };

  componentDidMount() {
    this.resetState();
  }

  getStatements = () => {
    axios.get(STATEMENTS_API_URL).then(res => this.setState({ statements: res.data }));
  };

  resetState = () => {
    this.getStatements();
  };

  render() {
    return (
      <div>
        <h1>
          Statements
        </h1>
        <section>
          <LinkButton 
            linkText={"Add Statement"} 
            linkUrl={"statements/create"}
            target = ""
          ></LinkButton>

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