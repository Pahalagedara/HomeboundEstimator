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

export const incProgress = () => {
    return {
        type: actionType.INC_PROGRESS_VALUE,
    };
};

export const decProgress = () => {
    return {
        type: actionType.DEC_PROGRESS_VALUE,
    };
};

export const decProgressTo = (value) => {
    return {
        type: actionType.DEC_PROGRESS_VALUE_TO,
        payload: value
    };
};

export const isNaturalDisaster = (value) => {
    return {
        type: actionType.SET_DISASTER_TYPE,
        payload: value,
    }
}