
import { useEstado } from "@/app/Context/EstadoContext";
import { useSaldo } from "@/app/Context/SaldoContext";
import { useLocalStorage } from "@/app/Hooks/useLocalStorage";
import { handleTransacao } from "@/app/Utils/handleTransacao";
import { useEffect } from "react";
export default function Carregamento({ tipoTransacao, valor, finalVerificacao }) {
    const { saldo } = useSaldo();
    const {setEstado} = useEstado();
    const [extrato, setExtrato] = useLocalStorage("extrato", []);
    const { depositarSaldo, sacarSaldo } = useSaldo();

    useEffect(() => {
        const finalTransacao = handleTransacao(valor, tipoTransacao, setExtrato, depositarSaldo, sacarSaldo, saldo);
        finalVerificacao(tipoTransacao);

        let time = setTimeout(() => {
            finalTransacao.estado === "erro" ? setEstado("erro") : setEstado("sucesso")
        },6000);

        return () => clearTimeout(time);
    },[]);

    return (
        <div>
            <h1>Aguarde</h1>
            <p>Estamos finalizando sua transação.</p>
        </div>

    )
}