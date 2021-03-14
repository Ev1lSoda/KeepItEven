const initialSetup = {
  firstTurn: false,
  mfg: 12,
  mpt: 3,
  goBtn: 'Start ❭❭❭',
  isPlaying: false,
  haveWon: false,
};

export default (state = initialSetup, action) => {
  for (let oneState in initialSetup) {
    if (action.type === oneState) {
      const newState = Object.assign({}, state);
      newState[action.type] = action.payload;
      console.log(`${action.type}: ${newState.firstTurn}`);
      return newState;
    }
  }
  return state;
};
