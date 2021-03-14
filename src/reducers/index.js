import { combineReducers } from 'redux';

import gameState from './gameStateReducer';

const rootreducer = combineReducers({
  gameState,
});

export default rootreducer;
