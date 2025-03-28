"use client"

import {createContext} from "react";

export const GalleryContext = createContext({});

export const GalleryProvider = ({ children, value }) => {
    return (
        <GalleryContext.Provider value={value}>
            {children}
        </GalleryContext.Provider>
    )
}