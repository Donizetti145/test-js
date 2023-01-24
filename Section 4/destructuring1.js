/* para usar o destucturing em um objeto usamos o {}, e para uma array []
Que basicamente é desestruturar alguma coisas, seja array ou objeto*/

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        rua: 'Rua feliz',
        numero: 100,
        cep: 12
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { endereco: { rua, numero, cep } } = pessoa
console.log(rua, numero, cep)