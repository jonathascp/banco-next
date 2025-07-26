"use client";
import { useEffect, useState } from "react";

export function useLocalStorage(chave, valorInicial) {
    const [valor, setValor] = useState(() => {
        try {
            const getItem = localStorage.getItem(chave);
            return getItem ? JSON.parse(getItem) : valorInicial;
        }
        catch (erro) {
            console.error("Erro :" + erro);
            return valorInicial;
        }

    });

    useEffect(() => {
        try
        {
             localStorage.setItem(chave,JSON.stringify(valor));
        }
        catch(erro)
        {
            console.error("Erro :" + erro);
        }
       
    }, [chave, valor]);

    return [valor,setValor];
}

