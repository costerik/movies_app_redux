import * as types from '../components/movieDetails/const';
import * as globalTypes from '../const';
import myServices from '../services/myService';

export const startedLoadingDatumDetails = () => {
    return {
        type: types.STARTED_LOADING_DATUM_DETAILS,
        payload: globalTypes.LOADING,
    }
}

export const finishedLoadingDatumDetails = (datum) => {
    return {
        type: types.FINISHED_LOADING_DATUM_DETAILS,
        payload: {
            state: globalTypes.SUCCESS,
            datum,
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

export const loadingDatumDetails = (id) => {
    return async dispatch => {
        dispatch(startedLoadingDatumDetails());
        try {
            const response = await myServices.getMovie(id) ;
            const datum = await response.json();
            dispatch(finishedLoadingDatumDetails(datum));
        } catch (err) {
            dispatch(notifyError(
                types.ERROR_LOADING_DATUM_DETAILS,
                `there was a problem loading datum details`,
            ));
        }
    }
}