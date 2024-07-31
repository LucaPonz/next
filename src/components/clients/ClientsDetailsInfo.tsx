import { Client } from "@prisma/client";
import ClientsDetailsField from "./ClientsDetailsField";

export default function CLientsDetailsInfo(props:{
    selectedClient: Client
}) {
    return(
        <div className="">
              <h2 className="text-2xl px-5 mt-12 pb-6">Informazioni di base</h2>
              <ClientsDetailsField
                selectedClient={props.selectedClient}
                field={"name"}
                label={"Nome"}
              ></ClientsDetailsField>
              <ClientsDetailsField
                selectedClient={props.selectedClient}
                field={"date-of-birth"}
                label={"Data di nascita"}
              ></ClientsDetailsField>
              <ClientsDetailsField
                selectedClient={props.selectedClient}
                field={"telephone"}
                label={"Telefono"}
              ></ClientsDetailsField>
              <ClientsDetailsField
                selectedClient={props.selectedClient}
                field={"email"}
                label={"email"}
              ></ClientsDetailsField>
              <ClientsDetailsField
                selectedClient={props.selectedClient}
                field={"profession"}
                label={"Professione"}
              ></ClientsDetailsField>
          </div>
    )
}