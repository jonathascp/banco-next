
import { useEstado } from "@/app/Context/EstadoContext";
import { useSaldo } from "@/app/Context/SaldoContext";
import { useLocalStorage } from "@/app/Hooks/useLocalStorage";
import { handleTransacao } from "@/app/Utils/handleTransacao";
import { useEffect, useRef } from "react";
export default function Carregamento({ tipoTransacao, valor, finalVerificacao }) {

    const { setEstado } = useEstado();
    const [extrato, setExtrato] = useLocalStorage("extrato", []);
    const { saldo, depositarSaldo, sacarSaldo } = useSaldo();
    const executado = useRef(false);

    useEffect(() => {
       
        const finalTransacao = handleTransacao(valor, tipoTransacao, setExtrato, depositarSaldo, sacarSaldo, saldo);
        finalVerificacao(tipoTransacao);
        
        const time = setTimeout(() => {
            finalTransacao.estado === "erro" ? setEstado("erro") : setEstado("sucesso")
        }, 6000);
        return () => clearTimeout(time);
    }, [])

    // useEffect(() => {
    //     let time;
    //     let finalTransacao;
    //     if(!executado.current) {
    //         finalTransacao = handleTransacao(valor, tipoTransacao, setExtrato, depositarSaldo, sacarSaldo, saldo);
    //         finalVerificacao(tipoTransacao);


    //         executado.current = true;

    //     }
    //     time = setTimeout(() => {
    //         finalTransacao.estado === "erro" ? setEstado("erro") : setEstado("sucesso")
    //     },6000);
    //     return () =>{
    //         if(time) clearTimeout(time);
    //     } 
    // },[]);

    return (
        <div>
            <h1>Aguarde</h1>
            <p>Estamos finalizando sua transação.</p>
        </div>

    )
}