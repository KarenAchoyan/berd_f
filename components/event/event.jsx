"use client";
import { DatePicker } from "antd";
import {useContext, useEffect, useState} from "react";
import CustomCalendar from "@/components/event/customCalendar";
import {MainContext} from "@/providers/MainProvider";
import dayjs from 'dayjs';
import {truncateText} from "@/utils/utils";

const CalendarEvent = () => {
    const {tickets}= useContext(MainContext);
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [firstTicket, setFirstTicket] = useState();
    const [dates] = useState(function (){
        return tickets.data.map((ticket)=>{
            const date = new Date(ticket.date);
            const formattedDate = date.toLocaleDateString('en-GB'); // 'en-GB' provides the 'DD/MM/YYYY' format
            const formattedDateWithDash = formattedDate.replace(/\//g, '-');
            return formattedDateWithDash;
        });
    });


    useEffect(() => {
        setFirstTicket(tickets.data[0])
    },[tickets])

    return (
        <div className="pb-12">
            <div className="container mx-auto p-5 bg-cover bg-center rounded-2xl">
                <div className="flex flex-wrap justify-center gap-10">
                    {/* Calendar */}
                    <div className="w-full sm:w-[340px] h-auto p-5 rounded-xl border-4 bg-white border-gray-700 shadow-lg backdrop-blur-md">
                        <CustomCalendar dates={dates}/>
                    </div>

                    {/* Event Details */}
                    <div className="w-full sm:w-[630px] p-5 border-4 bg-white border-gray-700 shadow-lg rounded-xl">
                        <img
                            src={process.env.IMAGE_URL+firstTicket?.avatar}
                            alt="Event"
                            className="rounded-xl mb-5 w-full"
                        />
                        <h3 className="text-black text-lg font-semibold mb-3">
                            {selectedDate?.format("MMMM DD, YYYY")}
                        </h3>
                        <p className="text-sm text-black" dangerouslySetInnerHTML={{ __html: truncateText(firstTicket?.content, 500) }}/>
                        <a
                            href={firstTicket?.url}
                            className="text-red-700 font-bold underline mt-5 block text-right hover:text-red-900"
                        >
                            Գնել տոմս
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarEvent;
