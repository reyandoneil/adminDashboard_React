const initialState = {
    isError: false,
    message: '',
    status: ''
}

function Reducer(state = initialState, { type, payload }) {
    switch (type) {
        case "SET_IS_ERROR":
            return { ...state, isError: payload }
        case "SET_ERROR_MESSAGE":
            return { ...state, message: payload }
        case "SET_ERROR_STATUS":
            return { ...state, status: payload }
        default:
            return state
    }
}

export default Reducer