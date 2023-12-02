import { describe, expect, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {
    test('debe mostrar <CounterApp /> correctamente con el valor por defecto', () => {
        render(<CounterApp value={0} />);
        expect(screen.getByText('0')).toBeTruthy();
    });

    test('Incrementar en "+1" con el boton click', () => {
        render(<CounterApp />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('1')).toBeTruthy();
    });

    test('derecrementar en "-1" con el boton click', () => {
        render(<CounterApp />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('0')).toBeTruthy();
    });

    test('resets counter to initial value on "Reset" button click', () => {
        render(<CounterApp />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('Reset'));
        // se debe agregar el atributo del div "aria-label='btn-reset' o id='btn-reset', en el html"
        // fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByText('0')).toBeTruthy();
    });

    test('debería coincidir con la instantánea', () => {
        const { asFragment } = render(<CounterApp />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('debe mostrar <CounterApp /> correctamente con el valor por defecto', () => {
        render(<CounterApp value={0} />);
        expect(screen.getByText('0')).toBeTruthy();
    });

    test('Incrementar 2 veces y que l resultado sea 2', () => {
        render(<CounterApp />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('1')).toBeTruthy();
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('2')).toBeTruthy();
    });
});
