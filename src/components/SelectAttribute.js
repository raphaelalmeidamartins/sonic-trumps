import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionSelectAttribute, actionDisplayPlayerHand } from '../redux/actions';
import CpuAttribute from './CpuAttribute';
import '../sass/components/SelectAttribute.css';

function SelectAttribute() {
  const attributes = useSelector((state) => state.game.attributes);
  const attributeNames = useSelector((state) => state.game.attributeNames);
  const currAttr = useSelector((state) => state.game.currAttr);
  const currRound = useSelector((state) => state.game.currRound);
  const cpuTurn = useSelector((state) => state.game.cpuTurn);
  const displayHand = useSelector((state) => state.game.displayHand);
  const displayDuel = useSelector((state) => state.game.displayDuel);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(actionSelectAttribute(target.value));
  };

  useEffect(() => {
    const shuffle = 0.5;
    const randomAttr = [...attributes]
      .sort(() => Math.random() - shuffle)[0];

    dispatch(actionSelectAttribute(randomAttr));
  }, [cpuTurn, attributes, dispatch]);

  return (
    <section className="SelectAttribute">
      <h1>{ `Rodada ${currRound}` }</h1>
      {currRound % 2 === 0 && (
        <>
          <p>Vez da CPU!</p>
          <CpuAttribute />
        </>
      )}
      {currRound % 2 !== 0 && (
        <>
          <p>Sua vez! Escolha um atributo:</p>
          <select
            name="currAttr"
            value={ currAttr }
            onChange={ handleChange }
          >
            {attributes.map((attr) => (
              <option key={ attr } value={ attr }>{attributeNames[attr]}</option>
            ))}
          </select>
        </>
      )}
      <button
        className="Game-button Game-select-card"
        type="button"
        onClick={ () => dispatch(actionDisplayPlayerHand()) }
        disabled={ Boolean(displayDuel || displayHand) }
      >
        Selecionar Carta
      </button>
    </section>
  );
}

export default SelectAttribute;
