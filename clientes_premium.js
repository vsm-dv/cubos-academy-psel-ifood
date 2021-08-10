function solucao(precos) {
    let somaVetor = 0;
    let item200 = 0;
    for (let i = 0; i < precos.length; i++) {
        somaVetor+=precos[i];
        if (precos[i] > 200) {
            item200++;
        }
    }
    if (somaVetor <= 1000) {
        console.log ("NORMAL");
    }
    else {
        if (item200 > 0) {
            console.log("PREMIUM");
        }
        else {
            console.log("VIP");
        }
    }
}