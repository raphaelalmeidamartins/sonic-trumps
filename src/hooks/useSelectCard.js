import { useDispatch, useSelector } from 'react-redux';
import { actionSelectCard } from '../redux/actions';

function useSelectCard(playerCard) {
  const cpuHand = useSelector((state) => state.deck.cpuHand);
  const currAttr = useSelector((state) => state.game.currAttr);
  const dispatch = useDispatch();

  return function handleSelectCard() {
    const cpuCard = [...cpuHand]
      .sort((prev, curr) => curr[currAttr] - prev[currAttr])[0];

    dispatch(actionSelectCard(playerCard, cpuCard, currAttr));
  };
}

export default useSelectCard;
