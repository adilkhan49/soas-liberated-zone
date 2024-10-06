// const API_URL = import.meta.env.VITE_API_URL;
var API_URL = '';
if (window.location.origin === "http://localhost:5173") {
    API_URL = API_URL + "http://localhost:8000";
  } else {
    API_URL = API_URL + window.location.origin;
  }
  API_URL = API_URL + '/api/'
  console.log('hello origin')
console.log(window.location.origin);
console.log(API_URL)
  
export const POSTS_API_URL = API_URL + "posts/";
export const STATEMENTS_API_URL =  API_URL + "statements/";
export const EVENTS_API_URL =  API_URL + "events/";
