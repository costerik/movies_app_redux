import * as types from './const';

const initialState = {
    results: [],
    reducerState: '',
    errorMessage: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.STARTED_SEARCH_DATA:
            return { ...state, reducerState: action.payload };
            break;
        case types.FINISHED_SEARCH_DATA:
            return { ...state, results: action.payload.data, reducerState: action.payload.state };
            break;
        case types.ERROR_SEARCHING_DATA:
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