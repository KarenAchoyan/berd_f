"use client"

import {createContext} from "react";

export const VideoContext = createContext({});

export const VideoProvider = ({ children, value }) => {
    return (
        <VideoContext.Provider value={value}>
            {children}
        </VideoContext.Provider>
    )
}