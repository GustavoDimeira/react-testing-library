import React from 'react';
import { screen, render } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('Testando o componente NotFound', () => {
  test('Inicialmente a pagina Deve estar sem nenhum pokémon salvo', () => {
    render(<NotFound />);
    const titulo = screen.getByRole('heading', { name: /page requested not found/i });
    const name = /pikachu crying because the page requested was not found/i;
    const img = screen.getByRole('img', { name });
    const srcExpectd = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(titulo).not.toBe(undefined);
    expect(img.src).toBe(srcExpectd);
  });
});
