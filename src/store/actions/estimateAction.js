import * as actionType from "../types/estimateTypes"

export const addLocation = (value) => {
    return {
        type: actionType.ADD_LOCATION,
        payload: value,
    };
};

export const changeLandAvailability = (value) => {
    return {
        type: actionType.CHANGE_LAND_AVAILABILITY,
        payload: value,
    };
};

export const setBudget = (value) => {
    return {
        type: actionType.SET_BUDGET,
        payload: value,
    };
};

export const setProgress = () => {
    return {
        type: actionType.SET_PROGRESS_VALUE,
    };
};