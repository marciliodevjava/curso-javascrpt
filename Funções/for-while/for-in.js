function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop);
    }
}

function forInExemplo1(obj) {
    for(prop in obj) {
        console.log(obj[prop]);
    }
}

const meuObjeto = {
    nome: 'João',
    idade: '27',
    cidade: 'Salvador'
}

console.log(forInExemplo(meuObjeto));
console.log(forInExemplo1(meuObjeto));