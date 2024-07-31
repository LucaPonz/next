"use client"

import { Input } from "@nextui-org/input";
import { UseSearchContext } from "../../hooks/hooks";

export default function ClientSearchForm() {

    const searchContext = UseSearchContext()


    return(
        <form action="" className="h-full w-full">
            <Input radius="sm"
            placeholder="Cerca Clienti"
            type="search"
            onChange={(e) => searchContext.handleChangeSearch(e.target.value)}
            value={searchContext.search}>
            
            </Input>
        </form>
    )
}