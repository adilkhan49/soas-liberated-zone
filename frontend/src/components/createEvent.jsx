import React, {useState, Component} from 'react';

import axios from "axios";
import { EVENTS_API_URL } from "../constants";


function Editor(props) {


    const [title, set_title] = useState(null);
    const [start_date, set_start_date] = useState(null);
    const [start_time, set_start_time] = useState(null);
    const [end_date, set_end_date] = useState(null);
    const [end_time, set_end_time] = useState(null);
    const [allDay, set_allDay] = useState(false);
    

    
    const handleSave = async () => {
        event.preventDefault(); // Prevent form default submission

        try {
          const response = await fetch(EVENTS_API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: title,
              start_date: start_date,
              start_time: start_time,
              end_time: end_time,
              allDay: allDay,
            }),
          });
    
          if (response.ok) {
            alert("Saved Successfully")
            window.location = '/calendar';
          } else {
            alert('Failed to save event.');
          }
        } catch (error) {
          console.error('Error saving statement:', error);
          alert('An error occurred while saving.');
        }
      };

    return <div class="m-4 pb-20">

        <form>
            <div>
              <label class="block">Title</label>
              <input
                  type="text"
                  value={title}
                  onChange={(e) => set_title(e.target.value)}
                  required
              />
            </div>
            <div>
              <label class="block">Date</label>
              <input
                  type="date"
                  value={start_date}
                  onChange={(e) => set_start_date(e.target.value)}
                  required
              />
            </div>
            <div>
              <label class="block">All Day?</label>
              <input
                  type="checkbox"
                  value={allDay}
                  onChange={(e) => set_allDay(!allDay)}
                  required
              />
            </div>
            {!allDay && (
              <div>
                <label class="block">Start Time</label>
                <input
                    type="time"
                    value={start_time}
                    onChange={(e) => set_start_time(e.target.value)}
                />
              </div>
            )}
            {!allDay && (
              <div>
                <label class="block">End Time</label>
                <input
                    type="time"
                    value={end_time}
                    onChange={(e) => set_end_time(e.target.value)}
                />
              </div>
            )
            }
        </form>


    <button 
        class="bg-black hover:bg-gray-700 text-white font-bold my-4 py-2 px-4 rounded"
        onClick={handleSave}
                    >Save </button> 
    </div>
    
}


export default Editor

