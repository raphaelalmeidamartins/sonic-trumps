import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function useReturnToLogin() {
  const playerName = useSelector((state) => state.player.playerName);
  const gravatarEmail = useSelector((state) => state.player.gravatarEmail);

  const navigate = useNavigate();

  useEffect(() => {
    if (playerName === '' && gravatarEmail === '') { navigate('/', { replace: true }); }
  }, [navigate, playerName, gravatarEmail]);
}

export default useReturnToLogin;
