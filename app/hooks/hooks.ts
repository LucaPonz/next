import { AppointmentsContext } from "@/contexts/AppointmentsContextProvider"
import { useContext } from "react"

export function UseAppointmentsContext() {
    const context = useContext(AppointmentsContext)
    if (!context) {
        throw new Error("usePetContext must be used within a PetContextProvider");
      }
    
      return context;
}