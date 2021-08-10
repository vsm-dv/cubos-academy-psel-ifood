function solucao(primeiraLetra, segundaLetra, palavras) {
    let cont = 0;
    let palavras2 = [];
    for (let item of palavras) {
        if (item[0] == primeiraLetra && item[1] == segundaLetra) {
            palavras2.push(item);
            cont++;
        }
    }
    if (cont > 0) {
        for (let item of palavras2) {
            console.log(item);
        }
    }
    else {
        console.log("NENHUMA");
    }
}