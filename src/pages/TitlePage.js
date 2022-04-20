import React, { useEffect } from 'react';
import { GiCardPick, GiCardRandom } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo-title.png';
import alrightSoundEffect from '../assets/sound-effects/alright.mp3';
import ringSoundEffect from '../assets/sound-effects/ring.mp3';
import useStartGame from '../hooks/useStartGame';
import '../sass/pages/TitlePage.css';

function TitlePage() {
  const navigate = useNavigate();
  const alrightSound = new Audio(alrightSoundEffect);
  const ringSound = new Audio(ringSoundEffect);

  const startGame = useStartGame();

  // used like componentDidMount, only runs when the component is mounted
  useEffect(startGame, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="TitlePage">
      <main>
        <img src={ logo } alt="Sonic Trunfo" />
        <button
          type="button"
          onClick={ () => {
            ringSound.play();
            navigate('/deck');
          } }
        >
          <span>Ver cartas</span>
        </button>
        <button
          type="button"
          onClick={ () => {
            alrightSound.play();
            navigate('/game');
          } }
        >
          <span>Jogar</span>
        </button>
      </main>
    </div>
  );
}

export default TitlePage;
