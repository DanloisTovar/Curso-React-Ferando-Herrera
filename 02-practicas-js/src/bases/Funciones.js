/**
 * Saluda a una persona.
 * @param {string} nombre - El nombre de la persona a saludar.
 * @returns {string} El saludo a la persona.
 */

const saludar = function (nombre) {
    return `Hola ${nombre}`;
};

console.log(saludar);

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
};

console.log(saludar2);

/**
 * Saluda a una persona.
 * @param {string} nombre - El nombre de la persona a saludar.
 * @returns {string} El saludo con el nombre de la persona.
 */

const saludar3 = (nombre) => `Hola ${nombre}`;

console.log(saludar3);

/**
 * Función que devuelve el saludo "Hola Mundo!!!".
 * @returns {string} El saludo "Hola Mundo!!!".
 */
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

/**
 * Obtiene un objeto de usuario activo.
 * @param {string} nombre - El nombre del usuario.
 * @returns {Object} - El objeto de usuario activo con las propiedades uid y username.
 */

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre,
    };
}

/**
 * Activa un usuario.
 * @param {string} nombre - El nombre del usuario.
 * @returns {string} - El usuario activo.
 */
const usuarioActivo = getUsuarioActivo('Danlois');
console.log(usuarioActivo);

/**
 * Crea un objeto de usuario activo.
 * @param {string} nombre - El nombre del usuario.
 * @returns {object} - El objeto de usuario activo.
 */
const getUsuarioActivo2 = (nombre) => ({
    uid: 'ABC567',
    username: nombre,
});
const usuarioActivo2 = getUsuarioActivo2('Danlois');
console.log(usuarioActivo2);
