import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { FaChevronRight } from "react-icons/fa6";
import { stringMonth, stringYear } from "../../lib/utils";
import ClientDetailsFieldModal from "./ClientDetailsFieldModal";
import { useDisclosure } from "@nextui-org/modal";
import { Client } from "@prisma/client";

export default function ClientsDetailsField(props: {
    selectedClient: Client | undefined,
    field: string;
    label: string;
}) {

const dateOfBirth: Date | undefined = props.selectedClient ? new Date(props.selectedClient.dateOfBirth) : undefined

const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

if(!props.selectedClient) {
  return null
}
else {
    return (
    <a className="h-16 block hover:bg-gray-50 px-5">
      <Divider className="" />
      <div className="flex items-center h-full">
        <div className="text-xs basis-1/5">{props.label}</div>
        <div className="basis-3/5">
          {field(props.field, props.selectedClient)}
        </div>
        <div className="basis-1/5 flex justify-end">

          <Button radius="full" className="w-8 h-8 p-0 min-w-0" onPress={onOpen}>
            <FaChevronRight />
          </Button>

         <ClientDetailsFieldModal field={props.field} selectedClient={props.selectedClient} isOpen={isOpen} onOpenChange={onOpenChange}></ClientDetailsFieldModal>

        </div>
      </div>
    </a>
  );
}

}
