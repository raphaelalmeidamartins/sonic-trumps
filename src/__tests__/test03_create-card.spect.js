import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';

const cards = [
  {
    name: 'Spark the Eletric Jester',
    desc: 'Spark is the titular main protagonist...',
    speed: '90',
    skill: '50',
    power: '70',
    image: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/9df2afabcdd08dbe0db7a49e509403c9/32/256x256.png',
    rarity: 'muito raro',
  },
  {
    name: 'NiGHTS',
    desc: 'NiGHTS is a First-level Nightmaren from the Dreams dimension.',
    speed: '90',
    skill: '50',
    power: '70',
    image: 'https://i.pinimg.com/originals/6c/cc/57/6ccc5780bd433e9c8a55f30413c15247.png',
    rarity: 'muito raro',
  },
];

const nameInput = () => screen.getByLabelText(/nome/i);
const descInput = () => screen.getByPlaceholderText(/insira descrição/i);
const speedInput = () => screen.getByLabelText(/speed/i);
const skillInput = () => screen.getByLabelText(/skill/i);
const powerInput = () => screen.getByLabelText(/power/i);
const imageInput = () => screen.getByLabelText(/imagem/i);
const raritySelect = () => screen.getByLabelText(/raridade/i);
const topTrumpCheckbox = () => screen.getByTestId(/trunfo-input/i);
const saveButton = () => screen.getByRole('button', { name: /salvar/i });

describe('Check if the card is created with the forms data', () => {
  beforeEach(() => render(<App />));

  it('The inputs should be clean when the user first enters the page', () => {
    expect(nameInput().value).toBe('');
    expect(descInput().value).toBe('');
    expect(speedInput().value).toBe('0');
    expect(skillInput().value).toBe('0');
    expect(powerInput().value).toBe('0');
    expect(imageInput().value).toBe('');
    expect(raritySelect().value).toBe('normal');
    expect(topTrumpCheckbox()).not.toBeChecked();
  });

  it('The save button should be disabled when the user first enters the page', () => {
    expect(saveButton()).toBeDisabled();
  });

  const erase = '{backspace}{backspace}';

  it(
    'The save button should be disabled if the name input is empty',
    () => {
      userEvent.type(nameInput(), 'Sp');
      userEvent
        .type(descInput(), 'Spark is the titular main protagonist...');
      userEvent.type(nameInput(), erase);
      expect(saveButton()).toBeDisabled();
    },
  );

  it(
    'The save button should be disabled if the description input is empty',
    () => {
      userEvent.type(nameInput(), 'Spark the Eletric Jester');
      userEvent.type(descInput(), 'Sp');
      userEvent.type(descInput(), erase);
      expect(saveButton()).toBeDisabled();
    },
  );

  it(
    'The save button should be disabled if both description and name inputs are empty',
    () => {
      userEvent.type(nameInput(), 'Sp');
      userEvent.type(descInput(), 'Sp');
      userEvent.type(descInput(), erase);
      userEvent.type(nameInput(), erase);
      expect(saveButton()).toBeDisabled();
    },
  );
});

describe(
  'The custom card should be added to deck once the user clicks the save button',
  () => {
    beforeEach(() => render(<App />));

    it('The form inputs should be cleanned once the card is created', () => {
      cards.forEach(({ name, desc, speed, skill, power, image, rarity }) => {
        userEvent.type(nameInput(), name);
        userEvent.type(descInput(), desc);
        userEvent.type(speedInput(), speed);
        userEvent.type(skillInput(), skill);
        userEvent.type(powerInput(), power);
        userEvent.type(imageInput(), image);
        userEvent.selectOptions(raritySelect(), rarity);
        userEvent.click(saveButton());

        expect(nameInput().value).toBe('');
        expect(descInput().value).toBe('');
        expect(speedInput().value).toBe('0');
        expect(skillInput().value).toBe('0');
        expect(powerInput().value).toBe('0');
        expect(imageInput().value).toBe('');
        expect(raritySelect().value).toBe('normal');
        expect(topTrumpCheckbox()).not.toBeChecked();
      });
    });

    it('The card should be created once the user clicks the save button', () => {
      cards.forEach(({ name, desc, speed, skill, power, image, rarity }, index) => {
        userEvent.type(nameInput(), name);
        userEvent.type(descInput(), desc);
        userEvent.type(speedInput(), speed);
        userEvent.type(skillInput(), skill);
        userEvent.type(powerInput(), power);
        userEvent.type(imageInput(), image);
        userEvent.selectOptions(raritySelect(), rarity);
        userEvent.click(saveButton());

        expect(screen.getAllByTestId('name-card')[index].textContent)
          .toBe(name);
        expect(screen.getAllByTestId('description-card')[index].textContent)
          .toBe(desc);
        expect(screen.getAllByTestId('attr1-card')[index].textContent)
          .toMatch(new RegExp(`.*${speed}$`));
        expect(screen.getAllByTestId('attr2-card')[index].textContent)
          .toMatch(new RegExp(`.*${skill}$`));
        expect(screen.getAllByTestId('attr3-card')[index].textContent)
          .toMatch(new RegExp(`.*${power}$`));
        expect(screen.getAllByTestId('image-card')[index].src)
          .toBe(image);
        expect(screen.getAllByTestId('rare-card')[index].textContent)
          .toBe(rarity);
      });
    });
  },
);
