const user = {
    id: 27,
    displayName: 'marcilio',
    fullName: {
        firstName: 'Marcilio',
        lastName: 'Silva'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

// 27
console.log(userId(user));

// Marcilio Silva
console.log(getFullName(user));