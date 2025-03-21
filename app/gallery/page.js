import React from 'react';
import PageBanner from "@/components/pageBanner/pageBanner";
import {Image} from "antd";
import Item from "@/components/galleries/item";
async function getGalleries() {
    const res = await fetch('https://berd.dahk.am/api/gallery-images', { cache: "no-store" });
    return res.json();
}

const Page = async () => {

    const galleries = await getGalleries()

    return (
        <div className='gallery w-full  '>
             <PageBanner/>
            <div className='w-full h-auto mt-15 flex items-center justify-center'>
                <div className='w-[90%] h-auto'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {galleries?.data?.map((item, index) => (
                            <Item item={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Page;