"use client"
import Image from "next/image";
import {useContext} from "react";
import {MainContext} from "@/providers/MainProvider";

export function VideoComponent() {
    const {image} = useContext(MainContext);
    return (
        <div className="relative w-full h-[800px]">
          <Image className="w-full h-full object-cover" src={image} alt={"Banner"} width={1200} height={800} />
        </div>
    );
}
