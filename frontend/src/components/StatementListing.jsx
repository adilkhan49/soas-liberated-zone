import React, { Component } from "react";

class StatementList extends Component {

    render() {
        const statements = this.props.statements;
        return (

        <div>
            <div class="grid grid-cols-3 gap-5">

                {!statements || statements.length <= 0 ? (
                    <b>Ops, no statements yet</b>
            ) : (
                statements.map(statement => ( 

                

                <div>
                    <div>
                        {statement.release_date}
                    </div>
                    <div>
                        {statement.title}
                    </div>
                    <div>
                        {statement.body}
                    </div>
                </div>

                ))
            )}

            </div>
        </div>
        );
    }
}

export default StatementList;