function adicionar() {

    // 1 pegar produto selecionado
    let produtoSelecionado = document.getElementById("produto");
    let produto = produtoSelecionado.value;

    // 2 separar nome e preço
    let partes = produto.split(" - ");
    let nome = partes[0];
    let preco = parseInt(partes[1].replace("R$", ""));

    // 3 adicionar quantidade
    let quantidade = parseInt(document.getElementById("quantidade").value);

    // 4 calcular subtotal
    if (isNaN(quantidade) || quantidade <= 0) {
        return;
    }
    let subtotal = preco * quantidade;

    // 5 criar lista do carrinho
    let carrinho = document.getElementById("lista-produtos")
    let produtoCarrinho = `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${subtotal}</span>
        </section>`;
    carrinho.innerHTML += produtoCarrinho;

    // 6 mudar valor total
    let totalElemento = document.getElementById("valor-total");
    let totalAtual = parseInt(totalElemento.innerHTML.replace("R$", ""));
    let novoTotal = totalAtual + subtotal;
    totalElemento.innerHTML = `R$${novoTotal}`;
    //7 Limpar o input depois de adicionar
    document.getElementById("quantidade").value = "";
}

function limpar(){
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$0"
    document.getElementById("quantidade").value = "";
}

// evento para mudar quantidade ao trocar produto
document.getElementById("produto").addEventListener("change", function(){
    document.getElementById("quantidade").value = 1;
});


