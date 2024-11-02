import React, { useState } from "react";
import Calendar from "../components/calendar";

export default function Events() {
  
  return (
    <div class="bg-green-500 opacity-80">
      <div class='container bg-green-300 text-center min-w-full text-green-800 text-xl text-bold p-3'>
  Don't miss out on events. Join our broadcast!
      </div>
      <div class ="pt-10">
        <Calendar/>
      </div>
    </div>
  );
}
