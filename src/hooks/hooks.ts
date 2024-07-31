import { AppointmentsContext } from "@/src/contexts/AppointmentsContextProvider"
import { ClientsContext } from "@/src/contexts/ClientsContextProvider";
import { useContext } from "react"
import { SearchContext } from "../contexts/SearchContextProvider";
import { UsersContext } from "../contexts/UsersContexProvider";

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

export function UseSearchContext() {
    const context = useContext(SearchContext)
    if (!context) {
        throw new Error("useSearchContext must be used within a SearchContextProvider");
      }
    
    return context;
}

export function useUsersContext() {
  const context = useContext(UsersContext)
  if (!context) {
    throw new Error("useUserContext must be used within a UsersContextProvider");
  }

  return context;
}
