import React, { useState } from "react";
import Calendar from "../components/calendar";
import LinkButton from "../components/linkbutton";

export default function Events() {
  
  return (
    <div class="bg-green-500 opacity-80">
      <div class='container bg-green-900 text-center min-w-full text-gray-50 text-xl text-bold p-3'>
  Don't miss out on events. Join our broadcast!

      <LinkButton 
        linkText={"Whatsapp broadcast"} 
        linkUrl={"bar"}
      ></LinkButton>
  
    </div>
      <div class ="pt-10">
        <Calendar/>
      </div>
    </div>
  );
}
