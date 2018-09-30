import * as types from '../components/search/const';
import * as globalTypes from '../const';
import myServices from '../services/myService';

export const startedSearchData = () => {
    return {
        type: types.STARTED_SEARCH_DATA,
        payload: globalTypes.LOADING,
    }
}

export const finishedSearchData = (data) => {
    return {
        type: types.FINISHED_SEARCH_DATA,
        payload: {
            data,
            state: globalTypes.SUCCESS,
        },
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

export const searchingData = (keyword) => {
    return async dispatch => {
        dispatch(startedSearchData());
        try {
            const response = await myServices.search(keyword);
            const data = await response.json();
            dispatch(finishedSearchData(data.results || []));
        } catch (err) {
            dispatch(notifyError(
                types.ERROR_SEARCHING_DATA,
                `there was a problem searching data`,
            ));
        }
    }
}
