import formatDate from "../util/formatDate";

function Timeline({events}) { 

    const listing= events.map((event) => (
        <div class="mb-6 ms-4">
            <div class="absolute w-3 h-3 bg-green-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-black"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-red-800">{formatDate(event.timeline_date,event.exclude_date,event.exclude_month)}</time>
            <p class="text-lg text-gray-900">{event.title}</p>
        </div>));

    return (
    <div>
      <p class='font-tourney text-5xl text-green-700 font-bold text-center'>Timeline</p>

      <ol class="relative border-s border-green-700">
        {listing}
      </ol>
    </div>
    )
};

export default Timeline