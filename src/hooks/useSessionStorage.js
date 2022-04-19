import { useDispatch } from 'react-redux';
import { actionGetSavedPlayerData } from '../redux/actions';

function useSessionStorage(key) {
  const savedState = JSON.parse(sessionStorage.getItem(key));
  const dispatch = useDispatch();
  dispatch(actionGetSavedPlayerData(savedState));
}

export default useSessionStorage;
