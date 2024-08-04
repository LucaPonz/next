"use client";

import {
  TAppointmentsContext,
  TAppointmentsContextProviderProps,
} from "@/src/lib/types";
import { Appointment } from "@prisma/client";
import { createContext, useState } from "react";

export const AppointmentsContext = createContext<TAppointmentsContext | null>(
  null
);

export default function AppointmentsContextProvider({
  data,
  children,
}: TAppointmentsContextProviderProps) {
  
  const [appointmentsOfTheWeek, setAppointmentsOfTheWeek] = useState(data)

  // derived state
  
  // events handlers / actions

  const handleSetAppointmentsOfTheWeek = (updatedAppointments: Appointment[][]) => {
    setAppointmentsOfTheWeek(updatedAppointments)
  }

  return (
    <AppointmentsContext.Provider
      value={{
        appointmentsOfTheWeek: data,
        handleSetAppointmentsOfTheWeek
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
}
