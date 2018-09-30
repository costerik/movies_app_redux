import * as types from './const';

const initialState = {
    genres: [],
    year: null,
    genre: null,
    order: null,
    keywords: '',
    reducerState: '',
    errorMessage: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_YEAR:
            return { ...state, year: action.payload };
            break;
        case types.SET_GENRE:
            return { ...state, genre: action.payload };
            break;
        case types.SET_ORDER:
            return { ...state, order: action.payload };
            break;
        case types.SET_KEYWORD:
            return { ...state, keywords: action.payload };
            break;
        case types.STARTED_LOADING_GENRES:
            return { ...state, reducerState: action.payload }
            break;
        case types.FINISHED_LOADING_GENRES:
            return {
                ...state,
                reducerState: action.payload.state,
                genres: action.payload.genres,
            }
            break;
        case types.ERROR_LOADING_GENRES:
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