"use client"
import Item from "@/components/blog/item";
import Link from "next/link";
import {useContext} from "react";
import {MainContext} from "@/providers/MainProvider";

export default function Blog() {
    const {blogs} = useContext(MainContext);
    return (
        <div>
            <div className="text-center py-5">
                <h1 className="text-4xl font-bold">
                    Բլոգ
                </h1>
            </div>
            {blogs?.map((item, index) => {
                const slug = item?.title?.toLowerCase().replace(/\s+/g, "-"); // Convert title to slug
                return(
                <Item reverse={index%2===0} slug={slug} key={index} item={item} />
            )})}

            <div className="text-center py-5">
                <Link href={'/blogs'}>
                    <button className='px-5 py-2 border-black border-[1px] cursor-pointer'>ՏԵսնել բոլորը</button>
                </Link>
            </div>

        </div>

    );
}
