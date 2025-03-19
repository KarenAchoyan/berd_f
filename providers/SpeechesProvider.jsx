"use client"

import {createContext} from "react";

export const SpeechesContext = createContext({});

export const SpeechesProvider = ({ children, value }) => {
    return (
        <SpeechesContext.Provider value={value}>
            {children}
        </SpeechesContext.Provider>
    )
}