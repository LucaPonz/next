"use client";

import { TAppointment, TAppointmentsContext, TAppointmentsContextProviderProps } from "@/src/lib/types";
import { useState, createContext } from "react";

export const AppointmentsContext = createContext<TAppointmentsContext | null>(null)

export default function AppointmentsContextProvider({ appointments, children } : TAppointmentsContextProviderProps) {

    const [appointmentsByDay, setAppointmentsByDay] = useState(appointments)


    // events handlers / actions

    const handleAddAppointment = async (newAppointment: TAppointment) => {
        setAppointmentsByDay(prev => [...prev, newAppointment])
    }   
    
    const handleDeleteAppointment = async (appointmentIds: string[] | string) => {
        const newArray = [...appointmentsByDay]

        if (typeof appointmentIds === 'string') {
                newArray.map((item , index) => {
                    if(item.id === appointmentIds)
                        newArray.splice(index, 1);
                })
        }

        else {
            appointmentIds.map((id) => {
                newArray.map((item , index) => {
                    if(item.id === id)
                        newArray.splice(index, 1);
                })
            })
        }

        setAppointmentsByDay(newArray)
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



