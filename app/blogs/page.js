import React from 'react';
import PageBanner from "@/components/pageBanner/pageBanner";
import Item from "@/components/blog/item";
import {NewsProvider} from "@/providers/NewsProvider";
import All from "@/components/blog/all";
async function getItem() {
    const page = 1;
    const res = await fetch(`https://berd.dahk.am/api/blogs?page=${page}`);
    return res.json()
}

const Page = async () => {
    const res = await getItem();
    const data = await res.data.news;
    const totalPages = await res.data.total_pages || 1;
    return (
        <div>
            <PageBanner/>
            <NewsProvider value={{data, totalPages}}>
                <All/>
            </NewsProvider>
            <div className="container m-auto">



            </div>
        </div>
    );
};

export default Page;