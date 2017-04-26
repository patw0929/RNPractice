import { combineReducers } from 'redux';
import AppNavigator from '../../AppNavigator';
import albumReducer from './albums';

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);

  return (newState ? newState : state)
};

export default combineReducers({
  nav: navReducer,
  albums: albumReducer,
});
