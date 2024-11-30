import React, { useState } from 'react';
import formatDate from "../util/formatDate";  // Import the formatDate function

// Group events by year
const groupEventsByYear = (events) => {
    const grouped = {};

    events.forEach(event => {
        const year = new Date(event.timeline_date).getFullYear();
        if (!grouped[year]) {
            grouped[year] = [];
        }
        grouped[year].push(event);
    });

    return grouped;
};

const Timeline = ({ events }) => {
    const groupedEvents = groupEventsByYear(events);  // Group the events by year

    // State to track which years are expanded
    const [expandedYears, setExpandedYears] = useState({});

    // Toggle the visibility of events for a given year
    const toggleYear = (year) => {
        setExpandedYears(prevState => ({
            ...prevState,
            [year]: !prevState[year]
        }));
    };

    return (
        <div className="relative max-w-3xl mx-auto py-8">
            <ol class="relative border-s border-green-700">

            {Object.keys(groupedEvents).map((year) => (
                <div key={year} className="relative my-10">
                    {/* Year Header: clickable to toggle the visibility of events */}
                    <button onClick={() => toggleYear(year)}>
                        <div className="absolute w-3 h-3 bg-red-800 hover:bg-red-600 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-black z-10"></div>
                        <div className="ml-5 font-bold text-lg  leading-none text-amber-50">
                         {year}
                        </div>
                    </button>

                   

                    {/* Conditional rendering of events for the year */}
                    {expandedYears[year] && (
                        <div className="space-y-6 my-5">
                                {groupedEvents[year].map((event) => (
                                    <div key={event.pk} className="mb-6 relative">
                                        {/* Timeline Circle */}
                                        <div className="absolute w-3 h-3 bg-green-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-black z-10"></div>

                                        {/* Event Date */}
                                        <time className="ml-10 mb-1 text-sm font-normal leading-none text-gray-400 dark:text-red-800">
                                            {formatDate(event.timeline_date, event.exclude_date, event.exclude_month)}
                                        </time>

                                        {/* Event Title */}
                                        <p className="ml-10 text-lg text-amber-50">{event.title}</p>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            ))}
                                        </ol>

        </div>
    );
};



export default Timeline;