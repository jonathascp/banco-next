import styles from "./Card_Transacao.module.css";
export default function CardTransacao({ valor, onChange, inputRef, funcaoBotao,descricao,tipo }) {
    const formatarValor = (v) => {
        const valorFormatado = v / 100;
        return valorFormatado.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <p>{descricao}</p>
            <div className="d-flex flex-row align-items-center">
                <input
                    className={styles.input}
                    ref={inputRef}
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    value={formatarValor(valor)}
                    onChange={onChange}
                    placeholder="R$ 0,00"
                />
                </div>
                <button className={styles.button} onClick={funcaoBotao}>{tipo}</button>
        </div>
    )
}