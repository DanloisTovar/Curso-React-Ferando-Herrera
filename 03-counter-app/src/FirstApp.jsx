import PropTypes from 'prop-types';

export const FirstApp = ({ saludo, nombre = 'Goku', numero = 1 }) => {
    console.log();

    return (
        <>
            <h1>{`${saludo} ${nombre}`}</h1>
            <p>Mi primera aplicación</p>
            <p>suma: {numero + 1}</p>
        </>
    );
};

FirstApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
};
