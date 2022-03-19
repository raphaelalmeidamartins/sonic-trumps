import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';

describe('Verify if the form inputs are in the document', () => {
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

  it('The top trumps checkbox should be in the document', () => {
    expect(screen.getByTestId(/trunfo-input/i)).toBeInTheDocument();
  });
});

describe('Verify the input name\'s behavior', () => {
  beforeEach(() => render(<App />));

  const nameInput = () => screen.getByLabelText(/nome/i);

  it('The user can only enter 36-length names', () => {
    userEvent.type(nameInput(), 'Shadow the Hedgehog & Knuckles & Knuckles');
    expect(nameInput().value).toBe('Shadow the Hedgehog & Knuckles & Knu');
  });

  it('The name typed by the user should appear in the preview card', () => {
    const name = 'Spark the Electric Jester';

    userEvent.type(nameInput(), name);
    expect(screen.getByRole('heading', { name, level: 2 })).toBeInTheDocument();
  });
});

describe('Verify the description input\'s behavior', () => {
  beforeEach(() => render(<App />));

  const descInput = () => screen.getByPlaceholderText(/insira descrição/i);

  it('The user can only enter 81-length descriptions', () => {
    // eslint-disable-next-line max-len
    const description = 'Spark is the titular main protagonist of Spark the Electric Jester video game. He is a freelance agent.';
    const maxLength = 81;

    userEvent.type(descInput(), description);
    expect(descInput().value).toBe(description.slice(0, maxLength));
  });

  it('The description typed by the user should appear in the preview card', () => {
    // eslint-disable-next-line max-len
    const description = 'Spark is the titular main protagonist of Spark the Electric Jester video game.';

    userEvent.type(descInput(), description);
    expect(screen.getAllByText(description)[1]).toBeInTheDocument();
    expect(screen.getAllByText(description).length).toBe(2);
  });
});

describe('Verify the attribute inputs\' behavior ', () => {
  beforeEach(() => render(<App />));

  const speedInput = () => screen.getByLabelText(/speed/i);
  const skillInput = () => screen.getByLabelText(/skill/i);
  const powerInput = () => screen.getByLabelText(/power/i);

  it('The user should not be able to input negative attribute numbers', () => {
    const randomNegativeNum = () => `${Math.round(Math.random() * (100 - 1) + 1)}`;

    // speed input tests
    userEvent.type(speedInput(), randomNegativeNum());
    expect(speedInput().value).toBe('0');
    userEvent.type(speedInput(), randomNegativeNum());
    expect(speedInput().value).toBe('0');
    userEvent.type(speedInput(), randomNegativeNum());
    expect(speedInput().value).toBe('0');

    // skill input tests
    userEvent.type(skillInput(), randomNegativeNum());
    expect(speedInput().value).toBe('0');
    userEvent.type(skillInput(), randomNegativeNum());
    expect(speedInput().value).toBe('0');
    userEvent.type(skillInput(), randomNegativeNum());
    expect(speedInput().value).toBe('0');

    // power input tests
    userEvent.type(powerInput(), randomNegativeNum());
    expect(powerInput().value).toBe('0');
    userEvent.type(powerInput(), randomNegativeNum());
    expect(powerInput().value).toBe('0');
    userEvent.type(powerInput(), randomNegativeNum());
    expect(powerInput().value).toBe('0');
  });
});
