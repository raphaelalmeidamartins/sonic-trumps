import PropTypes from 'prop-types';
import React from 'react';
import {
  GiBoxingGlove,
  GiEmerald,
  GiFoxTail,
  GiSonicShoes,
} from 'react-icons/gi';
import logo from '../assets/logo.png';
import DeleteCardButton from './DeleteCardButton';
import '../sass/components/Card.css';

function Card(props) {
  const {
    index,
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
    preview,
    custom,
  } = props;

  const returnTestId = (id) => {
    if (custom) return preview ? `${id}-preview` : id;
    return '';
  };

  const maxAttr = 90;

  return (
    <section
      className="Card"
      data-testid={ returnTestId('custom-card') }
    >
      <img className="Card-logo" src={ logo } alt="Sonic Trunfo" />
      <header>
        <h2
          data-testid={ returnTestId('name-card') }
        >
          { cardName }
        </h2>
        <p
          className="Card-rarity"
          data-testid={ returnTestId('rare-card') }
        >
          { cardRare }
        </p>
      </header>
      <img
        className="Card-img"
        data-testid={ returnTestId('image-card') }
        src={ cardImage }
        alt={ cardName }
      />
      <div className="Card-desc-container">
        <p
          data-testid={ returnTestId('description-card') }
        >
          { cardDescription }
        </p>
      </div>
      <ul>
        <li data-testid={ returnTestId('attr1-card') }>
          <div className="Card-attr-icon">
            <GiSonicShoes />
          </div>
          <span className="Card-attr-text">SPEED</span>
          <div className="Card-attr-gauge-container">
            <div
              className="Card-attr-gauge"
              style={ { width: `${(cardAttr1 / maxAttr) * 100}%` } }
            />
          </div>
          <div className="Card-attr-value">{ cardAttr1 }</div>
        </li>
        <li data-testid={ returnTestId('attr2-card') }>
          <div className="Card-attr-icon">
            <GiFoxTail />
          </div>
          <span className="Card-attr-text">SKILL</span>
          <div className="Card-attr-gauge-container">
            <div
              className="Card-attr-gauge"
              style={ { width: `${(cardAttr2 / maxAttr) * 100}%` } }
            />
          </div>
          <div className="Card-attr-value">{ cardAttr2 }</div>
        </li>
        <li data-testid={ returnTestId('attr3-card') }>
          <div className="Card-attr-icon">
            <GiBoxingGlove />
          </div>
          <span className="Card-attr-text">POWER</span>
          <div className="Card-attr-gauge-container">
            <div
              className="Card-attr-gauge"
              style={ { width: `${(cardAttr3 / maxAttr) * 100}%` } }
            />
          </div>
          <div
            className="Card-attr-value"
          >
            { cardAttr3 }
          </div>
        </li>
        { cardTrunfo && (
          <div
            className="Card-trunfo"
            data-testid={ returnTestId('trunfo-card') }
          >
            <p className="Card-trunfo-icon">
              <GiEmerald />
            </p>
            <p className="Card-trunfo-text">Super Trunfo</p>
          </div>
        ) }
      </ul>
      { (custom && !preview) && <DeleteCardButton index={ index } /> }
    </section>
  );
}

Card.defaultProps = {
  index: null,
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  preview: false,
  custom: false,
};

Card.propTypes = {
  index: PropTypes.number,
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  preview: PropTypes.bool,
  custom: PropTypes.bool,
};

export default Card;
