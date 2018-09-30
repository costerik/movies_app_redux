import * as types from '../components/list/const';
import * as globalTypes from '../const';
import myServices from '../services/myService';

export const startedLoadingData = () => {
    return {
        type: types.STARTED_LOADING_DATA,
        payload: globalTypes.LOADING,
    }
}

export const finishedLoadingData = (data) => {
    return {
        type: types.FINISHED_LOADING_DATA,
        payload: {
            state: globalTypes.SUCCESS,
            data,
        }
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

export const loadingData = () => {
    return async (dispatch, getState) => {
        dispatch(startedLoadingData());
        try {
            const { filtersReducer } = getState();
            const { year, genre, keywords, order } = filtersReducer;
            const params = {
                year: year && year.value || '',
                with_genres: genre && genre.value || '',
                sort_by: order && order.value || '',
            }
            const response = await myServices.getDiscover(params);
            const data = await response.json();
            dispatch(finishedLoadingData(data));
        } catch (err) {
            dispatch(notifyError(
                types.ERROR_LOADING_DATA,
                `there was a problem loading data`,
            ));
        }
    }
}