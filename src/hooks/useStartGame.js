import { useDispatch } from 'react-redux';
import { actionShuffleCards, actionResetGame } from '../redux/actions';

function useStartGame() {
  const dispatch = useDispatch();

  return function startGame() {
    dispatch(actionShuffleCards());
    dispatch(actionResetGame());
  }
}

export default useStartGame;
