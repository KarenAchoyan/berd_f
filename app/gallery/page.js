import React from 'react';
import PageBanner from "@/components/pageBanner/pageBanner";
import {log} from "next/dist/server/typescript/utils";

import {Image} from "antd";
const Page = () => {
    let images = [
        {id:1, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRi2x8RiCqcGmMiQn455B9Jxup0QTcobH7bw&s"},
        {id:2, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRi2x8RiCqcGmMiQn455B9Jxup0QTcobH7bw&s"},
        {id:3, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRi2x8RiCqcGmMiQn455B9Jxup0QTcobH7bw&s"},
        {id:4, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRi2x8RiCqcGmMiQn455B9Jxup0QTcobH7bw&s"},
        {id:5, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRi2x8RiCqcGmMiQn455B9Jxup0QTcobH7bw&s"},
        {id:6, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRi2x8RiCqcGmMiQn455B9Jxup0QTcobH7bw&s"},
        {id:7, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRi2x8RiCqcGmMiQn455B9Jxup0QTcobH7bw&s"},
        {id:8, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRi2x8RiCqcGmMiQn455B9Jxup0QTcobH7bw&s"},
        {id:9, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRi2x8RiCqcGmMiQn455B9Jxup0QTcobH7bw&s"},
        {id:10, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRi2x8RiCqcGmMiQn455B9Jxup0QTcobH7bw&s"},
    ]




    return (
        <div className='gallery w-full  '>
             <PageBanner/>
            {/*<div className='w-full h-auto flex justify-center items-center'>*/}
            {/*    <div className='h-auto w-[90%] flex justify-center '>*/}
            {/*        <div className='flex flex-wrap justify-between gap-[10px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>*/}
            {/*            {images.map((item, index)=>(*/}
            {/*               <div key={index} className='w-[24%] h-[400px] bg-blue-900'>*/}
            {/*                   <Image className='h-[400px] w-[100%]' key={item.id} src='/1.jpg' alt='Img'/>*/}
            {/*               </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}
            <div className='w-full h-auto mt-15 flex items-center justify-center'>
                <div className='w-[90%] h-auto'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {images.map((src, index) => (
                            <div key={index} className="overflow-hidden h-[400px] w-[400px] rounded-lg shadow-md">
                                <img
                                    src={'1.jpg'}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Page;