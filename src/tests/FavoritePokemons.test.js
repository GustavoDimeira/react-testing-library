import React from 'react';
import { screen, render } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Testando o componente Favorite Pokemon', () => {
  test('Inicialmente a pagina Deve estar sem nenhum pokémon salvo', () => {
    render(<FavoritePokemons />);
    const titiulo = screen.getByText(/no favorite pokemon found/i);
    expect(titiulo).toBeInTheDocument();
  });
});
