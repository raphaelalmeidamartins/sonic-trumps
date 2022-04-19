import React from 'react';

function GamePanel() {
  return (
    // <section className="Game-panel">
    //   <h1 className="Game-current-round">{ `Rodada ${currRound}` }</h1>
    //   <p
    //     className="Game-turn"
    //   >
    //     { (currRound % 2 === 0) ? 'Vez da CPU!' : 'Sua vez! Escolha um atributo:' }
    //   </p>
    //   { !playerTurn && this.returnRandomAttr(currAttr) }
    //   { playerTurn && (
    //     <select
    //       name="playerAttrSelect"
    //       className="Game-select-attr"
    //       onChange={ ({ target }) => this.setState({ currAttr: target.value }) }
    //     >
    //       <option value="cardAttr1">Speed</option>
    //       <option value="cardAttr2">Skill</option>
    //       <option value="cardAttr3">Power</option>
    //     </select>
    //   ) }
    //   <button
    //     className="Game-button Game-select-card"
    //     type="button"
    //     onClick={ () => this.setState({ displayHand: true }) }
    //     disabled={ Boolean(displayDuel || displayHand) }
    //   >
    //     Selecionar Carta
    //   </button>
    // </section>
  );
}

export default GamePanel;
