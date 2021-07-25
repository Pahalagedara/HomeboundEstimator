import * as actionType from "../types/estimateTypes"

const INITIAL_STATE = {
    location: String|null ,
    landAvailability: String|null,
    budget: String|null,
    progress: Number | 10,
    isNaturalDisaster: Boolean,
};

const estimateReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case actionType.ADD_LOCATION: {
            return {
                ...state,
                location: action.payload
            };
        }
        case actionType.CHANGE_LAND_AVAILABILITY: {
            return {
                ...state,
                landAvailability: action.payload
            };
        }
        case actionType.SET_BUDGET: {
            return {
                ...state,
                budget: action.payload
            };
        }
        case actionType.INC_PROGRESS_VALUE: {
            return {
                ...state,
                progress: state.progress + 10
            };
        }
        case actionType.DEC_PROGRESS_VALUE_TO: {
            return {
                ...state,
                progress: action.payload
            };
        }
        case actionType.SET_DISASTER_TYPE: {
            return {
                ...state,
                isNaturalDisaster: action.payload
            };
        }
        default:
            return state;
    }
};

export default estimateReducer;