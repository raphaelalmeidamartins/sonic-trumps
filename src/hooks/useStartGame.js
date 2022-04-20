import { useDispatch } from 'react-redux';
import { actionResetGame, actionShuffleCards } from '../redux/actions';

function useStartGame() {
  const dispatch = useDispatch();

  return function startGame() {
    dispatch(actionShuffleCards());
    dispatch(actionResetGame());
  };
}

export default useStartGame;
