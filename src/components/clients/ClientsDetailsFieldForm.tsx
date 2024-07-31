import { Input } from "@nextui-org/input";
import { DatePicker } from "@nextui-org/date-picker";
import { CalendarDate } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { useState } from "react";
import { Client } from "@prisma/client";

export default function ClientsDetailsFieldForm(props:{
    field: string,
    selectedClient: Client
})
    {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        console.log(e.currentTarget)
    }

    let formatter = useDateFormatter({dateStyle: "full"});

    const birth = new Date(props.selectedClient.dateOfBirth)

    const [value, setValue] = useState<CalendarDate | null>(props.selectedClient ? new CalendarDate(birth.getFullYear(), birth.getMonth() + 1, birth.getDate()) : null);

    switch(props.field) {
        case "name":
            return(
                <form onSubmit={handleSubmit} id="" className="w-full flex flex-col gap-4">
                    <Input name="name" type="text" label="nome" placeholder={props.selectedClient?.name}></Input>
                    <Input name="surname" type="text" label="cognome" placeholder={props.selectedClient?.surname}></Input>
                </form>
            )
            break
        case "date-of-birth":
            return (
              <form
                onSubmit={handleSubmit}
                id=""
                className="w-full flex flex-col gap-4"
              >
                  <div className="w-full flex flex-col gap-y-2">
                    <DatePicker
                      className=""
                      label="Data di nascita"
                      value={value}
                      onChange={setValue}
                    />
                    {/* <p className="text-default-500 text-sm">
                      Selected date:{" "}
                      {value
                        ? formatter.format(value.toDate(getLocalTimeZone()))
                        : "--"}
                    </p> */}
                  </div>
               
              </form>
            );
            break
        case "telephone":
            return(
                <form onSubmit={handleSubmit} id="" className="w-full flex flex-col gap-4">
                    <Input name="telephone" type="tel" label="Telefono" placeholder={props.selectedClient?.phone}></Input>
                </form>
            )
            break
        case "email":
            return(
                <form onSubmit={handleSubmit} id="" className="w-full flex flex-col gap-4">
                    <Input name="" type="email" label="nome" placeholder={props.selectedClient?.clientEmail}></Input>
                </form>
            )
            break
        default:
            return(
                <div>ciao</div>
            )
    }

}