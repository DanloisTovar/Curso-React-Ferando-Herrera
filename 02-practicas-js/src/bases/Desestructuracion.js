// Desestructuracion

// Asignacion desestructurante:

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({ nombre, edad, clave, rango = 'capitan' }) => {
    // console.log(nombre, edad, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232,
        },
    };
};

const { nombreClave, anios, latlng /* : { lat, lng } */ } = useContext(persona);
const { lat, lng } = latlng;

console.log(nombreClave, anios, latlng);

console.log('solo cordenadas!');
console.log('coordenadas:', lat, lng);
