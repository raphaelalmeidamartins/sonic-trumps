import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import inputsDataArray from '../data/inputs-data';
import './Form.css';
import checkpoint from '../assets/sound-effects/sonic_checkpoint_sound-effect.mp3';

class Form extends Component {
  constructor() {
    super();

    this.renderInputs = this.renderInputs.bind(this);
  }

  renderInputs(hasTrunfo) {
    return inputsDataArray.map((currInput) => {
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
      return (<Input key={ currInput.id } { ...currInput } propsForm={ this.props } />);
    });
  }

  render() {
    const { hasTrunfo, isSaveButtonDisabled, onSaveButtonClick } = this.props;
    const checkpointSound = new Audio(checkpoint);

    return (
      <form id="Form" className="Form">
        { this.renderInputs(hasTrunfo) }
        <button
          type="submit"
          className="save-button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ (event) => {
            checkpointSound.play();
            onSaveButtonClick(event);
          } }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
};

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
