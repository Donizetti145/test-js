function rand({ min = 0, max = 100 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


const obj = { max: 50, min: 30 }
console.log(rand({ min: 20, max: 30 }))
console.log(rand(obj))
console.log(rand({}))