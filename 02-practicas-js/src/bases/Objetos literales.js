const persona = {
    nombre: 'Camila',
    apellido: 'Tovar',
    edad: 4,
    direccion: {
        ciudad: 'Buenos Aires',
        zip: 1076,
        lat: 14.3232,
        lng: 34.9233321,
    },
};

// Clonar objeto:
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
