import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import checkpoint from '../assets/sound-effects/sonic_checkpoint_sound-effect.mp3';
import { actionRemoveCard } from '../redux/actions';
import '../sass/components/DeleteCardButton.css';

function DeleteCardButton({ index }) {
  const checkpointSound = new Audio(checkpoint);
  const dispatch = useDispatch();

  return (
    <button
      className="DeleteCardButton"
      data-testid="delete-button"
      type="button"
      onClick={ () => {
        checkpointSound.play();
        dispatch(actionRemoveCard(index));
      } }
    >
      Excluir
    </button>
  );
}

DeleteCardButton.propTypes = {
  index: PropTypes.number.isRequired,
};

export default DeleteCardButton;
