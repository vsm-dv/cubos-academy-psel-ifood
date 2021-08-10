function solucao(sequencia) {
    let direita = 0;
    let esquerda = 0;
    let carrosselEsquerda = [0, 6, 5, 4, 3, 2, 1]
    for (let i = 0; i < sequencia.length; i++) {
        if (sequencia[i] == ">") {
            direita++;
        }
        else {
            esquerda++;
        }
    }
    let total = direita - esquerda;
    let indice;
    if (total >= 0) {
        indice = total % 7;
    }
    else {
        indice = carrosselEsquerda[(total * -1)%7];
    } 
    console.log(indice);
}