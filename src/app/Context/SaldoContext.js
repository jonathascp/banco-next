"use client";
const { createContext, useState, useContext } = require("react");

const SaldoContext = createContext();

export const SaldoProvider = ({ children }) => {
    const [saldo, setSaldo] = useState(0);

    if(saldo < 0) {
        setSaldo(0);
    }
    const sacarSaldo = (valor) => {
        setSaldo(prev => prev -= valor);
    }

    const depositarSaldo = (valor) => {
        setSaldo(prev => prev += valor);
    }
    return (
        <SaldoContext.Provider value={{ saldo,sacarSaldo,depositarSaldo}}>
            {children}
        </SaldoContext.Provider>
    )
}

export const useSaldo = () => {
    return useContext(SaldoContext);
}