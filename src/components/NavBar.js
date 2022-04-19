import React, { useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import { GiCardPick, GiCardRandom } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import alrightSoundEffect from '../assets/sound-effects/alright.mp3';
import SearchBar from './SearchBar';
import '../sass/components/NavBar.css';

function NavBar() {
  const ringSound = new Audio(alrightSoundEffect);

  const hidden = 'SearchBar SearchBar-hidden';

  const [hideOrDisplay, setHideOrDisplay] = useState(hidden);

  const navigate = useNavigate();

  const handleSearchButtonClick = () => {
    if (hideOrDisplay === 'SearchBar') {
      setHideOrDisplay(hidden);
    }
    if (hideOrDisplay === hidden) {
      setHideOrDisplay('SearchBar');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="NavBar-container">
      <nav className="NavBar">
        <div className="NavBar-nav">
          <button
            type="button"
            onClick={ scrollToTop }
            className="NavBar-button ToTop"
          >
            <div className="NavBar-button-icon">
              {/* eslint-disable-next-line react/jsx-max-depth */}
              <BiArrowToTop />
            </div>
            <span>Voltar</span>
          </button>
          <button
            type="button"
            className="NavBar-button Search"
            onClick={ handleSearchButtonClick }
          >
            <div className="NavBar-button-icon">
              {/* eslint-disable-next-line react/jsx-max-depth */}
              <GiCardPick />
            </div>
            <span>Pesquisar</span>
          </button>
          <button
            type="button"
            className="NavBar-button Play"
            onClick={ () => {
              ringSound.play();
              navigate('/game');
            } }
          >
            <div className="NavBar-button-icon">
              {/* eslint-disable-next-line react/jsx-max-depth */}
              <GiCardRandom />
            </div>
            <span>Jogar</span>
          </button>
        </div>
        <SearchBar
          hideOrDisplay={ hideOrDisplay }
        />
      </nav>
    </div>
  );
}

export default NavBar;
