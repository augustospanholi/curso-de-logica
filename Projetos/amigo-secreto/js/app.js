let nomes = [];

function adicionar() {
    let nomeSelecionado = document.getElementById("nome-amigo").value.trim();

    if (nomeSelecionado == "") {
        alert("Digite um nome!");
        return;
    }

    if (nomes.includes(nomeSelecionado)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    nomes.push(nomeSelecionado);
    atualizarLista();
    document.getElementById("nome-amigo").value = "";
}

function atualizarLista() {
    let listaAmigos = document.getElementById("lista-amigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < nomes.length; i++) {
        listaAmigos.innerHTML += `<span onclick="removerAmigo(${i})">${nomes[i]}</span> `;
    }
}

function removerAmigo(indice) {
    nomes.splice(indice, 1);
    atualizarLista();
}

function sortear() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    let listaSorteio = document.getElementById("lista-sorteio");
    listaSorteio.innerHTML = "";

    embaralhar(nomes);

    for (let i = 0; i < nomes.length; i++) {
        let amigoAtual = nomes[i];
        let amigoSorteado;

        if (i == nomes.length - 1) {
            amigoSorteado = nomes[0];
        } else {
            amigoSorteado = nomes[i + 1];
        }

        listaSorteio.innerHTML += `${amigoAtual} -> ${amigoSorteado}<br>`;
    }
}

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        let indiceAleatorio = Math.floor(Math.random() * (i + 1));

        let temp = lista[i];
        lista[i] = lista[indiceAleatorio];
        lista[indiceAleatorio] = temp;
    }
}

function reiniciar() {
    nomes = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    document.getElementById("nome-amigo").value = "";
}