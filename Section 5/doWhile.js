function numAleatorio(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
do {
    opcao = numAleatorio(-1, 10)
    console.log(`Os números são ${opcao}`)
} while (opcao != -1)

console.log(`Acabou`)