


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
    

        <div class="container h-full flex flex-col items-center m-1 sm:m-2 lg:m-3 xl:m-4 mx-auto sm:px-0 " >
                <ul class="h-full m-2 sm:m-2 lg:m-3 xl:m-4 flex flex-col gap-y-4 justify-center">
                    {!events || events.length <= 0 ? 
                                        <div class="container font-bold md:text-xl lg:text-3xl xl:text-4xl  p-2 m-4 m-auto tracking-widest text-black border-green-800 bg-amber-50 rounded-full text-center align-middle p-4">
                                            No upcoming events
                                        </div>
                        :
                    events.map(e => (
                        
                        <li class="list-none p-4 bg-amber-50 border-4 border-red-800 rounded-lg shadow-lg">
                            <div class="flex items-center flex-1 mb-4 sm:mb-0">
                                <div class={e.start_time ? "bg-red-800 rounded-xl p-4 text-center mr-4" : "bg-red-800 rounded-xl p-4 py-6 text-center mr-4" }>
                                    <div class="text-xs font-medium">{formatDate(e.start_date,{day: 'numeric', month:'short'}).toLocaleUpperCase()}
                                    </div>
                                    <div class={e.start_time ? "text-2xl font-semibold" : "hidden"}>{formatTime(e.start_time)}</div>
                                </div>
                                <div class="flex flex-col flex-1">
                                    <div class="mb-2 font-semibold">{e.title}</div>
                                    <div class="text-sm">{e.description}</div>

                                    { e.location_text && 
                                        <div class="text-sm">{e.location_text}</div>
                                    }

                                    { (e.link_text && e.link_text ) && 
                                        <a href = {e.link_url} target = "_blank" class="text-sm">{e.link_text}</a>
                                    }



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