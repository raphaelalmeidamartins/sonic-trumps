/* These tests broke when I installed React Router v6. I'm still working on them */

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import DeckPage from '../../pages/DeckPage';
import renderWithRedux from '../helpers/renderWithRedux';

describe('Check the input name\'s behavior', () => {
  beforeEach(() => renderWithRedux(<DeckPage />));

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

describe('Check the description input\'s behavior', () => {
  beforeEach(() => renderWithRedux(<DeckPage />));

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

describe('Check the attribute inputs\' behavior ', () => {
  beforeEach(() => renderWithRedux(<DeckPage />));

  const speedInput = () => screen.getByLabelText(/speed/i);
  const skillInput = () => screen.getByLabelText(/skill/i);
  const powerInput = () => screen.getByLabelText(/power/i);

  it('The user should not be able to input negative attribute numbers', () => {
    // speed input tests
    userEvent.type(speedInput(), '-');
    expect(speedInput().value).toBe('0');
    userEvent.type(speedInput(), '-80');
    expect(speedInput().value).toBe('0');
    userEvent.type(speedInput(), '-2');
    expect(speedInput().value).toBe('0');

    // skill input tests
    userEvent.type(skillInput(), '-');
    expect(skillInput().value).toBe('0');
    userEvent.type(skillInput(), '-7');
    expect(skillInput().value).toBe('0');
    userEvent.type(skillInput(), '-90');
    expect(skillInput().value).toBe('0');

    // power input tests
    userEvent.type(powerInput(), '-');
    expect(powerInput().value).toBe('0');
    userEvent.type(powerInput(), '-15');
    expect(powerInput().value).toBe('0');
    userEvent.type(powerInput(), '-30');
    expect(powerInput().value).toBe('0');
  });

  it('The user should not be able to input numbers higher than 90', () => {
    // speed input tests
    userEvent.type(speedInput(), '95');
    expect(speedInput().value).toBe('90');
    userEvent.type(speedInput(), '800');
    expect(speedInput().value).toBe('90');
    userEvent.type(speedInput(), '97');
    expect(speedInput().value).toBe('90');

    // skill input tests
    userEvent.type(skillInput(), '95');
    expect(skillInput().value).toBe('90');
    userEvent.type(skillInput(), '800');
    expect(skillInput().value).toBe('90');
    userEvent.type(skillInput(), '97');
    expect(skillInput().value).toBe('90');

    // power input tests
    userEvent.type(powerInput(), '95');
    expect(powerInput().value).toBe('90');
    userEvent.type(powerInput(), '800');
    expect(powerInput().value).toBe('90');
    userEvent.type(speedInput(), '97');
    expect(powerInput().value).toBe('90');
  });

  const speedPreview = () => screen.getByTestId('attr1-card-preview');
  const skillPreview = () => screen.getByTestId('attr2-card-preview');
  const powerPreview = () => screen.getByTestId('attr3-card-preview');

  it('The points inserted by the user should appear in the preview card', () => {
    // speed input tests
    userEvent.type(speedInput(), '90');
    expect(speedPreview().textContent).toMatch(/.*90$/);
    userEvent.type(speedInput(), '{backspace}{backspace}70');
    expect(speedPreview().textContent).toMatch(/.*70$/);
    userEvent.type(speedInput(), '{backspace}{backspace}40');
    expect(speedPreview().textContent).toMatch(/.*40$/);

    // skill input tests
    userEvent.type(skillInput(), '90');
    expect(skillPreview().textContent).toMatch(/.*90$/);
    userEvent.type(skillInput(), '{backspace}{backspace}80');
    expect(skillPreview().textContent).toMatch(/.*80$/);
    userEvent.type(skillInput(), '{backspace}{backspace}50');
    expect(skillPreview().textContent).toMatch(/.*50$/);

    // power input tests
    userEvent.type(powerInput(), '90');
    expect(powerPreview().textContent).toMatch(/.*90$/);
    userEvent.type(powerInput(), '{backspace}{backspace}80');
    expect(powerPreview().textContent).toMatch(/.*80$/);
    userEvent.type(powerInput(), '{backspace}{backspace}50');
    expect(powerPreview().textContent).toMatch(/.*50$/);
  });
});

describe('There should be an element displaying how many points are left', () => {
  beforeEach(() => renderWithRedux(<DeckPage />));

  const pointsLeft = () => screen.getByTestId(/attr-total-left/i);

  const speedInput = () => screen.getByLabelText(/speed/i);
  const skillInput = () => screen.getByLabelText(/skill/i);
  const powerInput = () => screen.getByLabelText(/power/i);

  it('It should start by displaying 210 points left', () => {
    expect(pointsLeft()).toBeInTheDocument();
    expect(pointsLeft().textContent).toBe('210');
  });

  it('It decreases the number of points left when the user adds attribute points', () => {
    userEvent.type(speedInput(), '90');
    expect(pointsLeft().textContent).toBe('120');

    userEvent.type(skillInput(), '50');
    expect(pointsLeft().textContent).toBe('70');

    userEvent.type(powerInput(), '70');
    expect(pointsLeft().textContent).toMatch('0');

    userEvent.type(powerInput(), '90');
    expect(pointsLeft().textContent).toMatch('-20');
  });
});

describe('Check the image input\'s behavior', () => {
  beforeEach(() => renderWithRedux(<DeckPage />));

  it(
    'The link inserted by the user should be the src of the img in the card preview',
    () => {
      const spark = 'https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/9df2afabcdd08dbe0db7a49e509403c9/32/256x256.png';
      userEvent.type(screen.getByLabelText(/imagem/i), spark);
      expect(screen.getByTestId(/image-card-preview/i).src).toBe(spark);
    },
  );
});

describe('Check the rarity input select\'s behavior', () => {
  beforeEach(() => renderWithRedux(<DeckPage />));

  it(
    'The rarity selected by the user should appear in the preview card',
    () => {
      const raritySelect = screen.getByLabelText(/raridade/i);

      userEvent.selectOptions(raritySelect, raritySelect.options[1]);
      expect(screen.getByTestId(/rare-card-preview/i).textContent).toBe('raro');

      userEvent
        .selectOptions(raritySelect, raritySelect.options[0]);
      expect(screen.getByTestId(/rare-card-preview/i).textContent).toBe('normal');

      userEvent.selectOptions(raritySelect, raritySelect.options[2]);
      expect(screen.getByTestId(/rare-card-preview/i).textContent).toBe('muito raro');
    },
  );
});

describe('Check the top trumps\' checkbox behavior', () => {
  beforeEach(() => renderWithRedux(<DeckPage />));

  const topTrumpCheckbox = () => screen.getByTestId(/trunfo-input/i);

  it(
    'Top trumps shouldn\'t be in the preview card, if the checkbox isn\'t checked',
    () => {
      expect(screen.queryByTestId(/trunfo-card-preview/i)).not.toBeInTheDocument();
    },
  );

  it('Top trumps should be in the preview card, if the checkbox is checked', () => {
    userEvent.click(topTrumpCheckbox());
    expect(screen.getByTestId(/trunfo-card-preview/i)).toBeInTheDocument();
  });
});
