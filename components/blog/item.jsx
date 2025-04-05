import React from 'react';
import {CalendarOutlined} from "@ant-design/icons";
import {truncateText} from "@/utils/utils";
import Link from "next/link";
import parse from "html-react-parser";

const Item = ({item, reverse = false, slug}) => {
    return (
        <div
            className={`h-auto md:h-[500px] px-10 md:px-0 flex flex-col  items-center md:items-start gap-6 py-6 rounded-lg container mx-auto ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
            <div className="relative h-full w-full md:w-1/2 flex justify-center">
                <img
                    src={process.env.IMAGE_URL+item?.avatar}
                    alt="Travel Adventure"
                    className="h-full w-full object-cover rounded-lg"
                />
            </div>
            <div className="md:w-1/2 flex items-center h-full">
                <div>
                    <h3 className="text-3xl font-bold mt-3">
                        {item?.title}
                    </h3>
                    <div className="text-gray-600 mt-2" >
                        {parse(truncateText(item?.content, 250) || "")}
                    </div>
                    <Link href={"/blogs/"+slug} className="text-black font-bold mt-3 flex items-center hover:text-[#82181a]">
                        Կարդալ ավելին <span className="ml-1">&rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Item;