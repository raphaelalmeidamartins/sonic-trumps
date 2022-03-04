import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GiSonicShoes, GiFoxTail, GiBoxingGlove, GiEmerald } from 'react-icons/gi';
import './Card.css';
import logo from '../assets/logo.png';

class CardDeck extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    const maxAttr = 90;

    return (
      <section className="Card">
        <img className="Card-logo" src={ logo } alt="Sonic Trunfo" />
        <header className="Card-header">
          <h2>{cardName}</h2>
          <p className="Card-rarity">
            {cardRare}
          </p>
        </header>
        <img
          className="Card-img"
          src={ cardImage }
          alt={ cardName }
        />
        <div className="Card-desc-container">
          <p className="Card-desc">
            {cardDescription}
          </p>
        </div>
        <ul className="Card-attr">
          <li>
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
            <div className="Card-attr-value">{cardAttr1}</div>
          </li>
          <li>
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
            <div className="Card-attr-value">{cardAttr2}</div>
          </li>
          <li>
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
            <div className="Card-attr-value">{cardAttr3}</div>
          </li>
          {cardTrunfo && (
            <div className="Card-trunfo">
              <p className="Card-trunfo-icon">
                <GiEmerald />
              </p>
              <p className="Card-trunfo-text">Super Trunfo</p>
            </div>
          )}
        </ul>
      </section>
    );
  }
}

CardDeck.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
};

CardDeck.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default CardDeck;
