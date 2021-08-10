function solucao(cor1, cor2) {
    if (cor1 == "azul") {
        if (cor2 == "azul") {
            console.log("azul");
        }
        else if (cor2 == "amarelo") {
            console.log("verde");
        }
        else {
            console.log("roxo");
        }
    }
    else if (cor1 == "amarelo") {
        if (cor2 == "azul") {
            console.log("verde");
        }
        else if (cor2 == "amarelo") {
            console.log("amarelo");
        }
        else {
            console.log("laranja");
        }
    }
    else {
        if (cor2 == "azul") {
            console.log("roxo");
        }
        else if (cor2 == "amarelo") {
            console.log("laranja");
        }
        else {
            console.log("vermelho");
        }
    }
}