import { getHeroeById /* getHeroeByOner  */ } from './import-export';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(3);
//         resolve(heroe);
//         console.log(heroe);
//         // reject('No se pudo encontrar el héroe');
//     }, 2000);
// });

// promesa
//     .then((heroe) => {
//         console.log(heroe.name);
//     })
//     .catch((err) => console.warn(err));

const getElementByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
                console.log(heroe);
            } else {
                reject('No se pudo encontrar el héroe');
            }
        }, 2000);
    });
};

getElementByIdAsync(3)
    .then(
        /* (heroe) => {
        console.log(heroe.name);
    } */

        console.log,
    )
    .catch(
        /* (err) => {
        console.warn(err);
    } */

        console.warn,
    )
    .finally(() => {
        console.log('Se termino el proceso');
    });
