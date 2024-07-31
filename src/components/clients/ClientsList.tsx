"use client"

import {
    Listbox,
    ListboxItem
  } from "@nextui-org/listbox";
import { UseClientsContext, UseSearchContext } from "../../hooks/hooks";
import { SearchContext } from "../../contexts/SearchContextProvider";

export default function ClientsList() {
    const searchContext = UseSearchContext()
    const clientsContext = UseClientsContext()

    const filteredClients = (clientsContext.clients).filter((client) => {
      return client.name.includes(searchContext.search)
    })

    return(

      <Listbox
        items={filteredClients}
        aria-label="Dynamic Actions"
        onAction={(key) => {clientsContext.handleChangeSelectedClientId(key as string)}}
      >
        {(client) => (
          <ListboxItem
            key={client.id}
            
            // color={client.key === "delete" ? "danger" : "default"}
            // className={client.key === "delete" ? "text-danger" : ""}
          >
            <span className="text-base">
              {client.name} {client.surname}
            </span>
          </ListboxItem>
        )}
      </Listbox>

    )
}