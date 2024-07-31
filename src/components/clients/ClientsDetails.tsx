"use client";

import { Image } from "@nextui-org/image";
import { UseClientsContext } from "../../hooks/hooks";
import ClientsDeleteButton from "./ClientsDeleteButton";
import ClientsDetailsHistory from "./ClientsDetailsHistory";
import ClientsDetailsAppointments from "./ClientDetailsAppointments";
import CLientsDetailsInfo from "./ClientsDetailsInfo";

export default function ClientsDetails() {
  
  const { selectedClient } = UseClientsContext();

  return (
    <section className="w-full h-full flex flex-col">
      {selectedClient ? 
        <>
          <header className="bg-gray-100 flex items-center justify-between p-5 rounded-tl-md rounded-tr-md">
            <div className="flex items-center">
                <Image
                  src="https://picsum.photos/seed/picsum/200/300"
                  alt="client photo"
                  width={75}
                  height={75}
                  radius="full"
                  className="bg-gray-200 h-[75px] w-[75px]"
                ></Image>
                <h3 className="ml-5 text-3xl font-semibold leading-7 text-gray-800">
                  {selectedClient?.name} {selectedClient?.surname}
                </h3>
            </div>
              <ClientsDeleteButton
                selectedClientId={selectedClient?.id}
              ></ClientsDeleteButton>
          </header>

          <CLientsDetailsInfo selectedClient={selectedClient}></CLientsDetailsInfo>

          <ClientsDetailsAppointments></ClientsDetailsAppointments>

          <ClientsDetailsHistory></ClientsDetailsHistory>

          <footer className="p-5 self-end mt-auto">
            
          </footer>
        </>
       : <div className="p-5">Nessun cliente selezionato</div>}
    </section>
  );
}
