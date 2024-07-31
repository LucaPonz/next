import { Divider } from "@nextui-org/divider";
import { stringMonth, stringYear } from "../../lib/utils";
import { Client } from "@prisma/client";

export default function UserDetailsField(props: {
    client: Client | undefined,
    field: string;
    label: string;
}) {

const dateOfBirth: Date | undefined = props.client ? new Date(props.client.dateOfBirth) : undefined

const field = (field: string, selectedClient: Client) => {
  switch (field) {
    case "name":
      return(
        <div>{selectedClient.name} {selectedClient.surname}</div>
      )
      break;
    case "date-of-birth":
      return(
        <div>{dateOfBirth ? <div>{dateOfBirth.getDate()} / {stringMonth(dateOfBirth)} / {stringYear(dateOfBirth)}</div> : null}</div>
      )
      break;
    case "telephone":
      return(
        <div>{selectedClient.phone}</div>
      )
      break;
    case "email":
      return(
        <div>{selectedClient.clientEmail}</div>
      )
      break;
    case "profession":
      return(
        <div>{selectedClient.profession}</div>
      )
      break;
  }
}

if(!props.client) {
  return null
}
else {
    return (
    <a className="h-16 block hover:bg-gray-50 px-5">
      <Divider className="" />
      <div className="flex items-center h-full">
        <div className="text-xs basis-1/5">{props.label}</div>
        <div className="basis-3/5">
          {field(props.field, props.client)}
        </div>
        <div className="basis-1/5 flex justify-end">
        </div>
      </div>
    </a>
  );
}

}
