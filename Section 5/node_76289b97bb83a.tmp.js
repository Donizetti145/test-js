function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
    //while, expressão que pega boolean
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(0, 10)
    console.log(`Opção escolhida foi ${opcao}`)
}

console.log(`fim`)