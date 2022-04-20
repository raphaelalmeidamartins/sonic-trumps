import React from 'react';
import { GiCardRandom } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import alrightSoundEffect from '../assets/sound-effects/alright.mp3';
import '../sass/pages/TitlePage.css';

function TitlePage() {
  const navigate = useNavigate();
  const alrightSound = new Audio(alrightSoundEffect);

  return (
    <div className="TitlePage">
      <main>
        <img src={ logo } alt="Sonic Trunfo" />
        <button
          type="button"
          onClick={ () => {
            alrightSound.play();
            navigate('/deck');
          } }
        >
          <div className="TitlePage-button-icon">
            <GiCardRandom />
          </div>
          <span>Ver cartas</span>
        </button>
        <button
          type="button"
          onClick={ () => {
            alrightSound.play();
            navigate('/game');
          } }
        >
          <div className="TitlePage-button-icon">
            <GiCardRandom />
          </div>
          <span>Jogar</span>
        </button>
      </main>
    </div>
  );
}

export default TitlePage;
