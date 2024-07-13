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
    
    const handleDeleteAppointment = async (appointmentId: string) => {
        const index = appointmentsByDay.findIndex(
            (item) => item.id === appointmentId
        );
        if (index !== -1) {
            const newArray = [
            ...appointmentsByDay.slice(0, index),
            ...appointmentsByDay.slice(index + 1),
            ];
            setAppointmentsByDay(newArray);
        }
    }

    return(
        <AppointmentsContext.Provider
            value={{
                appointments: appointmentsByDay,
                handleAddAppointment,
                handleDeleteAppointment
            }}
            >{children}
        </AppointmentsContext.Provider>
    )
}



