"use client";

import { useState, createContext } from "react";
import { TCurrentDayContext, TCurrentDayContextProviderProps } from "../lib/types";

export const CurrentDayContext = createContext<TCurrentDayContext | null>(null)

export default function CurrentDayContextProvider({ data, children } : TCurrentDayContextProviderProps) {

    const [currentDay, setCurrentDay] = useState(data)

    //derived state

    // events handlers / actions
    const handleChangeCurrentDay = (newDay: Date) => {
        setCurrentDay(newDay)
        
    }

    return(
        <CurrentDayContext.Provider
            value={{
                currentDay: currentDay,
                handleChangeCurrentDay
            }}
            >{children}
        </CurrentDayContext.Provider>
    )
}