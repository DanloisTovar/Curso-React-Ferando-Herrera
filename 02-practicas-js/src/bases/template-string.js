const nombre = 'Danlois';
const apellido = 'Tovar';

// const nombreCompleto = nombre + ' ' + apellido + ' ';

const nombreCompleto = `${nombre} ${apellido}!!!`;
console.log(nombreCompleto);

function saludo(nombre, apellido) {
    return 'Hola' + ' ' + nombre + ' ' + apellido;
}

console.log(`Este es un texto: ${saludo(nombre, apellido)}`);
