import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  GiBoxingGlove,
  GiEmerald,
  GiFoxTail,
  GiSonicShoes,
} from 'react-icons/gi';
import logo from '../assets/logo.png';
import checkpoint from '../assets/sound-effects/sonic_checkpoint_sound-effect.mp3';
import './Card.css';

class Card extends Component {
  constructor() {
    super();

    this.renderDeleteCardButton = this.renderDeleteCardButton.bind(this);
  }

  renderDeleteCardButton() {
    const { preview, cardTrunfo, removeCard, index } = this.props;
    const checkpointSound = new Audio(checkpoint);

    if (!preview) {
      return (
        <button
          className="Card-delete-btn"
          data-testid="delete-button"
          type="button"
          onClick={ () => {
            checkpointSound.play();
            removeCard(index, cardTrunfo);
          } }
        >
          Excluir
        </button>
      );
    }
  }

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
      preview,
    } = this.props;

    const maxAttr = 90;

    return (
      <section
        className="Card"
        data-testid={ preview ? 'custom-card-preview' : 'custom-card' }
      >
        <img className="Card-logo" src={ logo } alt="Sonic Trunfo" />
        <header className="Card-header">
          <h2
            data-testid={ preview ? 'name-card-preview' : 'name-card' }
          >
            { cardName }
          </h2>
          <p
            className="Card-rarity"
            data-testid={ preview ? 'rare-card-preview' : 'rare-card' }
          >
            { cardRare }
          </p>
        </header>
        <img
          className="Card-img"
          data-testid={ preview ? 'image-card-preview' : 'image-card' }
          src={ cardImage }
          alt={ cardName }
        />
        <div className="Card-desc-container">
          <p
            className="Card-desc"
            data-testid={ preview ? 'description-card-preview' : 'description-card' }
          >
            { cardDescription }
          </p>
        </div>
        <ul className="Card-attr">
          <li data-testid={ preview ? 'attr1-card-preview' : 'attr1-card' }>
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
          <li data-testid={ preview ? 'attr2-card-preview' : 'attr2-card' }>
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
          <li data-testid={ preview ? 'attr3-card-preview' : 'attr3-card' }>
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
              data-testid={ preview ? 'trunfo-card-preview' : 'trunfo-card' }
            >
              <p className="Card-trunfo-icon">
                <GiEmerald />
              </p>
              <p className="Card-trunfo-text">Super Trunfo</p>
            </div>
          ) }
        </ul>
        { this.renderDeleteCardButton() }
      </section>
    );
  }
}

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  preview: false,
  removeCard: () => {},
  index: undefined,
};

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  preview: PropTypes.bool,
  removeCard: PropTypes.func,
  index: PropTypes.number,
};

export default Card;
