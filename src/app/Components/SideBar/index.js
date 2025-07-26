import Link from "next/link";
import styles from "./SideBar.module.css";

export default function SideBar()
{
    return (
        <div className={styles.container}>
            <div className={`d-flex flex-column justify-content-center align-items-start gap-4`}>
                <Link className={styles.container_link} href={"/"}>Início</Link>
                <Link className={styles.container_link} href={"/saque"}>Saque/Deposito</Link>
                <Link className={styles.container_link} href={"/extrato"}>Extrato</Link>
            </div>
        </div>
    )
}