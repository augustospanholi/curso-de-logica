function comprar() {
    let ingressoSelecionado = document.getElementById("tipo-ingresso").value;
    let quantidadeIngresso = parseInt(document.getElementById("qtd").value)
    let idElemento = "qtd-" + ingressoSelecionado;
    let elemento = document.getElementById(idElemento);
    let quantidadeDisponivel = parseInt(elemento.innerText);

    if (isNaN(quantidadeIngresso) || quantidadeIngresso <= 0){
        alert("Quantidade inválida");
        return
    }
    if (quantidadeIngresso > quantidadeDisponivel){
        alert(`Quantidade indisponível para ${ingressoSelecionado}!`);
    } else {
        elemento.innerText = quantidadeDisponivel - quantidadeIngresso;
        document.getElementById("qtd").value = "";
    }
}