"use client"
import {Image} from "antd";
import {useContext} from "react";
import {MainContext} from "@/providers/MainProvider";

export function VideoComponent() {
    const {image} = useContext(MainContext);
    return (
        <div className="relative w-full h-[800px]">
          <img className="w-full h-full object-cover" src={process.env.IMAGE_URL+image} alt={"Banner"}/>
        </div>
    );
}
