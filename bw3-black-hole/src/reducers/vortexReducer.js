import { LOGIN_START, DATA_START, DATA_SUCCESS, DATA_FAILURE } from '../actions';

const initialState = {
    error: '',
    errorStatusCode: null,
    fetchingData: false,
    vents: [],
    isLoggingIn: false
};

export const vortexReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true
            };

        case DATA_START:
            return {
                ...state,
                error: '',
                fetchingData: true,
            };

        case DATA_SUCCESS:
            return {
                ...state,
                error: '',
                fetchingData: false,
                vents: action.payload,
            };

        case DATA_FAILURE:
            return {
                ...state,
                errorCodeStatus: action.payload.status
            };
        default:
            return state;
    }
};

