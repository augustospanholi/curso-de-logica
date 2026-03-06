function alterarStatus(numero) {
    let statusClique = document.getElementById(`game-${numero}`)
    let botaoClique = statusClique.querySelector(".dashboard__item__button")
    let imagemClique = statusClique.querySelector(".dashboard__item__img")

    if (botaoClique.classList.contains("dashboard__item__button--return")) {

        // confirmação apenas para devolver
        if (!confirmarStatus()) {
            return;
        }

        botaoClique.classList.remove("dashboard__item__button--return");
        imagemClique.classList.remove("dashboard__item__img--rented");
        botaoClique.textContent = "Alugar";

            } else {
            botaoClique.classList.add("dashboard__item__button--return");
            imagemClique.classList.add("dashboard__item__img--rented");
            botaoClique.innerHTML = "Devolver"
        }
    contarJogosAlugados();
}

function confirmarStatus() {
    return confirm("Você confirma?")
}

function contarJogosAlugados() {
    let jogosAlugados = document.querySelectorAll(".dashboard__item__img--rented");
    console.log("Jogos alugados:", jogosAlugados.length);
}
