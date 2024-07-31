"use client";

import { TUsersContext, TUsersContextProviderProps } from "@/src/lib/types";
import { useState, createContext } from "react";

export const UsersContext = createContext<TUsersContext | null>(null)

export default function UsersContextProvider({ data, children } : TUsersContextProviderProps) {

    const [users, setUsers] = useState(data)

    //derived state

    // events handlers / actions


    return(
        <UsersContext.Provider
            value={{
                users: users,

            }}
            >{children}
        </UsersContext.Provider>
    )
}
