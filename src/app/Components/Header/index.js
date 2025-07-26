import styles from "./Header.module.css";
export default function Header()
{
    return (
        <div className={`${styles.banner} container-fluid d-flex flex-row justify-content-between align-items-end`}>
            <div className="col">
                <h1>Banco Next</h1>
                <p>Seu banco next.</p>
            </div>
            <div className="col text-end">
                <p>Olá Jonathas.</p>
            </div>
        </div>
    )
}