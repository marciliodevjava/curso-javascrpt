const alunos = [ {
    nome: 'Alessandra',
    nota: 7.8,
    turma: '1B',
}, {
    nome: 'Marcilio',
    nota: 6.8,
    turma: '1B',
}, {
    nome: 'Isabela',
    nota: 9.8,
    turma: '1B',
}
];

function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 7));