"use client";

import { TClientsContext, TClientsContextProviderProps } from "@/src/lib/types";
import { useState, createContext } from "react";

export const ClientsContext = createContext<TClientsContext | null>(null)

export default function AppointmentsContextProvider({ clients, children } : TClientsContextProviderProps) {

    const [clientsByDay, setClients] = useState(clients)


    // events handlers / actions

    


    return(
        <ClientsContext.Provider
            value={{
                clients: clients,
            }}
            >{children}
        </ClientsContext.Provider>
    )
}



