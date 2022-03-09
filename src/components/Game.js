import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  GiSonicShoes,
  GiFoxTail,
  GiBoxingGlove,
} from 'react-icons/gi';
import {
  RiEmotionHappyFill,
  RiEmotionUnhappyFill,
  RiEmotionNormalFill,
} from 'react-icons/ri';
import { BiLeftArrowAlt } from 'react-icons/bi';
import PlayerHand from './PlayerHand';
import DuelContainer from './DuelContainer';
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);

    this.selectCard = this.selectCard.bind(this);

    const { deck } = props;
    const playerHand = this.shuffleCards(deck);
    const cpuHand = this.shuffleCards(deck);

    this.state = {
      currRound: 1,
      didPlayerWinRound: false,
      draw: false,
      currAttr: 'cardAttr1',
      wins: 0,
      cpuWins: 0,
      playerHand,
      playerCard: null,
      cpuCard: null,
      cpuHand,
      displayHand: false,
      displayDuel: false,
    };
  }

  shuffleCards(deck) {
    const handCards = 6;
    const shuffle = 0.5;

    return [...deck]
      .sort(() => Math.random() - shuffle)
      .slice(0, handCards);
  }

  returnRandomAttr(currAttr) {
    if (currAttr === 'cardAttr1') {
      return (
        <section className="Game-attr">
          <div className="Game-attr-icon">
            <GiSonicShoes />
          </div>
          <span className="Game-attr-text">SPEED</span>
        </section>
      );
    }
    if (currAttr === 'cardAttr2') {
      return (
        <section className="Game-attr">
          <div className="Game-attr-icon">
            <GiFoxTail />
          </div>
          <span className="Game-attr-text">SKILL</span>
        </section>
      );
    }
    if (currAttr === 'cardAttr3') {
      return (
        <section className="Game-attr">
          <div className="Game-attr-icon">
            <GiBoxingGlove />
          </div>
          <span className="Game-attr-text">POWER</span>
        </section>
      );
    }
  }

  selectCard(index) {
    const { currAttr, currRound, wins, cpuWins, playerHand, cpuHand } = this.state;

    let updatedWins = wins;
    let updatedCpuWins = cpuWins;
    let didPlayerWinRound = false;
    let draw = false;

    const playerCard = { ...playerHand[index] };
    const cpuCard = {
      ...[...cpuHand]
        .sort((prev, curr) => curr[currAttr] - prev[currAttr])[0],
    };

    if (playerCard[currAttr] > cpuCard[currAttr]) {
      updatedWins += 1;
      didPlayerWinRound = true;
    }
    if (playerCard[currAttr] < cpuCard[currAttr]) updatedCpuWins += 1;
    if (playerCard[currAttr] === cpuCard[currAttr]) draw = true;

    const updatedPlayerHand = [...playerHand];
    updatedPlayerHand.splice(index, 1);

    const updatedCpuHand = [...cpuHand];
    updatedCpuHand.splice(index, 1);

    const numberOfAttr = 3;
    const randomAttr = `cardAttr${Math.round(Math.random() * (numberOfAttr - 1) + 1)}`;

    this.setState({
      didPlayerWinRound,
      draw,
      playerHand: updatedPlayerHand,
      playerCard,
      cpuHand: updatedCpuHand,
      cpuCard,
      wins: updatedWins,
      cpuWins: updatedCpuWins,
      currRound: currRound + 1,
      currAttr: (currRound % 2) !== 0 ? randomAttr : 'cardAttr1',
      displayHand: false,
      displayDuel: true,
    });
  }

  renderFinalMessage(wins, cpuWins) {
    if (wins === cpuWins) {
      return (
        <section className="Game-end">
          <p>Empate!</p>
          <div className="Game-end-icon">
            <RiEmotionNormalFill />
          </div>
        </section>
      );
    }
    return wins > cpuWins
      ? (
        <section className="Game-end">
          <p>Parabéns, você ganhou!</p>
          <div className="Game-end-icon">
            <RiEmotionHappyFill />
          </div>
        </section>
      )
      : (
        <section className="Game-end">
          <p>Que pena, você perdeu!</p>
          <div className="Game-end-icon">
            <RiEmotionUnhappyFill />
          </div>
        </section>
      );
  }

  render() {
    const { quitGame } = this.props;
    const {
      currRound,
      didPlayerWinRound,
      draw,
      currAttr,
      wins,
      cpuWins,
      playerHand,
      playerCard,
      cpuCard,
      displayHand,
      displayDuel,
    } = this.state;
    const playerTurn = Boolean(currRound % 2 !== 0);
    const finalRound = 7;

    return (
      <main className="Game">
        <DuelContainer
          playerCard={ playerCard }
          cpuCard={ cpuCard }
          displayDuel={ displayDuel }
          nextTurn={ () => this.setState({ displayDuel: false }) }
          didPlayerWinRound={ didPlayerWinRound }
          draw={ draw }
        />
        <header className="Game-header">
          <span className="Game-header-rounds">{ `Rodadas: ${currRound - 1}/6` }</span>
          <div className="Game-header-wins-container">
            <span className="Game-header-wins">{ `Vitórias: ${wins}`}</span>
            <span className="Game-header-wins">{ `Derrotas: ${cpuWins}`}</span>
          </div>
        </header>
        {currRound === finalRound && this.renderFinalMessage(wins, cpuWins)}
        {currRound < finalRound && (
          <section className="Game-panel">
            <h1 className="Game-current-round">{ `Rodada ${currRound}` }</h1>
            <p
              className="Game-turn"
            >
              { (currRound % 2 === 0) ? 'Vez da CPU!' : 'Sua vez! Escolha um atributo:' }
            </p>
            { !playerTurn && this.returnRandomAttr(currAttr) }
            { playerTurn && (
              <select
                name="playerAttrSelect"
                className="Game-select-attr"
                onChange={ ({ target }) => this.setState({ currAttr: target.value }) }
              >
                <option value="cardAttr1">Speed</option>
                <option value="cardAttr2">Skill</option>
                <option value="cardAttr3">Power</option>
              </select>
            ) }
            <button
              className="Game-button Game-select-card"
              type="button"
              onClick={ () => this.setState({ displayHand: true }) }
              disabled={ displayDuel }
            >
              Selecionar Carta
            </button>
          </section>)}
        <PlayerHand
          playerHand={ playerHand }
          selectCard={ this.selectCard }
          displayHand={ displayHand }
          hideHand={ () => this.setState({ displayHand: false }) }
        />
        <div className="Game-quit-icon" title="Voltar">
          <BiLeftArrowAlt onClick={ quitGame } />
        </div>
      </main>
    );
  }
}

Game.propTypes = {
  quitGame: PropTypes.func.isRequired,
  deck: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Game;
