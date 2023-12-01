import { describe, test, expect } from '@jest/globals';
import { getAllByText, render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Test de FirstApp', () => {
    test('snapshot de FirstApp ', () => {
        const { container } = render(<FirstApp saludo="Hola Soy," />);
        expect(container).toMatchSnapshot();
    });

    test('Texto Hola soy Goku ', () => {
        const saludo = 'Hola Soy, Goku';
        const { getByText } = render(<FirstApp saludo="Hola Soy," />);
        expect(getByText(saludo)).toBeTruthy();
    });

    test('renderiza el texto "Hola Soy, Goku"', () => {
        const saludo = 'Hola Soy, Goku';
        render(<FirstApp saludo="Hola Soy," />);

        expect(screen.getByText(saludo)).toBeTruthy();
    });

    test('verifica h1"', () => {
        const saludo = 'Hola Soy, Goku';
        const { container } = render(
            <FirstApp saludo="Hola Soy," nombre="Goku" />,
        );
        const h1 = container.querySelector('h1');

        expect(h1.innerHTML).toContain(saludo);
    });

    // test props:
    test('Debe mostar el subtiotulo enviado por props', () => {
        const saludo = 'Hola Soy,';
        const nombre = 'Goku';

        const texto = `${saludo} ${nombre}`;

        const { getByText } = render(
            <FirstApp saludo={saludo} nombre={nombre} />,
        );

        expect(getByText(texto)).toBeTruthy();
    });

    test('Debe mostar el subtiotulo enviado por props', () => {
        const saludo = 'Hola Soy,';
        const nombre = 'Goku';

        const texto = `${saludo} ${nombre}`;

        const { getAllByText } = render(
            <FirstApp saludo={saludo} nombre={nombre} />,
        );

        expect(getAllByText(texto).length).toBe(1);
    });
});
