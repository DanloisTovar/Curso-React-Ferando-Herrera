import PropTypes from 'prop-types';

export const FirstApp = ({ saludo, nombre, numero = 1 }) => {
    // console.log('saludo');

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

FirstApp.defaultProps = {
    saludo: 'Hola NO soy',
    nombre: 'Goku',
    numero: 123,
};
