const initialState = {
  ss: '',
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_SCREEN_SIZE':
      return { ...state, ss: payload };
    default:
      return state;
  }
}

export default Reducer;
