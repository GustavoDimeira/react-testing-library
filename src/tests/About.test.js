import React from 'react';
import { screen, render } from '@testing-library/react';
import About from '../pages/About';

describe('Testando o compoente About', () => {
  test('Testando o compoente About', () => {
    render(<About />);
    const title = screen.getByRole('heading', { name: /about pokédex/i });
    const img = screen.getByRole('img', { name: /pokédex/i });
    const srcExpectd = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(title).not.toBe(undefined);
    expect(img.src).toBe(srcExpectd);
  });
});
