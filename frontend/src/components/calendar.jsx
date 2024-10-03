import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../util/calendar";
import cn from "../util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function getEvents(event_date) {
    const events = [  {
        id: 0,
        title: "All Day Event very long titleAll Day Event very long titleAll Day Event very long titleAll Day Event very long titleAll Day Event very long title",
        allDay: true,
        start: new Date(2024, 3, 0,),
        end: new Date(2024, 3, 1)
      },
      {
        id: 1,
        title: "Long Event",
        allDay: false,
        start: new Date(2024, 3, 7,11,30),
        end: new Date(2024, 3, 10,12,30)
      },
      {
        id: 1,
        title: "Long Event",
        allDay: false,
        start: new Date(2024, 3, 7,11,30),
        end: new Date(2024, 3, 10,12,30)
      },
      {
        id: 1,
        title: "Long Event",
        allDay: false,
        start: new Date(2024, 3, 7,11,30),
        end: new Date(2024, 3, 10,12,30)
      },
      {
        id: 1,
        title: "Long Event",
        allDay: false,
        start: new Date(2024, 3, 7,11,30),
        end: new Date(2024, 3, 10,12,30)
      },
      {
        id: 1,
        title: "Long Event",
        allDay: false,
        start: new Date(2024, 3, 7,11,30),
        end: new Date(2024, 3, 10,12,30)
      },
      {
        id: 1,
        title: "Long Event",
        allDay: false,
        start: new Date(2024, 3, 7,11,30),
        end: new Date(2024, 3, 10,12,30)
      },
      {
        id: 1,
        title: "Long Event",
        allDay: false,
        start: new Date(2024, 3, 7,11,30),
        end: new Date(2024, 3, 10,12,30)
      },
      {
        id: 1,
        title: "Long Event",
        allDay: false,
        start: new Date(2024, 3, 7,11,30),
        end: new Date(2024, 3, 10,12,30)
      },
      {
        id: 1,
        title: "Long Event",
        allDay: false,
        start: new Date(2024, 3, 7,11,30),
        end: new Date(2024, 3, 10,12,30)
      },
      {
        id: 1,
        title: "Long Event",
        allDay: false,
        start: new Date(2024, 3, 7,11,30),
        end: new Date(2024, 3, 10,12,30)
      },
      {
        id: 1,
        title: "Long Event",
        allDay: false,
        start: new Date(2024, 3, 7,11,30),
        end: new Date(2024, 3, 10,12,30)
      },
      {
        id: 1,
        title: "Long Event",
        allDay: false,
        start: new Date(2024, 3, 7,11,30),
        end: new Date(2024, 3, 10,12,30)
      },
      {
        id: 1,
        title: "Long Event",
        allDay: false,
        start: new Date(2024, 3, 7,11,30),
        end: new Date(2024, 3, 10,12,30)
      },
      {
        id: 1,
        title: "Long Event",
        allDay: false,
        start: new Date(2024, 3, 7,11,30),
        end: new Date(2024, 3, 10,12,30)
      },
    ]

    return(
        <div class="flex flex-col">
            {!events || events.length <= 0 ? (
                <div className="text-gray-400">No meetings for today.</div>)
                : (
                    events.map(event => (
                        <div >
                            {!event.allDay && (
                                <div>
                                    {event.start.toLocaleTimeString([], {timeStyle: 'short'})
                                    
                                    } - {event.end.toLocaleTimeString([], {timeStyle: 'short'})}
                                </div>
                            )}
                            <div>
                                {event.title} on {event_date.toDate().toDateString()}
                            </div>
                        <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"/>

                        </div>
                    ))

                )
            
            }
        </div>
        
    )
    
}
export default function Calendar() {



	const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);

    const x =  (
        <div class="flex flex-row min-h-screen max-h-screen bg-gray-50 space-y-8">
  

            <div class="flex h-24 bg-gray-200">
                <div class="flex w-full justify-center items-center">Upper Container</div>
            </div>


            <div class="flex flex-1 bg-gray-200 p-8 overflow-hidden">
                <div class="flex flex-col flex-1 space-y-8">
                

                <div class="flex bg-gray-300 h-24">
                    <div class="flex w-full justify-center items-center">Navigation</div>
                </div>


                <div class="flex flex-1 bg-gray-300 p-8 overflow-x-hidden overflow-y-auto">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio minus et ea esse, quo officiis incidunt omnis laboriosam nesciunt quas ipsum deleniti repudiandae sint illo, odio commodi dolore impedit inventore. Maiores reprehenderit praesentium debitis mollitia impedit quasi qui aspernatur numquam atque, perferendis optio culpa! Quos placeat iure, deserunt unde ipsum repudiandae perferendis, doloribus fugiat qui aliquid iste praesentium, itaque officia. Obcaecati porro, consequuntur saepe maiores laborum laudantium eos nihil totam ea pariatur nam soluta neque nemo dolorem amet repudiandae laboriosam illum alias fugiat eaque minus. Provident, enim minima. Facere, obcaecati? Asperiores error blanditiis quos nostrum corporis nobis. Libero voluptate expedita maxime voluptates doloribus veniam quam vitae est minima corrupti dicta accusantium distinctio, aliquid tempora eum, laboriosam, nulla natus debitis cumque. Dolor velit possimus nesciunt deleniti quas dolorum neque cum reiciendis pariatur praesentium in qui voluptatibus provident a numquam, tempore distinctio impedit dicta non eos aut eveniet commodi doloremque. Cum, earum. Iste soluta perspiciatis debitis vitae ipsam doloribus aliquid voluptates repellat quae. Rerum enim eum nobis impedit molestias dolorum voluptatum animi exercitationem laudantium aut. Porro omnis excepturi harum reprehenderit doloribus ipsum. Rerum sed fuga amet totam, excepturi accusantium, quidem, perferendis nam doloremque expedita eligendi? Ratione harum exercitationem delectus iure asperiores? Nobis accusantium qui in. Laudantium, ducimus sit ipsum perspiciatis cumque vero? Soluta architecto eum ad suscipit beatae, nisi a, iusto dolore aperiam molestias voluptas pariatur perferendis facilis voluptatem optio nihil nulla explicabo saepe rerum corporis aliquid provident. Illum velit molestias totam? Esse, fugit tempora neque ipsum ea blanditiis culpa facere nobis soluta totam numquam voluptatum alias ad aperiam hic reprehenderit cumque quia, veniam incidunt illum fuga dignissimos. Animi ratione inventore doloremque. Laborum eaque ipsam nemo voluptates libero molestias, a consectetur accusantium consequatur mollitia. Deleniti, et? Vero aut laudantium alias aspernatur atque accusamus aliquid corporis architecto. Perspiciatis ducimus sed odio ex sint! Nihil rerum aut consequuntur reiciendis, officia amet soluta necessitatibus possimus. Dolorem excepturi in aperiam hic, rerum distinctio ut iure voluptate repudiandae tempore quidem facere quasi temporibus sapiente sequi eius eos. Dolorem cupiditate dolore in? Ipsa iusto quibusdam beatae consectetur ipsum nobis eum adipisci. Earum hic architecto voluptas fugit velit excepturi ab harum quibusdam nobis delectus nostrum explicabo, ut omnis? Praesentium. Fugiat quidem voluptates accusantium quisquam est, nulla inventore repellendus cumque doloribus rem nobis molestiae temporibus hic magni reiciendis. Nam earum commodi, et excepturi quae molestiae veniam nesciunt recusandae tenetur ducimus. Qui quas officiis iste. Libero a ipsam saepe accusantium illo velit obcaecati. Iure eligendi quasi voluptas labore provident nemo suscipit quis itaque sed libero earum autem nobis, atque omnis eius. Illum reiciendis, repellendus laudantium temporibus id blanditiis odio omnis ad quidem expedita error asperiores quo, hic culpa quisquam sequi maiores dolores fugit aut harum deleniti eum reprehenderit ex perferendis? Quidem. Qui odio, eius nulla minus libero nesciunt incidunt voluptatem repellat sapiente quae necessitatibus iusto unde nemo reprehenderit atque enim, vitae mollitia pariatur cupiditate ipsa? Iste incidunt excepturi accusamus a? Delectus! Aut dolores temporibus minus odio animi provident impedit repudiandae perspiciatis, eveniet autem accusantium suscipit expedita quas voluptatum veritatis nihil recusandae nemo possimus totam tempora, id sunt saepe dolor? Incidunt, laudantium! Harum eveniet dolorum cupiditate inventore recusandae perspiciatis dolorem aut suscipit optio dignissimos ut, nemo quod mollitia officia ab voluptatem nostrum ipsum quas? Rem similique, amet numquam reprehenderit optio harum repellat. Sequi, dolorum rem. Aspernatur eos sint, dolores neque sequi aliquid voluptates aliquam blanditiis repellendus eaque aperiam laborum corporis provident at culpa quasi, sunt voluptatem modi? Similique quisquam officiis minus ratione. Quasi asperiores natus libero doloremque earum labore perspiciatis nihil corrupti maxime. Voluptas ipsum rerum omnis, inventore quibusdam repudiandae, saepe facere at consectetur fugiat adipisci voluptatibus iure ea similique eveniet eligendi.
                </div>
                
                </div>
            </div>
        </div>
    );

	return (

        // <div className="flex gap-10 sm:divide-x justify-center sm:w-1/2 mx-auto  min-h-screen max-h-screen items-center sm:flex-row flex-col">
        <div class="flex sm:flex-row flex-col gap-10 min-h-screen max-h-screen sm:divide-x justify-center mx-auto max-sm:items-center space-y-8">
			<div className="flex-1 w-96 h-96 ">
				<div className="flex justify-between items-center">
					<p className="select-none font-semibold">
						{months[today.month()]}, {today.year()}
					</p>
					<div className="flex gap-10 items-center ">
						<GrFormPrevious
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
						<p
							className="text-lg cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(currentDate);
                                setSelectDate(currentDate);
							}}
						>
							Today
						</p>
						<GrFormNext
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>
				<div className="grid grid-cols-7 ">
					{days.map((day, index) => {
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
					{generateDate(today.month(), today.year()).map(
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
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "bg-black text-white"
												: "",
											"h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date);
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
					Schedule for {selectDate.toDate().toDateString()}
				</p >
                <div class="">
			    	{getEvents(selectDate)}
                </div>

			</div>


        </div>
	);
}