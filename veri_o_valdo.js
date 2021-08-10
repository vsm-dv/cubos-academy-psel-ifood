function solucao(obras) {
    let maior = obras[0];
    for (let i = 0; i < obras.length; i++) {
        if (obras[i].valor > maior.valor) {
            maior = obras[i];
        }
    }
    console.log(maior.nome);
}