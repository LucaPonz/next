import { Client } from "@prisma/client"
import Card from "../Card"

export default function UserAppointmentsInfo(props:{
    client: Client
}) {
    return(
        <Card>
            <h2 className="text-2xl px-5 mt-12 pb-6">Appuntamenti</h2>
            <div>Ciao</div>
        </Card>
    )
}