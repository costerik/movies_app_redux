import * as types from '../components/filters/const';
import * as globalTypes from '../const';
import myServices from '../services/myService';
import {loadingData } from './listAction';

export const startedLoadingGenres = () => {
    return {
        type: types.STARTED_LOADING_GENRES,
        payload: globalTypes.LOADING,
    }
}

export const finishedLoadingGenres = (data) => {
    return {
        type: types.FINISHED_LOADING_GENRES,
        payload: {
            state: globalTypes.SUCCESS,
            genres: data,
        }
    }
}

export const setYear = (year) => {
    return async dispatch => {
        dispatch({
            type: types.SET_YEAR,
            payload: year,
        });
        await dispatch(loadingData());
    }
}

export const setOrder = (order) => {
    return async (dispatch, getState) => {
        dispatch({
            type: types.SET_ORDER,
            payload: order,
        });
        await dispatch(loadingData());
    }
}

export const setGenre = (genre) => {
    return async (dispatch, getState) => {
        dispatch({
            type: types.SET_GENRE,
            payload: genre,
        });
        await dispatch(loadingData());
    }
}

export const setKeyword = (keyword) => {
    return async dispatch => {
        dispatch({
            type: types.SET_KEYWORD,
            payload: keyword,
        });
        await dispatch(loadingData());
    }
}

export const notifyError = (type, err) => {
    return {
        type,
        payload: {
            state: globalTypes.ERROR,
            message: err,
        },
    }
}

export const loadingGenres = () => {
    return async dispatch => {
        dispatch(startedLoadingGenres());
        try {
            const response = await myServices.getGenres();
            const data = await response.json();
            const genres = data.genres.map(genre => {
                return {
                    value: genre.id,
                    label: genre.name,
                }
            });
            dispatch(finishedLoadingGenres(genres));
        } catch (ex) {
            dispatch(notifyError(
                types.ERROR_LOADING_DATA,
                `there was a problem loading genres`,
            ));
        }
    }
}