import { LOGIN_START, LOGIN_SUCCESS, DATA_START, DATA_SUCCESS, DATA_FAILURE } from '../actions';

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
                error: '',
                fetchingData: false,
                errorStatusCode: null,
                isLoggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: '',
                isLoggingIn: false
            }

        case DATA_START:
            return {
                ...state,
                error: '',
                fetchingData: true,
                errorStatusCode: null
            };

        case DATA_SUCCESS:
            return {
                ...state,
                error: '',
                errorStatusCode: null,
                fetchingData: false,
                vents: action.payload,
            };

        case DATA_FAILURE:
            return {
                ...state,
                fetchingData: false,
                error: action.payload.data.error,
                errorCodeStatus: action.payload.status
            };
        default:
            return state;
    }
};

