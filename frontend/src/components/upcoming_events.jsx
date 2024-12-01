


function formatDate(date_string,options={ year: 'numeric', month: 'long', day: 'numeric' }) {
    const date = new Date(date_string);
    return date.toLocaleString('en-GB', options)
    }

function formatTime(time_string,options={ hour: 'numeric', minute: 'numeric' }) {
    // return time_string
    // var hms = "01:12:33";
    var date = new Date("1970-01-01T" + time_string);
    return date.toLocaleTimeString('en-GB', options)
    }
    

function UpcomingEvents({events}) {

    return (
    

        <div class="container w-4/5 m-4 flex flex-col items-center px-8 mx-auto sm:px-0 justify-start" >
                <ul class="flex flex-col space-y-4 ">

                    {events.map(e => (
                        
                        <li class="list-none p-4 bg-amber-50 border-2 border-red-800 rounded-lg shadow-lg">
                            <div class="flex items-center flex-1 mb-4 select-none sm:mb-0">
                                <div class="bg-red-800 rounded-xl p-4 text-center mr-4">
                                    <div class="text-xs font-medium">{formatDate(e.start_date,{day: 'numeric', month:'short'}).toLocaleUpperCase()}
                                    </div>
                                    <div class={e.start_time ? "text-2xl font-semibold" : "hidden"}>{formatTime(e.start_time)}</div>
                                </div>
                                <div class="flex-1">
                                    <div class="mb-2 font-semibold">{e.title}</div>
                                    <div class="text-sm">{e.description}</div>
                                </div>
                            </div>
                        </li>

                    ))
                    
                    }



                </ul>
            </div>
        );
}

export default UpcomingEvents