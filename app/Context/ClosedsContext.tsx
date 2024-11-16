'use client'
import React from 'react'
import { createContext, ReactNode, FC, useState, useEffect } from "react";

interface PropsCloseds {
    Closed: string[]
    setClosed: React.Dispatch<React.SetStateAction<string[]>>;
    isClosed: (Foldername: string) => boolean;
    HandleCloseds: (Foldername: string) => void; 
}

const ClosedsContext = createContext< PropsCloseds | undefined>(undefined);

const Provider: FC<{children: ReactNode}> = ({ children }) => {

    const GetData = () => {
        const LocalData = localStorage.getItem("Closeds");
        return LocalData ? JSON.parse(LocalData) : []
    }

    const [Closed, setClosed] = useState<string[]>(GetData())


    useEffect(() => {
        localStorage.setItem("Closeds", JSON.stringify(Closed))
    }, [Closed])

    const isClosed = (Foldername: string) => {
        if(Closed?.includes(Foldername)){
            return true
        }
        else{
            return false
        }

    }

    const HandleCloseds = (Foldername: string) => {
        setClosed((prev) => {
            const newarray = [...prev, Foldername]
            return newarray
        });
    }    

    return(
        <ClosedsContext.Provider value={{Closed, setClosed, isClosed, HandleCloseds}}>
            {children}
        </ClosedsContext.Provider> 
    )


}


export { Provider };
export default ClosedsContext