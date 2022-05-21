const pessoa = {
    nome: 'Marcilio',
};

const animal = {
    nome: 'Chloe',
};

function getSomething() {
    console.log(this.nome);
}

console.log(getSomething.call(pessoa));