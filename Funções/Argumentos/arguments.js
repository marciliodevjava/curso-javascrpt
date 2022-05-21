function findMax(){
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

console.log(findMax(22, 34, 5, 78, 66, 54, 89, 1));