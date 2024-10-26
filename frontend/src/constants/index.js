// const API_URL = import.meta.env.VITE_API_URL;
var API_URL = '';
if (window.location.origin === "http://localhost:5173") {
    API_URL = API_URL + "http://localhost:8000";
  } else {
    API_URL = API_URL + window.location.origin;
  }
  API_URL = API_URL + '/api/'  

export const TOKEN_API_URL = API_URL + "token/";
export const POSTS_API_URL = API_URL + "posts/";
export const STATEMENTS_API_URL =  API_URL + "statements/";
export const EVENTS_API_URL =  API_URL + "events/";
export const SUBSCRIBE_API_URL =  API_URL + "subscribe/";
export const TIMELINE_EVENTS_API_URL =  API_URL + "timeline/";
