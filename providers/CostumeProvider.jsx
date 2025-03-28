"use client"

import {createContext} from "react";

export const CostumeContext = createContext({});

export const CostumeProvider = ({ children, value }) => {
    return (
        <CostumeContext.Provider value={value}>
            {children}
        </CostumeContext.Provider>
    )
}