import React,  { Component, useState } from "react";
import dayjs from "dayjs";
import { generateDate, months } from "../util/calendar";
import cn from "../util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import LinkButton from "./linkbutton";
import { EVENTS_API_URL } from "../constants";
import axios from "axios";



class Calendar extends Component {


	days = ["S", "M", "T", "W", "T", "F", "S"];
	currentDate = dayjs();

  state = {
    today: this.currentDate,
    selectDate: this.currentDate,
    events: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getEvents = (selectDate) => {
    axios.get(EVENTS_API_URL+"?start_date="+selectDate.format('YYYY-MM-DD')).then(res => this.setState({ events: res.data }));
  };

  resetState = () => {
    this.getEvents(this.state.selectDate);
  };

  render() {
    return (

          // <div className="flex gap-10 sm:divide-x justify-center sm:w-1/2 mx-auto  min-h-screen max-h-screen items-center sm:flex-row flex-col">
          <div class="flex sm:flex-row flex-col gap-10 min-h-screen max-h-screen sm:divide-x justify-center mx-auto max-sm:items-center space-y-8">
        <div className="flex-1 w-96 h-96 ">
          <div className="flex justify-between items-center">
            <p className="select-none font-semibold">
              {months[this.state.today.month()]}, {this.state.today.year()}
            </p>
            <div className="flex gap-10 items-center ">
              <GrFormPrevious
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  this.setState({
                    today: this.state.today.month(this.state.today.month() - 1)
                  })
                }}
              />
              <p
                className="text-lg cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  this.setState({
                    today: this.currentDate,
                    selectDate: this.currentDate,
                  });
                  this.getEvents(this.currentDate);

                }}
              >
                Today
              </p>
              <GrFormNext
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  this.setState({
                    today: this.state.today.month(this.state.today.month() + 1)
                  })
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-7 ">
            {this.days.map((day, index) => {
              return (
                <p
                  key={index}
                  className="text-sm text-center h-14 w-14 grid place-content-center text-black select-none"
                >
                  {day}
                </p>
              );
            })}
          </div>
                  
          <div className=" grid grid-cols-7 ">
            {generateDate(this.state.today.month(), this.state.today.year()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                  >
                    <p
                      className={cn(
                        currentMonth ? "" : "text-gray-400",
                        today
                          ? "bg-red-600 text-white"
                          : "",
                          this.state.selectDate
                          .toDate()
                          .toDateString() ===
                          date.toDate().toDateString()
                          ? "bg-black text-white"
                          : "",
                        "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                      )}
                      onClick={() => {
                        this.setState({selectDate: date});
                        this.getEvents(date)
                      }}

                    >
                      {date.date()}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>


        <div className="flex flex-col flex-1 px-8 overflow-x-auto overflow-y-auto sm:px-5 ">
          <p className=" font-semibold">
            Schedule for {this.state.selectDate.toDate().toDateString()}
          </p >
                  <LinkButton 
                      linkText={"Add Event"} 
                      linkUrl={"calendar/create"}
                      target = ""
                  ></LinkButton>
                  <div class="flex flex-col">
                    {!this.state.events || this.state.events.length <= 0 ? (
                        <div className="text-black">Nothing in the diary!</div>)
                        : (
                            this.state.events.map(event => (
                                <div key = {event.pk} >
                                    {!event.allDay && (
                                        <div>
                                            {event.start_time} - {event.end_time}
                                        </div>
                                    )}
                                    <div>
                                        {event.title}
                                    </div>
                                <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"/>

                                </div>
                            ))

                        )
                    
                    }
                </div>
                        

        </div>


          </div>
    )
  }
  };

  export default Calendar;
