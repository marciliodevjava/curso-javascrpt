const calc = function (operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}

const subtracao = function(num1, num2){
    return num1 - num2;
}

let resultadoSoma = calc(soma, 1, 2);
let resultadoSub = calc(subtracao, 1, 2);

console.log(resultadoSoma);
console.log(resultadoSub);