import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';

describe('testando Pokemon Details', () => {
  it('titulos e textos corretos devem aparecer na tela', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const textContent = /this intelligent/i;

    const title1 = screen.getByRole('heading', { name: /details/i });
    const title2 = screen.getByRole('heading', { name: /summary/i });
    const text = screen.getByText(textContent);
    const title3 = screen.getByRole('heading', { name: /game locations of/i });
    const title4 = screen.getByText(/pokémon favoritado\?/i);

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(title3).toBeInTheDocument();
    expect(title4).toBeInTheDocument();
  });
  it('testando images de localização', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const img = screen.getAllByRole('img', { name: /location/i });
    expect(img[0]).toBeInTheDocument();
    expect(img[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  });
});
