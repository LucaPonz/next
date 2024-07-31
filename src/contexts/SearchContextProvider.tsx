"use client";

import { TSearchContext, TSearchContextProviderProps } from "@/src/lib/types";
import { useState, createContext } from "react";

export const SearchContext = createContext<TSearchContext | null>(null)

export default function SearchContextProvider({ data, children } : TSearchContextProviderProps) {

    const [search, setSearch] = useState("")

    // events handlers / actions

    const handleChangeSearch = (newValue: string) => {
        setSearch(newValue)
    } 

    return(
        <SearchContext.Provider
            value={{
                search: search,
                handleChangeSearch
            }}
            >{children}
        </SearchContext.Provider>
    )
}