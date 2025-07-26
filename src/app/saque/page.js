"use client";
import { useRef, useState } from "react";
import styles from "./Saque.module.css";
import CardTransacao from "../Components/Card_Transacao";
import Carregamento from "../Components/Carregamento";
import { useSaldo } from "../Context/SaldoContext";
import Erro from "../Erro";
import Sucesso from "../Sucesso";

export default function Page() {
    const [estadoPagina, setEstadoPagina] = useState("inicio");
    const [transacao, setTransacao] = useState("");
    const [depositar, setDepositar] = useState(false);
    const [valor, setValor] = useState(0);
    const [tipoVerificado,setTipoVerificado] = useState({});
    const {saldo} = useSaldo();
    const inputRef = useRef(null);

    const handleChange = (e) => {
        const valorBruto = e.target.value.replace(/\D/g, "");
        setValor(valorBruto);

        setTimeout(() => {
            const input = inputRef.current;
            if (input) {
                const length = input.value.length;
                input.setSelectionRange(length, length);
            }
        }, 0);
    }

    return (
        <>
            {estadoPagina === "carregando" && <Carregamento valor={valor} tipoTransacao={transacao} finalVerificacao={(e) => setTipoVerificado(e)} estadoPagina={(e) => setEstadoPagina(e)} />}
            
            {estadoPagina === "erro" && <Erro />}
            {estadoPagina === "sucesso" && <Sucesso />}
            {estadoPagina === "inicio" && <div className={`m-auto mt-4 w-75`}>
                <h2 className="text-center mb-4">Saque/Depósito</h2>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <button onClick={() => {
                            setDepositar(false);
                        }}
                            className={`${styles.button} ${depositar ? "" : styles.selected}`}>
                            Sacar
                        </button>

                        <button onClick={() => {
                            setDepositar(true)
                        }}
                            className={`${styles.button} ${depositar ? styles.selected : ""}`}>
                            Depositar
                        </button>
                    </div>
                    {depositar == true ?
                        <CardTransacao
                            inputRef={inputRef}
                            onChange={handleChange}
                            valor={valor}
                            funcaoBotao={() => {
                                setEstadoPagina("carregando")
                                setTransacao("depositar")
                            }}
                            descricao="Valor a ser depositado"
                            tipo="Depositar"
                        />
                        :
                        <CardTransacao
                            inputRef={inputRef}
                            onChange={handleChange}
                            valor={valor}
                            funcaoBotao={() => {
                                setEstadoPagina("carregando")
                                setTransacao("sacar")
                            }}
                            descricao="Valor a ser sacado"
                            tipo="Sacar"
                        />
                    }
                </div>
            </div>}
        </>

    )

}