
import { useEstado } from "@/app/Context/EstadoContext";
import { useSaldo } from "@/app/Context/SaldoContext";
import { useLocalStorage } from "@/app/Hooks/useLocalStorage";
import { handleTransacao } from "@/app/Utils/handleTransacao";
import { useEffect, useRef } from "react";
export default function Carregamento({ tipoTransacao, valor, finalVerificacao }) {
    
    const {setEstado} = useEstado();
    const [extrato, setExtrato] = useLocalStorage("extrato", []);
    const { saldo,depositarSaldo, sacarSaldo } = useSaldo();
    const executado = useRef(false);
    useEffect(() => {
        let time;
        if(!executado.current) {
            const finalTransacao = handleTransacao(valor, tipoTransacao, setExtrato, depositarSaldo, sacarSaldo, saldo);
        finalVerificacao(tipoTransacao);

        time = setTimeout(() => {
            finalTransacao.estado === "erro" ? setEstado("erro") : setEstado("sucesso")
        },6000);
        executado.current = true;
        
        }
        return () =>{
            if(time) clearTimeout(time);
        } 
    },[]);

    return (
        <div>
            <h1>Aguarde</h1>
            <p>Estamos finalizando sua transação.</p>
        </div>

    )
}