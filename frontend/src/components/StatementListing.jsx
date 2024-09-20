import React, { Component } from "react";

class StatementList extends Component {

    render() {
        const statements = this.props.statements;
        return (

        <div>
            <div class="grid grid-cols-1 gap-5">

                {!statements || statements.length <= 0 ? (
                    <b>Ops, no statements yet</b>
            ) : (
                statements.map(statement => ( 

              
                    <form class="py-3" action={"/statements/"+statement.pk} method="get" >
                    <button class="container mx-auto px-4 space-y-4" 
                    >
                        <div class="">
                            <div class="bg-white p-4 rounded-lg shadow text-left">
                                <div class="flex items-center mb-2">
                                <div>
                                    <p class="font-semibold">{statement.release_date}</p>
                                </div>
                                
                                </div>
                                <p class="text-gray-700 text-lg bold">{statement.title}</p>
                                <p class="line-clamp-3 text-gray-700 h2">
                                </p>
                            </div>
                        </div>
                    </button>
                </form>

                ))
            )}

            </div>
        </div>
        );
    }
}

export default StatementList;