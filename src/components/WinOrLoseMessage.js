import React from 'react';
import PropTypes from 'prop-types';
import {
  RiEmotionHappyFill,
  RiEmotionUnhappyFill,
  RiEmotionNormalFill,
} from 'react-icons/ri';

function WinOrLoseMessage({ draw, winOrLose }) {
  if (draw) {
    return (
      <p className="Duel-text">
        <span>Empate!</span>
        <RiEmotionNormalFill />
      </p>
    );
  }
  return winOrLose
    ? (
      <p className="Duel-text">
        <span className="win">Ganhou!</span>
        <RiEmotionHappyFill className="win" />
      </p>
    )
    : (
      <p className="Duel-text">
        <span className="lose">Perdeu!</span>
        <RiEmotionUnhappyFill className="lose" />
      </p>
    );
}

WinOrLoseMessage.propTypes = {
  draw: PropTypes.bool.isRequired,
  winOrLose: PropTypes.bool.isRequired,
};

export default WinOrLoseMessage;
