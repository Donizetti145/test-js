// par nome/valor
const saudacao = 'opa' //contexto léxico 1

function exc() {
    const saudacao = 'falaaa' //contexto léxico 2 
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
        nome: 'Rafael',
        idade: 33,
        peso: 60,
        endereco: {
            rua: 'presidente kennedy',
            numero: 290
        }
    }
    // Objetos são uma variável que contem vários items
console.log(saudacao)
console.log(exc())
console.log(cliente)