import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';

describe('testando componente pokemon', () => {
  it('Botão mais detalhes, e função salvar favorito', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const title = screen.getByRole('heading', { name: /summary/i });
    expect(title).toBeInTheDocument();

    const BTNsavFav = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(BTNsavFav);

    const star = screen.getByRole('img', { name: /is marked as favorite/i });
    expect(star.src).toBe('http://localhost/star-icon.svg');
  });
  it('card de pokemon deve ter as informações', () => {
    renderWithRouter(<App />);
    const type = screen.getByTestId('pokemon-type');
    expect(type).not.toHaveTextContent('');
  });
  it('img do pokemom deve ter alt, e src corretos', () => {
    renderWithRouter(<App />);
    const img = screen.getByRole('img', { name: /sprite/i });
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
});
