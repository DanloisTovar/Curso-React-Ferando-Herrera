import heroes, { owners } from '../data/heroes';

/* console.log(owners); */

/**
 * Obtiene un héroe por su ID.
 * @param {number} id - El ID del héroe.
 * @returns {object|undefined} - El héroe encontrado o undefined si no se encuentra.
 */

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
/* console.log(getHeroeById(3)); */

const getHeroeByOner = (owner) =>
    heroes.filter((heroe) => heroe.owner === owner);
/* console.log(getHeroeByOner('DC')); */

export { getHeroeById, getHeroeByOner };
