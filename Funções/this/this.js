const pessoa = {
    firstName: 'Marcilio',
    lastName: 'Silva',
    id: 27,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

//Marcilio Silva
console.log(pessoa.fullName());

// 27
console.log(pessoa.getId());