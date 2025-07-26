"use client";
import { useLocalStorage } from "../Hooks/useLocalStorage"

export default function Page() {
    const [extrato] = useLocalStorage("extrato",[]);
    return (
        <div className="col">
            <h2>Extrato</h2>
            <div className="w-50 border border-2 border-black">
               {extrato.map(e => 
                <div className="d-flex flex-row justify-content-around align-items-center">
                    <p>{e.id}</p>
                    <p>{e.data}</p>
                    <p>{e.tipo}</p>
                    <p>{e.tipo === "deposito" ? "+" : "-"} {e.transacao.toLocaleString("pt-BR",{style: "currency",currency: "BRL"})}</p>
                </div>
               )}
            </div>
        </div>
    )
}