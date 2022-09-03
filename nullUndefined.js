let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)

const produto = {}
produto.preco = 20
console.log(produto.preco) // undefined
console.log(produto)

produto.preco = undefined // evitar o uso do undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)