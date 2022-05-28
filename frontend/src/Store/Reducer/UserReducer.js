const initialState = {
    isIdle: false
}

function Reducer(state = initialState, { type, payload }) {
    switch (type) {
        case "SET_IS_IDLE":
            return { ...state, isIdle: payload }
        default:
            return state;
    }
}

export default Reducer;