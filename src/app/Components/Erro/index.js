import NovaTransacao from "../Nova_Transacao";

export default function Erro() {
    return (
        <div>
            <h1>Erro</h1>
            <p>Ocorreu um erro ao processar a transação.</p>
            <div>
                <NovaTransacao />
            </div>
        </div>
    )
}