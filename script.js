
let visor = document.getElementById("visor");

function adicionar(valor) {

    if (visor.value === "0" || visor.value === "Erro") {
        visor.value = valor;
    } else {
        visor.value += valor;
    }

}

function limpar() {
    visor.value = "0";
}

function apagar() {

    visor.value = visor.value.slice(0, -1);

    if (visor.value === "") {
        visor.value = "0";
    }

}

function calcular() {

    try {

        visor.value = Function(
            '"use strict"; return (' + visor.value + ')'
        )();

        if (!Number.isFinite(Number(visor.value))) {
            visor.value = "Erro";
        }

    } catch (erro) {

        visor.value = "Erro";

    }

}
