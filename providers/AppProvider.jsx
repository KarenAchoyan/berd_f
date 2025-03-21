"use client"

import {createContext} from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children, value }) => {
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}