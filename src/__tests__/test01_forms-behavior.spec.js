import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Verify if the form inputs are in the document', () => {
  beforeEach(() => render(<App />));

  it('Verify if the name input is in the document', () => {
    const nameInput = screen.getByLabelText(/nome/i);
    expect(nameInput).toBeInTheDocument();
  });

  it('Verify if the description input is in the document', () => {
    const descTextarea = screen.getByPlaceholderText(/insira descrição/i);
    expect(descTextarea).toBeInTheDocument();
  });

  it('Verify if the attribute inputs are in the document', () => {
    const speedInput = screen.getByLabelText(/speed/i);
    expect(speedInput).toBeInTheDocument();
    const skillInput = screen.getByLabelText(/skill/i);
    expect(skillInput).toBeInTheDocument();
    const powerInput = screen.getByLabelText(/power/i);
    expect(powerInput).toBeInTheDocument();
  });

  it('Verify if the image input is in the document', () => {
    const imageInput = screen.getByLabelText(/imagem/i);
    expect(imageInput).toBeInTheDocument();
  });

  it('Verify if the image input is in the document', () => {
    const imageInput = screen.getByLabelText(/imagem/i);
    expect(imageInput).toBeInTheDocument();
  });

  it('Verify if the rarity select input is in the document', () => {
    const raritySelect = screen.getByLabelText(/raridade/i);
    expect(raritySelect).toBeInTheDocument();
  });
});
