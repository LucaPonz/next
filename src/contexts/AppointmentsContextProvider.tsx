"use client";

import { TAppointmentsContext, TAppointmentsContextProviderProps } from "@/src/lib/types";
import { Appointment } from "@prisma/client";
import { useState, createContext } from "react";

export const AppointmentsContext = createContext<TAppointmentsContext | null>(null)

export default function AppointmentsContextProvider({ data, children } : TAppointmentsContextProviderProps) {
    
    return(
        <AppointmentsContext.Provider
            value={{
                appointments: data,
            }}
            >{children}
        </AppointmentsContext.Provider>
    )
}



