import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';

describe('Testando o App', () => {
  test('ver se os links aparecem, com o nome correto', () => {
    renderWithRouter(<App />);
    const firstLink = screen.getByRole('link', { name: /home/i });
    const secondLink = screen.getByRole('link', { name: /about/i });
    const thirdLink = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(firstLink).not.toBe(undefined);
    expect(secondLink).not.toBe(undefined);
    expect(thirdLink).not.toBe(undefined);
  });
});
