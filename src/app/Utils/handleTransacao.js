
export function handleTransacao(valor, tipoTransacao, setExtrato, depositar, sacar, saldo) {
    const date = new Date();
    const dia = date.getDate().toString().padStart(2, "0");
    const mes = (date.getMonth() + 1).toString().padStart(2, "0");
    const data = `${dia}/${mes}`;
    const valorAlteracao = valor / 100;
    const relatorio = {
        id: Math.round(Math.random() * 1000),
        data: data,
        transacao: valorAlteracao,
        tipo: tipoTransacao
    }

    try {
        if (tipoTransacao === "sacar" && Number(valor.toLocaleString("pt-br",{minimumFractionDigits: 2,maximunFractionDigits: 2})) > saldo.toLocaleString("pt-br",{minimumFractionDigits: 2,maximunFractionDigits: 2})) {
            throw new Error("Saldo insuficiente para saque.");
        }
        
        setExtrato(prev => [...prev, relatorio]);
        tipoTransacao === "depositar" ? depositar(valorAlteracao) : sacar(valorAlteracao);
        
       return {transacao: "Transação feita com sucesso.", estado: "sucesso", tipoTransacao: tipoTransacao === "depositar" ? `Você depositou ${valor}`: `Você sacou ${valor}`};

    }
    catch (erro) {
       
        return {transacao: "Erro ao realizar transação. Saldo insuficiente.", estado: "erro"};
    }

}