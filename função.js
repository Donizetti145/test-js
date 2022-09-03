// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 5)
imprimirSoma(2, 5, 1, 3, 4)
imprimirSoma()

//função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(1, 5))
console.log(soma(1))