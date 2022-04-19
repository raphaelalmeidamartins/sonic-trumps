import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionSelectAttribute } from '../redux/actions';

function SelectAttribute() {
  const attributes = useSelector((state) => state.game.attributes);
  const currAttr = useSelector((state) => state.game.currAttr);
  const currRound = useSelector((state) => state.game.currRound);
  const cpuTurn = useSelector((state) => state.game.cpuTurn);

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
    <div>
      {currRound % 2 === 0 && (
        <p>
          <span>Attribute:</span>
          <span>{currAttr}</span>
        </p>
      )}
      {currRound % 2 !== 0 && (
        <label htmlFor="attribute">
          <span>Select an attribute:</span>
          <select
            name="currAttr"
            value={ currAttr }
            onChange={ handleChange }
          >
            {attributes.map((attr) => (
              <option key={ attr }>{attr}</option>
            ))}
          </select>
        </label>
      )}
    </div>
  );
}

export default SelectAttribute;
