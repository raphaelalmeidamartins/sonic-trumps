import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import checkpoint from '../assets/sound-effects/sonic_checkpoint_sound-effect.mp3';
import inputsDataArray from '../data/inputs-data';
import Input from './Input';
import '../sass/components/CreateCardForm.css';
import { actionSaveCustonCard, actionUpdateCustomCardForm } from '../redux/actions';

function CreateCardForm() {
  const {
    cardName,
    cardDescription,
    cardImage,
    cardRare,
    cardAttr1,
    cardAttr2,
    cardAttr3,
  } = useSelector((state) => state.customCard.form);

  const { form, hasTrunfo } = useSelector((state) => state.customCard);

  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    const { name, value, checked } = target;

    let currValue = target.type === 'checkbox' ? checked : value;
    const maxLengthName = 36;
    const maxLengthDescription = 81;
    if (name === 'cardName') currValue = currValue.slice(0 - maxLengthName);
    if (name === 'cardDescription') currValue = currValue.slice(0 - maxLengthDescription);

    if (name.match(/cardAttr[1-3]/)) {
      const min = 0;
      const max = 90;
      if (+currValue < min) currValue = min;
      if (+currValue > max) currValue = max;
      const radix = 10;
      currValue = parseInt(currValue, radix);
      if (Number.isNaN(currValue)) currValue = 0;
      currValue = String(currValue);
    }
    dispatch(actionUpdateCustomCardForm({ [name]: currValue }));
  };

  const handleSaveButtonClick = (event) => {
    event.preventDefault();
    const checkpointSound = new Audio(checkpoint);
    checkpointSound.play();
    dispatch(actionSaveCustonCard(form));
  };

  const validateForm = () => {
    let isFormInvalid = false;
    const areInputsEmpty = [
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    ].some((inputValue) => !inputValue);
    const areAttrInvalid = [cardAttr1, cardAttr2, cardAttr3]
      .some((attr) => {
        const min = 0;
        const max = 90;
        return attr < min || attr > max;
      });
    const minTotal = 0;
    const maxTotal = 210;
    const totalAttr = [cardAttr1, cardAttr2, cardAttr3]
      .reduce((acc, curr) => acc + +curr, 0);
    if (
      areInputsEmpty
      || areAttrInvalid
      || totalAttr < minTotal
      || totalAttr > maxTotal
    ) isFormInvalid = true;

    return isFormInvalid;
  };

  const renderInputs = () => inputsDataArray.map((currInput) => {
    if (currInput.type === 'checkbox' && hasTrunfo === true) {
      return (
        <p
          className="trunfo-msg"
          data-testid="trunfo-input"
          key={ currInput.id }
        >
          Você já tem um Super Trunfo em seu baralho
        </p>
      );
    }

    return (
      <Input
        key={ currInput.id }
        { ...currInput }
        propsForm={ { ...form } }
        onInputChange={ handleInputChange }
      />
    );
  });

  return (
    <form id="CreateCardForm" className="CreateCardForm" method="POST">
      {renderInputs()}
      <button
        type="submit"
        className="save-button"
        data-testid="save-button"
        disabled={ validateForm() }
        onClick={ handleSaveButtonClick }
      >
        Salvar
      </button>
    </form>
  );
}

CreateCardForm.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
};

CreateCardForm.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default CreateCardForm;
