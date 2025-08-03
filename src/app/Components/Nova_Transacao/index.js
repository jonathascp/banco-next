import { useEstado } from "@/app/Context/EstadoContext";
import styles from "./Nova_Transacao.module.css";
export default function NovaTransacao()
{
    const {setEstado} = useEstado();
    return (
        <button className={styles.btn} onClick={ () => {
            setEstado("inicio");
        }
        }> Nova transação </button>
    )
}