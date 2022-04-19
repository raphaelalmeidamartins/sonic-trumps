import React from 'react';
import PropTypes from 'prop-types';
import { GiSonicShoes, GiFoxTail, GiBoxingGlove, GiEmerald } from 'react-icons/gi';
import useSelectCard from '../hooks/useSelectCard';
import '../sass/components/CardMini.css';

function CardMini(props) {
  const {
    cardName,
    cardImage,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardTrunfo,
  } = props;

  const selectCard = useSelectCard(props);

  return (
    <button
      type="button"
      className="CardMini"
      onClick={ selectCard }
    >
      {cardTrunfo && (
        <div className="CardMini-trunfo-icon">
          <GiEmerald />
        </div>
      )}
      <img className="CardMini-img" src={ cardImage } alt={ cardName } />
      <ul className="CardMini-attr-container">
        <li className="CardMini-attr">
          <div className="CardMini-attr-icon">
            <GiSonicShoes />
          </div>
          <div className="CardMini-attr-value">{ cardAttr1 }</div>
        </li>
        <li className="CardMini-attr">
          <div className="CardMini-attr-icon">
            <GiFoxTail />
          </div>
          <div className="CardMini-attr-value">{ cardAttr2 }</div>
        </li>
        <li className="CardMini-attr">
          <div className="CardMini-attr-icon">
            <GiBoxingGlove />
          </div>
          <div className="CardMini-attr-value">{ cardAttr3 }</div>
        </li>
      </ul>
    </button>
  );
}

CardMini.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default CardMini;
