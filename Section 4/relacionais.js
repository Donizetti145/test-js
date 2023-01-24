console.log('01)', '1' == 1) //Igual
console.log('02)', '1' === 1) //Estritamente igual
console.log('03)', '3' != 3) //Diferente
console.log('04)', '3' !== 3) //Estritamente diferente

const d1 = new Date(0)
const d2 = new Date(0)

console.log('05)', d1 == d2)
console.log('06)', d1 === d2)
console.log('07)', d1.getTime() === d2.getTime())