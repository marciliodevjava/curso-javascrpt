function logLetras(palavra) {
    for(letra of palavra) {
        console.log(letra);
    }
}

const palavra = 'Abacaxi';
const nums = [22, 45, 5, 23, 778];

console.log(logLetras(palavra));
console.log(logLetras(nums));