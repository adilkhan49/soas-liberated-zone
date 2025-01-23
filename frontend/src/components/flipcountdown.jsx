function FlipCountdown({number=0,caption='',top_color='bg-black',bottom_color='bg-black', border_color='border-green-700', line_color='bg-green-700', opacity='opacity-75'}) {

    const string_array = number.toString().split('');
    const width = 'w-'+((string_array.length)+1*20).toString();
    return (
    <div class='flex flex-col justify-center items-center z-20 '>
        <div class="flex flex-row gap-1">
            {string_array.map(digit => (
                <div class={`relative w-16 md:w-20 font-mono font-extrabold items-center text-5xl sm:text-6xl md:text-7xl  text-white shadow-2xl gap-x-px border-0 ${border_color} ${opacity} rounded-3xl`}>
                    <div class="relative py-2 md:py-4 rounded-xl ">
                        <div class="absolute inset-0 w-full h-full grid grid-rows-2 ">
                        <div class={`${top_color} ${opacity} rounded-t-md`}></div>
                        <div class={`${bottom_color} ${opacity} rounded-b-md`}></div>
                    </div>
                    <div class="relative text-center">{digit}</div>
                        <div class="absolute inset-0 w-full h-full flex items-center justify-center">
                            <div class={`h-0.5 w-full ${line_color}`}></div>
                        </div>
                    </div>
                </div>
                )
            )   
        }

        </div>
        <div class={`$ h-20 font-kanit italic text-center text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 font-outline-2-black )]`}>
            {caption}
        </div>
    </div>
  );  
}

export default FlipCountdown;