let foo = 'bar';

function validateName(arg) {
    if (arg==="") throw new Error('Name must not be blank');
}

function create(name) {
    return { id: cuid(), name: name, checked: false }
}

export default {
    validateName,
    create
};