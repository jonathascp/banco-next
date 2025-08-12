import NovaTransacao from "../Nova_Transacao";
import styles from "./Sucesso.module.css";
export default function Sucesso() {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" className={`${styles.svg} bi bi-check-lg`} viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
            </svg>
            <p>Transação realizada com sucesso!</p>
            <div>
                <NovaTransacao />
            </div>

        </div>
    )
}