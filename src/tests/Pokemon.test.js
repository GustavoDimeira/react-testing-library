import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';

describe('testando componente pokemon', () => {
  it('Botão mais detalhes', () => {
    renderWithRouter(<App />);
    const btn = screen.getByRole('link', { name: /more details/i });
    userEvent.click(btn);
    const title = screen.getByRole('heading', { name: /summary/i });
    expect(title).toBeInTheDocument();
  });
  it('A imagem deve ter m alt e um src definido', () => {
    renderWithRouter(<App />);
    const img = screen.getByRole('img');
    expect(img.src).not.toBe("");
    expect(img.alt).not.toBe("");
  });
  it('marcar como favorito', () => {
    renderWithRouter(<App />);
    const btnDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(btnDetails);
    const btnFavoriter = screen.getByText(/pokémon favoritado\?/i);
    userEvent.click(btnFavoriter);
    const imgStar = screen.getAllByRole('img');
    expect(imgStar[1].src).not.toBe("");
    expect(imgStar[1].alt).not.toBe("");
  });
});
