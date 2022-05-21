function getAnimal(id) {
    if(id < 1 || id > 4) {
        console.log('Paramentro de Número inváligo!');
    } else {
        switch(id) {
            case 1:
                return 'Cão';
            case 2:
                return 'Gato';
            case 3:
                return 'Pássaro';
            case 4:
                return 'Peixe';
        } 

    }
}    

console.log(getAnimal("a"));