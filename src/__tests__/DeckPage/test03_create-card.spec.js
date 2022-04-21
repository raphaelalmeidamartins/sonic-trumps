/* These tests broke when I installed React Router v6. I'm still working on them */

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import DeckPage from '../../pages/DeckPage';
import renderWithRedux from '../helpers/renderWithRedux';

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
  {
    name: 'Alex Kidd',
    desc: 'Former Sega mascot. Lost his job because Sonic replaced him.',
    speed: '50',
    skill: '70',
    power: '90',
    image: 'https://inmiracleworld.files.wordpress.com/2015/05/alex-kidd.gif',
    rarity: 'raro',
  },
];

// to remove error. Jest DOM doesn't support audio playback
window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };

const nameInput = () => screen.getByLabelText(/nome/i);
const descInput = () => screen.getByPlaceholderText(/insira descrição/i);
const speedInput = () => screen.getByLabelText(/speed/i);
const skillInput = () => screen.getByLabelText(/skill/i);
const powerInput = () => screen.getByLabelText(/power/i);
const imageInput = () => screen.getByLabelText(/imagem/i);
const raritySelect = () => screen.getByLabelText(/raridade/i);
const topTrumpCheckbox = () => screen.getByTestId(/^trunfo-input$/);
const saveButton = () => screen.getByRole('button', { name: /salvar/i });

const customCards = () => screen.queryAllByTestId(/^custom-card$/);
const deleteButtons = () => screen.queryAllByRole('button', { name: /excluir/i });

describe('Check if the card is created with the forms data', () => {
  beforeEach(() => renderWithRedux(<DeckPage />));

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

const createCard = ({ name, desc, speed, skill, power, image, rarity }) => {
  userEvent.type(nameInput(), name);
  userEvent.type(descInput(), desc);
  userEvent.type(speedInput(), speed);
  userEvent.type(skillInput(), skill);
  userEvent.type(powerInput(), power);
  userEvent.type(imageInput(), image);
  userEvent.selectOptions(raritySelect(), rarity);
  userEvent.click(saveButton());
};

const deleteCards = (cardsArray) => {
  cardsArray.forEach(() => {
    userEvent.click(deleteButtons()[0]);
  });
};

describe(
  'The custom card should be added to the deck once the user clicks the save button',
  () => {
    beforeEach(() => renderWithRedux(<DeckPage />));
    afterEach(() => deleteCards(customCards()));

    it('The custom cards should have a button to delete the card', () => {
      createCard(cards[0]);
      expect(deleteButtons()[0]).toBeInTheDocument();
    });

    it('The form inputs should be cleanned once the card is created', () => {
      cards.forEach((card) => {
        createCard(card);

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
      cards.forEach((card, index) => {
        createCard(card);

        expect(screen.getAllByTestId('name-card')[index].textContent)
          .toBe(card.name);
        expect(screen.getAllByTestId('description-card')[index].textContent)
          .toBe(card.desc);
        expect(screen.getAllByTestId('attr1-card')[index].textContent)
          .toMatch(new RegExp(`.*${card.speed}$`));
        expect(screen.getAllByTestId('attr2-card')[index].textContent)
          .toMatch(new RegExp(`.*${card.skill}$`));
        expect(screen.getAllByTestId('attr3-card')[index].textContent)
          .toMatch(new RegExp(`.*${card.power}$`));
        expect(screen.getAllByTestId('image-card')[index].src)
          .toBe(card.image);
        expect(screen.getAllByTestId('rare-card')[index].textContent)
          .toBe(card.rarity);
      });

      expect(customCards()).toHaveLength(cards.length);
      expect(deleteButtons()).toHaveLength(cards.length);
    });

    it('The custom card should be deleted once the user clicks the delete button', () => {
      cards.forEach((card) => createCard(card));

      const updatedCustomCards = [...customCards()];
      const deletedCards = 3;

      expect(customCards()).toHaveLength(cards.length);
      userEvent.click(deleteButtons()[0]);
      expect(customCards()).toHaveLength(cards.length - 1);
      updatedCustomCards.splice(0, 1);
      expect([...customCards()]).toEqual(updatedCustomCards);

      userEvent.click(deleteButtons()[0]);
      expect(customCards()).toHaveLength(cards.length - 2);
      updatedCustomCards.splice(0, 1);
      expect([...customCards()]).toEqual(updatedCustomCards);

      userEvent.click(deleteButtons()[0]);
      expect(customCards()).toHaveLength(cards.length - deletedCards);
      updatedCustomCards.splice(0, 1);
      expect([...customCards()]).toEqual(updatedCustomCards);
    });
  },
);

describe(
  'The custom cards created by the user should still be in the page once it\'s reloaded',
  () => {
    beforeEach(() => renderWithRedux(<DeckPage />));

    it('First three cards are created', () => {
      cards.forEach((card) => createCard(card));
      expect(customCards()).toHaveLength(cards.length);
    });

    it('More three cards are created', () => {
      cards.forEach((card) => createCard(card));
      expect(customCards()).toHaveLength(cards.length * 2);
    });

    it('All the custom cards should still be on the page once it\'s reloaded', () => {
      expect(customCards()).toHaveLength(cards.length * 2);
    });
  },
);
