import React, { Component } from "react";

class StatementList extends Component {

    render() {
        const statements = this.props.statements;
        return (

        <div class='px-2 sm:px-36 py-5'>
            <div class="grid grid-cols-1 gap-1 ">

                {!statements || statements.length <= 0 ? (
                    <b>Oops, no statements yet</b>
            ) : (
                statements.map(statement => ( 

              
                    <form class="py-3" action={"/statements/"+statement.pk} method="get" >
                        <button class="container mx-auto p-4 bg-amber-50 hover:bg-white border-1 border-black hover:border-green-800 rounded-lg shadow text-left">
                            <div class="">
                                <div class="flex pb-0">
                                    <div>
                                        <div class="font-semibold">{statement.release_date}</div>
                                    </div>
                                </div>
                                <div class="text-gray-700 text-lg bold line-clamp-2">{statement.title}</div>
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