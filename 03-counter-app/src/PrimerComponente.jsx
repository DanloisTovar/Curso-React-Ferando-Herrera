export const PrimerComponente = () => {
    const imprimeNombre = (nombre) => {
        return `Hola soy ${nombre}`;
    };
    const nombreImpreso = imprimeNombre('Danlois');

    const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const nuevoMensaje = {
        nombre: 'Danlois',
        edad: 29,
        ubicacion: 'Venezuela',
    };
    return (
        <>
            <h2>Primer Componente!!</h2>
            <p>Este es mi primer componente</p>
            <p>
                <strong>{nombreImpreso}</strong>
            </p>

            <p>lo que esta en el arreglo: {arreglo}</p>

            {arreglo
                ? arreglo.map((num) => {
                      return <p key={num}>{num}</p>;
                  })
                : null}

            <p>{nuevoMensaje.nombre}</p>
            <p>{nuevoMensaje.edad}</p>
            <p>{nuevoMensaje.ubicacion}</p>

            <code>{JSON.stringify(nuevoMensaje)}</code>
        </>
    );
};
