function verificaPalindromo(string) {
    if( !string ) throw "String invalida";

    return string == string.split('').reverse().join('');
}

console.log(verificaPalindromo('bob'));