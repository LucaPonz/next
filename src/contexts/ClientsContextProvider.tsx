"use client";

import { TClientsContext, TClientsContextProviderProps } from "@/src/lib/types";
import { useState, createContext } from "react";
import { Client } from "@prisma/client";

export const ClientsContext = createContext<TClientsContext | null>(null)

export default function ClientsContextProvider({ data, children } : TClientsContextProviderProps) {

    const [clients, setClients] = useState(data)
    const [selectedClientId, setSelectedClientId] = useState<string | null>(null)

    //derived state
    const selectedClient = clients.find((client) => client.id === selectedClientId)

    // events handlers / actions
    const handleChangeSelectedClientId = (id: string) => {
        setSelectedClientId(id)
    }

    const handleAddClient = (newClient: Client) => {
        setClients(prev => [...prev, newClient])
    }

    const handleDeleteClient = (selectedClientId : string) => {
        setClients(prev => prev.filter((item) => item.id !== selectedClientId))
    }

    return(
        <ClientsContext.Provider
            value={{
                clients: clients,
                handleChangeSelectedClientId,
                handleAddClient,
                handleDeleteClient,
                selectedClient
            }}
            >{children}
        </ClientsContext.Provider>
    )
}



