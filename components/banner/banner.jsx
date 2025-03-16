"use client"
import {useContext, useState} from "react";
import {MainContext} from "@/providers/MainProvider";

export  function VideoComponent() {
    const {videoUrl} = useContext(MainContext)
    return (
        <div
            className="relative w-full h-full"
        >
            <video
                controls={false} // Show controls only when hovered
                preload="metadata" // Preload video metadata
                aria-label="Video player"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover" // Tailwind: full width, full height, object cover
            >
                <source src={videoUrl} type="video/mp4"/>
            </video>
        </div>
    );
}
