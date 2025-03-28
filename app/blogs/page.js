import React from 'react';
import PageBanner from "@/components/pageBanner/pageBanner";
import Item from "@/components/blog/item";

const Page = () => {
    return (
        <div>
            <PageBanner/>
            <div className="container m-auto">
                <h1 className="text-4xl font-bold text-center my-10">
                    Բլոգ
                </h1>

                <div>
                    <Item/>
                    <Item reverse={true}/>
                    <Item/>
                    <Item reverse={true}/>
                    <Item/>
                    <Item reverse={true}/>
                    <Item/>
                </div>
            </div>
        </div>
    );
};

export default Page;