import { Input } from "@nextui-org/input";
import { UseClientsContext } from "../../hooks/hooks";

export default function ClientsAddForm() {

    const clientContext = UseClientsContext()

    const handleSubmit = ((e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const newFormData = new FormData(e.currentTarget)

        const newClient = {
            name: newFormData.get("name") as string,
            surname: newFormData.get("surname") as string,
            age: newFormData.get("age") as string,
            label: newFormData.get("name") + ' ' + newFormData.get("surname"),
            key: Math.random().toString() as string,
        }
        console.log(newClient)
        clientContext.handleAddClient(newClient)

    })
    


    return(
        <form onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        id="addClient">
            <Input name="name" type="text" label="nome">
            </Input>
            <Input name="surname" type="text" label="cognome">
            </Input>
            <Input name="age" type="number" label="età">
            </Input>
        </form>
    )
} 