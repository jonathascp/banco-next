"use client";

const { createContext, useState, useContext } = require("react");

const EstadoContext = createContext();

export const EstadoProvider = ({ children }) => {
    const [ estado , setEstado] = useState("inicio");

    return (
        <EstadoContext.Provider value={{setEstado,estado}}>
            {children}
        </EstadoContext.Provider>
    )
}

export const useEstado = () => {
    return useContext(EstadoContext);
}