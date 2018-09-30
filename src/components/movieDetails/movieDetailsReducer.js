import * as types from './const';

const initialState = {
    datum: {},
    reducerState: '',
    errorMessage: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.STARTED_LOADING_DATUM_DETAILS:
            return { ...state, reducerState: action.payload };
            break;
        case types.FINISHED_LOADING_DATUM_DETAILS:
            return { ...state, reducerState: action.payload.state, datum: action.payload.datum };
            break;
        case types.ERROR_LOADING_DATUM_DETAILS:
            return {
                ...state,
                reducerState: action.payload.state,
                errorMessage: action.payload.message
            };
            break;
        default:
            return state;
            break;
    }
}