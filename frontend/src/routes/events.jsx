import React, { useState } from "react";
import Calendar from "../components/calendar";
import LinkButton from "../components/linkbutton";

export default function Events() {
  
  return (
    <div class="bg-green-500 opacity-80">
      <div class ="pt-10">
        <Calendar/>
      </div>
    </div>
  );
}
