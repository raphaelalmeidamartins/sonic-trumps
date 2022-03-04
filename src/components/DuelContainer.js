import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  RiEmotionHappyFill,
  RiEmotionUnhappyFill,
  RiEmotionNormalFill,
} from 'react-icons/ri';
import CardDeck from './Card';
import './DuelContainer.css';

class DuelContainer extends Component {
  returnWonOrLoseMessage(wonOrLose, draw) {
    if (draw) {
      return (
        <p className="DuelContainer-text">
          <span>Empate!</span>
          <RiEmotionNormalFill />
        </p>
      );
    }
    return wonOrLose
      ? (
        <p className="DuelContainer-text">
          <span className="win">Ganhou!</span>
          <RiEmotionHappyFill className="win" />
        </p>
      )
      : (
        <p className="DuelContainer-text">
          <span className="lose">Perdeu!</span>
          <RiEmotionUnhappyFill className="lose" />
        </p>
      );
  }

  render() {
    const {
      didPlayerWinRound,
      draw,
      playerCard,
      cpuCard,
      displayDuel,
      nextTurn,
    } = this.props;

    const display = 'DuelContainer DuelContainer-display';
    const hide = 'DuelContainer DuelContainer-hidden';

    return (
      <section className={ displayDuel ? display : hide }>
        <section className="DuelContainer-PlayerCard">
          <p className="DuelContainer-PlayerText">VOCÊ</p>
          <CardDeck { ...playerCard } preview />
          { this.returnWonOrLoseMessage(didPlayerWinRound, draw) }
        </section>
        <section className="DuelContainer-CpuCard">
          <p className="DuelContainer-CpuText">CPU</p>
          <CardDeck { ...cpuCard } preview />
          { this.returnWonOrLoseMessage(!didPlayerWinRound, draw) }
        </section>
        <footer>
          <button
            className="DuelContainer-next-button"
            type="button"
            onClick={ nextTurn }
          >
            Próxima Rodada
          </button>
        </footer>
      </section>
    );
  }
}

DuelContainer.defaultProps = {
  didPlayerWinRound: false,
  draw: false,
  playerCard: {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
  cpuCard: {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
  },
};

DuelContainer.propTypes = {
  didPlayerWinRound: PropTypes.bool,
  draw: PropTypes.bool,
  playerCard: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
    hasTrunfo: PropTypes.bool.isRequired,
  }),
  cpuCard: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
    hasTrunfo: PropTypes.bool.isRequired,
  }),
  displayDuel: PropTypes.bool.isRequired,
  nextTurn: PropTypes.func.isRequired,
};

export default DuelContainer;
