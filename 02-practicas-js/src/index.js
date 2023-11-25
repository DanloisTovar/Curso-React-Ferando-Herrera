const saludar = function (nombre) {
    return `Hola ${nombre}`;
};

// console.log(saludar('Danlois'));

console.log(saludar);

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
};

console.log(saludar2);

const saludar3 = (nombre) => `Hola ${nombre}`;

console.log(saludar3);

const saludar4 = () => 'Hola Mundo!!!';

console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502',
});

const user = getUser();

console.log(user);

// Tarea
// 1. Transformar a una función de Flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre,
    };
}

const usuarioActivo = getUsuarioActivo('Danlois');
console.log(usuarioActivo);

const getUsuarioActivo2 = (nombre) => ({
    uid: 'ABC567',
    username: nombre,
});
const usuarioActivo2 = getUsuarioActivo2('Danlois');
console.log(usuarioActivo2);
