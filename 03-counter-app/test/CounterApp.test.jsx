import { describe, expect, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {
    test('Debe arrancar el test', () => {
        console.log('Arranque de test!');
    });
    test('debe mostrar <CounterApp /> correctamente con el valor por defecto', () => {
        const { getByText } = render(<CounterApp value={0} />);
        expect(getByText('0')).toBeTruthy();
    });

    test('Incrementar en "+1" con el boton click', () => {
        const { getByText } = render(<CounterApp />);
        fireEvent.click(getByText('+1'));
        expect(getByText('1')).toBeTruthy();
    });

    test('derecrementar en "-1" con el boton click', () => {
        const { getByText } = render(<CounterApp />);
        fireEvent.click(getByText('+1'));
        fireEvent.click(getByText('-1'));
        expect(getByText('0')).toBeTruthy();
    });

    test('resets counter to initial value on "Reset" button click', () => {
        const { getByText } = render(<CounterApp />);
        fireEvent.click(getByText('+1'));
        fireEvent.click(getByText('Reset'));
        expect(getByText('0')).toBeTruthy();
    });

    test('debería coincidir con la instantánea', () => {
        const { asFragment } = render(<CounterApp />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('debe mostrar <CounterApp /> correctamente con el valor por defecto', () => {
        render(<CounterApp value={0} />);
        expect(screen.getByText('0')).toBeTruthy();
    });

    test('Incrementar en "+1" con el boton click', () => {
        render(<CounterApp />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('1')).toBeTruthy();
    });
});
