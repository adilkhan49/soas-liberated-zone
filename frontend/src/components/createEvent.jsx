import React, {useState, Component, useContext} from 'react';

import axios from "axios";
import { EVENTS_API_URL } from "../constants";
import AuthContext from '../context/AuthContext';

function Editor(props) {


    const [title, set_title] = useState(null);
    const [description, set_description] = useState(null);
    const [start_date, set_start_date] = useState(null);
    const [start_time, set_start_time] = useState(null);
    const [end_date, set_end_date] = useState(null);
    const [end_time, set_end_time] = useState(null);
    const [allDay, set_allDay] = useState(false);
    const [link_text, set_link_text] = useState(null);
    const [link_url, set_link_url] = useState(null);
    const [location_text, set_location_text] = useState(null);
    
    let { authTokens } = useContext(AuthContext)
    
    const handleSave = async () => {
        event.preventDefault(); // Prevent form default submission

        try {
          const response = await fetch(EVENTS_API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + authTokens.access,
            },
            body: JSON.stringify({
              title: title,
              description: description,
              start_date: start_date,
              start_time: start_time,
              end_time: end_time,
              allDay: allDay,
              link_text: link_text,
              link_url: link_url, 
              location_text: location_text, 
            }),
          });
    
          if (response.ok) {
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
              <label class="block">Date</label>
              <input
                  type="date"
                  value={start_date}
                  onChange={(e) => set_start_date(e.target.value)}
                  required
              />
            </div>
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
              <label class="block">Description</label>
              <input
                  type="text"
                  value={description}
                  onChange={(e) => set_description(e.target.value)}
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
                <label class="block">Starrt Time</label>
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
            <div>
              <label class="block">Link Text</label>
              <input
                  type="text"
                  value={link_text}
                  onChange={(e) => set_link_text(e.target.value)}
                  required
              />
            </div>
            { link_text &&
              <div>
                <label class="block">Link URL</label>
                <input
                    type="text"
                    value={link_url}
                    onChange={(e) => set_link_url(e.target.value)}
                    required
                />
              </div>
            }
            <div>
              <label class="block">Location Text</label>
              <input
                  type="text"
                  value={location_text}
                  onChange={(e) => set_location_text(e.target.value)}
                  required
              />
            </div>
        </form>

      <div class='flex gap-x-4'>
        <button 
            class="bg-black hover:bg-gray-700 text-white font-bold my-4 py-2 px-4 rounded"
            onClick={handleSave}
                        >Save 
        </button> 
        <a
          href="/calendar">
          <button 
            class="bg-black hover:bg-gray-700 text-white font-bold my-4 py-2 px-4 rounded"
                        >Cancel 
          </button> 
        </a>
      </div>
    </div>
    
}


export default Editor

