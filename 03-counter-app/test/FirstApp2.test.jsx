/**
 * Pruebas para el componente FirstApp.
 */
import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Test Mejorado!!', () => {
    const saludo = 'Hola Soy,';
    const nombre = 'Goku';
    const saludoCompleto = `${saludo} ${nombre}`;

    /**
     * Prueba para verificar si el componente coincide con el snapshot.
     */
    test('Debe hacer match con el snapshot ', () => {
        const { container } = render(<FirstApp saludo={saludo} />);
        expect(container).toMatchSnapshot();
    });

    /**
     * Prueba para verificar si se muestra el mensaje de saludo correctamente.
     */
    test('debe mostar el mensaje "Hola Soy,', () => {
        render(<FirstApp saludo={saludo} nombre={nombre} />);
        screen.debug();
        expect(screen.getByText(saludoCompleto)).toBeTruthy();
    });

    /**
     * Prueba para verificar si se muestra el título en un h1.
     */
    test('Debe mostrar el tituo en un h1 ', () => {
        render(<FirstApp saludo={saludo} nombre={nombre} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
            saludoCompleto,
        );
    });

    /**
     * Prueba para verificar si se muestra el saludo enviado por props.
     */
    test('Debe mostar el saludo enviado por props', () => {
        render(<FirstApp saludo={saludo} nombre={nombre} />);
        expect(screen.getAllByText(saludoCompleto).length).toBe(1);
    });
});
