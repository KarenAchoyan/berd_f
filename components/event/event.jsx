"use client";
import { DatePicker } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import CustomCalendar from "@/components/event/customCalendar";

const CalendarEvent = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs());

    const onDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="pb-12">
            <div className="container mx-auto p-5 bg-cover bg-center rounded-2xl">
                <div className="flex flex-wrap justify-center gap-10">
                    {/* Calendar */}
                    <div className="w-full sm:w-[340px] h-auto p-5 rounded-xl border-4 bg-white border-gray-700 shadow-lg backdrop-blur-md">
                        <CustomCalendar />
                    </div>

                    {/* Event Details */}
                    <div className="w-full sm:w-[630px] p-5 border-4 bg-white border-gray-700 shadow-lg rounded-xl">
                        <img
                            src="/banner.jpg"
                            alt="Event"
                            className="rounded-xl mb-5 w-full"
                        />
                        <h3 className="text-black text-lg font-semibold mb-3">
                            {selectedDate?.format("MMMM DD, YYYY")}
                        </h3>
                        <p className="text-sm text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a
                            href="#"
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
