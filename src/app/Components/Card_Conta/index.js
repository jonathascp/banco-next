"use client";
import { useState } from "react";
import styles from "./CardConta.module.css";

export default function CardConta({value})
{
    const [visible,setVisible] = useState(true);
    const changeType = () => {
        setVisible(prev => !prev);   
    }

    return (
        <div className={`${styles.container} rounded-4 d-flex flex-column mt-4 m-auto`}>
            <div className={`${styles.container_top}`}>
                <p className="m-0">Conta</p>
                <button>Ver extrato</button>
            </div>
            <div className={styles.saldo}>
                <div className={`${styles.saldo_valor} col`}>
                    <p className="m-0 fs-6">Saldo em conta</p>
                    <input className={styles.saldo_valor_input} disabled value={value} type={visible ? "text" : "password"}/>
                </div>
                <button onClick={changeType} className={styles.verSaldo}>Ver</button>
            </div>
        </div>
    )
}