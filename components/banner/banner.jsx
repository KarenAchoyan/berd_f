"use client"
import Image from "next/image";
import {useContext} from "react";
import {MainContext} from "@/providers/MainProvider";
async function getGalleries() {
    try {
        const res = await fetch('https://berd.dahk.am/api/galleries');
        if (!res.ok) {
            throw new Error('Failed to fetch galleries');
        }
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function VideoComponent() {
    const speeches = await getGalleries();

    const {image} = useContext(MainContext);
    return (
        <div className="relative w-full h-[800px]">
          <Image className="w-full h-full object-cover" src={image} alt={"Banner"} width={1200} height={800} />
        </div>
    );
}
