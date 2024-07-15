import { AppointmentsContext } from "@/src/contexts/AppointmentsContextProvider"
import { ClientsContext } from "@/src/contexts/ClientsContextProvider";
import { useContext } from "react"

export function UseAppointmentsContext() {
    const context = useContext(AppointmentsContext)
    if (!context) {
        throw new Error("useAppointmentsContext must be used within a AppointmentsContextProvider");
      }
    
    return context;
}

export function UseClientsContext() {
    const context = useContext(ClientsContext)
    if (!context) {
        throw new Error("useClientsContext must be used within a ClientsContextProvider");
      }
    
    return context;
}
