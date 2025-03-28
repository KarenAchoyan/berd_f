import React from 'react';
import {CalendarOutlined} from "@ant-design/icons";
import {truncateText} from "@/utils/utils";

const Item = ({item, reverse = false}) => {
    return (
        <div
            className={`h-auto md:h-[500px] px-10 md:px-0 flex flex-col  items-center md:items-start gap-6 py-6 rounded-lg container mx-auto ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
            <div className="relative h-full w-full md:w-1/2 flex justify-center">
                <img
                    src="/performance1.png"
                    alt="Travel Adventure"
                    className="h-full w-full object-cover rounded-lg bg-blue-500"
                />
            </div>
            <div className="md:w-1/2 flex items-center h-full">
                <div>
                    <div className="flex items-center text-gray-500 text-sm mt-2">
                        <CalendarOutlined className="mr-1"/>
                        <span>October 8, 2019</span>
                    </div>
                    <h3 className="text-3xl font-bold mt-3">
                        MOVING THROUGH: THE EVERYDAY URBAN JUNGLE OF YOUR CITY
                    </h3>
                    <p className="text-gray-600 mt-2">

                        {truncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n" +
                            "                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\n" +
                            "                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n" +
                            "                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\n" +
                            "                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n" +
                            "                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", 250)}
                    </p>
                    <a href="#" className="text-black font-bold mt-3 flex items-center hover:text-[#82181a]">
                        Կարդալ ավելին <span className="ml-1">&rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Item;