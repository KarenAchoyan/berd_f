"use client"

import {createContext} from "react";

export const ManagerContext = createContext({});

export const ManagerProvider = ({ children, value }) => {
    return (
        <ManagerContext.Provider value={value}>
            {children}
        </ManagerContext.Provider>
    )
}