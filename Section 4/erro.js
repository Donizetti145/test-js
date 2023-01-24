function nomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Acabou! :)')
    }
}

function tratarErroELancar(e) {
    throw {
        nome: e.name,
        msg: e.messge,
        data: new Date
    }
}

const obj = { name: 'Rafael' }
nomeGritado(obj)