import React from 'react';
import {Image} from "antd";
import {CalendarOutlined} from "@ant-design/icons";
import Link from "next/link";
import parse from "html-react-parser";
import dayjs from 'dayjs';

const Details = ({data, lastNews}) => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-wrap px-5'>
                <div className='w-full lg:w-[70%] '>
                    <div className='mt-10 single-blog'>
                        <Image preview={true} src={process.env.IMAGE_URL+data.avatar} className='w-full h-[500px] object-cover'/>
                    </div>
                    <div>
                        <div className="flex items-center text-gray-500 text-sm mt-2">
                            <CalendarOutlined className="mr-1"/>
                            <span>{dayjs(data.created_at).format('YYYY-MM-DD')}</span>
                        </div>
                        <div className='mt-10'>
                            <h1 className='text-5xl font-bold'>{data.title}</h1>
                            <div className="content mt-5">
                                <div>
                                    {parse(data?.content) || ""}
                                </div>
                            </div>
                            <div className="images flex flex-wrap">
                                {JSON.parse(data?.images || '[]')?.map((item, index) => {
                                    return(
                                        <div className='w-1/2 md:w-1/4 p-2' key={index}>
                                            <Image preview={true} src={process.env.IMAGE_URL+item} alt=''/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[30%] px-10">
                    <h2 className="text-xl font-bold mb-4 mt-10">Վերջին նորությունները</h2>
                    <ul className="border-t border-gray-300">
                        {lastNews.map((item, index) => {
                            const slug = item?.title?.toLowerCase().replace(/\s+/g, "-"); // Convert title to slug

                            return(
                            <li
                                key={index}
                                className="border-b border-gray-300 py-2 hover:bg-gray-100 transition duration-200 cursor-pointer"
                            >
                               <Link href={'/blogs/'+slug}>
                                   {item.title}
                               </Link>
                            </li>
                        )})}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Details;