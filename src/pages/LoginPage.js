import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionUpdatePlayerData } from '../redux/actions';
import '../sass/pages/LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const playerName = useSelector((state) => state.player.playerName);
  const gravatarEmail = useSelector((state) => state.player.gravatarEmail);

  const dispatch = useDispatch();

  const updatePlayerData = ({ target }) => {
    dispatch(actionUpdatePlayerData(target.name, target.value));
  };

  const validateFields = (name, email) => {
    const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const minNameLength = 3;
    if (name.length < minNameLength || !email.match(emailRegExp)) return true;
    return false;
  };

  return (
    <div className="LoginPage">
      <form>
        <h1>Sonic Trumps</h1>
        <p>Sign in to play</p>
        <input
          type="text"
          name="playerName"
          placeholder="Enter your name"
          value={ playerName }
          maxLength="64"
          onChange={ updatePlayerData }
        />
        <input
          type="email"
          name="gravatarEmail"
          placeholder="Enter your email"
          value={ gravatarEmail }
          onChange={ updatePlayerData }
        />
        <button
          type="submit"
          disabled={ validateFields(playerName, gravatarEmail) }
          onClick={ () => navigate('/deck', { replace: true }) }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
