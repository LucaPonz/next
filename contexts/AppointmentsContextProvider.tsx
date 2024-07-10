"use client";

import { Appointment, TAppointmentsContext } from "@/app/lib/types";
import PreviousMap from "postcss/lib/previous-map";
import { useState, createContext } from "react";

export const AppointmentsContext = createContext<TAppointmentsContext | null>(null)


type AppointmentsContextProviderProps = {
    data: Appointment[];
    children: React.ReactNode;
};

export default function AppointmentsContextProvider({ data, children } : AppointmentsContextProviderProps) {
    const [appointmentsByDay, setAppointmentsByDay] = useState(data)


    // events handlers / actions

    const handleAddAppointment = async (newAppointment: Appointment) => {
        setAppointmentsByDay(prev => [...prev, newAppointment])
    }
        

    return(
        <AppointmentsContext.Provider
            value={{
                appointments: appointmentsByDay,
                handleAddAppointment
            }}
            >{children}
        </AppointmentsContext.Provider>
    )
}



