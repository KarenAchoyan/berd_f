"use client"

import {createContext} from "react";

export const StudioContext = createContext({});

export const StudioProvider = ({ children, value }) => {
    return (
        <StudioContext.Provider value={value}>
            {children}
        </StudioContext.Provider>
    )
}