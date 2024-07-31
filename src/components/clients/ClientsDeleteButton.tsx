import { Button } from "@nextui-org/button";
import { UseClientsContext } from "../../hooks/hooks";

export default function ClientsDeleteButton(props:{
    selectedClientId: string,
}) {
    const {handleDeleteClient} = UseClientsContext()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleDeleteClient(props.selectedClientId)
    }

    return(
        <form onSubmit={handleSubmit} id="deleteClient">
            <Button type="submit" form="deleteClient" color="danger">Check Out</Button>
        </form>
        
    )
}