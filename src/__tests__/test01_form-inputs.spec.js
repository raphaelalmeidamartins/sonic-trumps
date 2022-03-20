import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('Check if the form inputs are in the document', () => {
  beforeEach(() => render(<App />));

  it('The name input should be in the document', () => {
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
  });

  it('The description input should be in the document', () => {
    expect(screen.getByPlaceholderText(/insira descrição/i)).toBeInTheDocument();
  });

  it('The attribute inputs should be in the document', () => {
    expect(screen.getByLabelText(/speed/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/skill/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/power/i)).toBeInTheDocument();
  });

  it('The image input should be in the document', () => {
    expect(screen.getByLabelText(/imagem/i)).toBeInTheDocument();
  });

  it('The rarity select input should be in the document', () => {
    expect(screen.getByLabelText(/raridade/i)).toBeInTheDocument();
  });

  it('The rarity select input should have the specified options', () => {
    const raritySelect = screen.getByLabelText(/raridade/i);
    expect(raritySelect).toBeInTheDocument();
    expect(raritySelect.options[0].value).toBe('normal');
    expect(raritySelect.options[1].value).toBe('raro');
    expect(raritySelect.options[2].value).toBe('muito raro');
  });

  it('The top trumps checkbox should be in the document', () => {
    expect(screen.getByTestId(/trunfo-input/i)).toBeInTheDocument();
  });

  it('The save button should be in the document', () => {
    expect(screen.getByRole('button', { name: /salvar/i })).toBeInTheDocument();
  });
});
