import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';

describe('Testando componente Pokedex', () => {
  it('titulo, encounterd pokémons, deve estar na tela', () => {
    renderWithRouter(<App />);
    const titulo = screen.getByRole('heading', { name: /encountered pokémons/i });
    expect(titulo).toBeInTheDocument();
  });
  it('função do botão proximo pokemon', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(button);
    const texto = screen.getByText(/average weight:/i);
    expect(texto).toBeInTheDocument();
  });
  it('Botões para selecinar o tipo deve estar na tela com o data-teste-id', () => {
    renderWithRouter(<App />);
    const type = screen.getByRole('button', { name: /electric/i });
    expect(type).toBeInTheDocument();
    const BTNall = screen.getByRole('button', { name: /all/i });
    userEvent.click(BTNall);
    expect(BTNall).toBeInTheDocument();
    screen.getAllByTestId('pokemon-type-button');
  });
});
