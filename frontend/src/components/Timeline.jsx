import formatDate from "../util/formatDate";

function Timeline({events}) { 

    const listing= events.map((e) => (
        <div class="mb-6 ms-4">
            <div class="absolute w-3 h-3 bg-green-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-black"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-red-800">{formatDate(e.timeline_date,e.exclude_date,e.exclude_month)}</time>
            <p class="text-lg text-amber-50">{e.title}</p>
        </div>));

    return (
    <div class="py-4 sm:py-8">
      <ol class="relative border-s border-green-700">
        {listing}
      </ol>
    </div>
    )
};

export default Timeline