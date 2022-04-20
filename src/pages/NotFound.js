import React from 'react';
import { RiHome5Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import notFoundImg from '../assets/404.png';
import ringSoundEffect from '../assets/sound-effects/ring.mp3';
import '../sass/pages/NotFound.css';

function NotFound() {
  const navigate = useNavigate();
  const ringSound = new Audio(ringSoundEffect);

  return (
    <div className="NotFound">
      <main>
        <h1>Erro 404: Página não encontrada</h1>
        <img src={ notFoundImg } alt="Sonic Trunfo" />
        <p>
          Poxa, parece que você se perdeu. Espero que assim como o Big, você
          consiga encontrar o que está procurando
        </p>
        <button
          type="button"
          onClick={ () => {
            ringSound.play();
            navigate('/');
          } }
        >
          <div className="NotFound-button-icon">
            <RiHome5Fill />
          </div>
          <span>Página inicial</span>
        </button>
      </main>
    </div>
  );
}

export default NotFound;
