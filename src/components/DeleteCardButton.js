import React from 'react';
import checkpoint from '../assets/sound-effects/sonic_checkpoint_sound-effect.mp3';

function DeleteCardButton() {
  const checkpointSound = new Audio(checkpoint);

  return (
    <button
      className="Card-delete-btn"
      data-testid="delete-button"
      type="button"
      onClick={ () => {
        checkpointSound.play();
        // removeCard(index, cardTrunfo);
      } }
    >
      Excluir
    </button>
  );
}

export default DeleteCardButton;
