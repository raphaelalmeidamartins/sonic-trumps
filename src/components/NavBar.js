import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GiCardPick, GiCardRandom } from 'react-icons/gi';
import { BiArrowToTop } from 'react-icons/bi';
import SearchBar from './SearchBar';
import './NavBar.css';
import ringSoundEffect from '../assets/sound-effects/sonic_ring_sound_effect.mp3';

const hidden = 'SearchBar SearchBar-hidden';

class NavBar extends Component {
  constructor() {
    super();

    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);

    this.state = {
      hideOrDisplay: hidden,
    };
  }

  handleSearchButtonClick() {
    const { hideOrDisplay } = this.state;

    if (hideOrDisplay === 'SearchBar') {
      this.setState({ hideOrDisplay: hidden });
    }
    if (hideOrDisplay === hidden) {
      this.setState({ hideOrDisplay: 'SearchBar' });
    }
  }

  render() {
    const { onInputChange, startGame } = this.props;
    const { hideOrDisplay } = this.state;
    const ringSound = new Audio(ringSoundEffect);

    return (
      <nav className="NavBar">
        <div className="NavBar-nav">
          <a href="#root" className="NavBar-button ToTop">
            <div className="NavBar-button-icon">
              <BiArrowToTop />
            </div>
            <span>Voltar</span>
          </a>
          <button
            type="button"
            className="NavBar-button Search"
            onClick={ this.handleSearchButtonClick }
          >
            <div className="NavBar-button-icon">
              <GiCardPick />
            </div>
            <span>Pesquisar</span>
          </button>
          <button
            type="button"
            className="NavBar-button Play"
            onClick={ () => {
              ringSound.play();
              startGame();
            } }
          >
            <div className="NavBar-button-icon">
              <GiCardRandom />
            </div>
            <span>Jogar</span>
          </button>
        </div>
        <SearchBar
          onInputChange={ onInputChange }
          hideOrDisplay={ hideOrDisplay }
        />
      </nav>
    );
  }
}

NavBar.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default NavBar;
