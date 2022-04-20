import PropTypes from 'prop-types';
import React from 'react';
import { BiLink } from 'react-icons/bi';
import { GiBoxingGlove, GiEmerald, GiFoxTail, GiSonicShoes } from 'react-icons/gi';

function Input(props) {
  const {
    id,
    name,
    className,
    type,
    dataTestId,
    labelText,
    labelClassName,
    placeholder,
    required,
    propsForm,
  } = props;
  const { cardTrunfo, onInputChange } = propsForm;

  const returnInputValue = () => (propsForm[name] ? propsForm[name] : '');

  const returnAttrIcon = () => {
    if (name === 'cardAttr1') return (<div className="attr-icon"><GiSonicShoes /></div>);
    if (name === 'cardAttr2') return (<div className="attr-icon"><GiFoxTail /></div>);
    if (name === 'cardAttr3') return (<div className="attr-icon"><GiBoxingGlove /></div>);
  };

  const returnAttrTotalPoints = () => {
    if (name === 'cardAttr3') {
      const { cardAttr1, cardAttr2, cardAttr3 } = propsForm;
      const totalAllowed = 210;
      const totalLeft = totalAllowed - +cardAttr1 - +cardAttr2 - +cardAttr3;

      return (
        <p className="attr-total-left">
          Restantes
          <span data-testid="attr-total-left">{ totalLeft }</span>
        </p>
      );
    }
  };

  const returnInputElement = () => {
    if (type === 'checkbox') {
      return (
        <label className={ labelClassName } htmlFor={ id }>
          <div className={ `${labelClassName}-icon` }>
            <GiEmerald />
          </div>
          { labelText }
          <input
            id={ id }
            name={ name }
            className={ className }
            type={ type }
            data-testid={ dataTestId }
            required={ required }
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
      );
    }
    if (type === 'text' || type === 'number') {
      return (
        <div>
          <label className={ labelClassName } htmlFor={ id }>
            { returnAttrIcon() }
            { labelText }
            <div className={ name === 'cardImage' ? 'image-input-container' : null }>
              { name === 'cardImage'
                ? <div className="image-link-icon"><BiLink /></div>
                : null }
              <input
                id={ id }
                name={ name }
                className={ className }
                type={ type }
                data-testid={ dataTestId }
                required={ required }
                value={ returnInputValue() }
                placeholder={ placeholder }
                onChange={ onInputChange }
                maxLength={ name === 'cardName' ? '36' : null }
                min="0"
                max="90"
              />
            </div>
          </label>
          { returnAttrTotalPoints() }
        </div>
      );
    }
    if (type === 'textarea' || type === 'number') {
      return (
        <label className={ labelClassName } htmlFor={ id }>
          { labelText }
          <textarea
            id={ id }
            name={ name }
            className={ className }
            data-testid={ dataTestId }
            required={ required }
            value={ returnInputValue() }
            placeholder={ placeholder }
            onChange={ onInputChange }
            maxLength="81"
          />
        </label>
      );
    }
    if (type === 'select') {
      return (
        <label className={ labelClassName } htmlFor={ id }>
          { labelText }
          <select
            id={ id }
            name={ name }
            className={ className }
            data-testid={ dataTestId }
            required={ required }
            value={ returnInputValue() }
            placeholder={ placeholder }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
      );
    }
  };

  return returnInputElement();
}

Input.defaultProps = {
  labelText: '',
  labelClassName: null,
  required: false,
  placeholder: '',
  propsForm: {
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    onInputChange: () => {},
  },
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  labelClassName: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  propsForm: PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
    hasTrunfo: PropTypes.bool,
    isSaveButtonDisabled: PropTypes.bool,
    onInputChange: PropTypes.func,
  }),
};

export default Input;
