import axiosWithAuth from '../utils/axiosAuth';


export const DATA_START = 'DATA_START';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_FAILURE = 'DATA_FAILURE';

export const getData = () => dispatch => {
    dispatch({type: DATA_START});
    axiosWithAuth()
        .get('https://black-hole-server.herokuapp.com/', {
            headers: {Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            dispatch({ type: DATA_SUCCESS, payload: res.data.data });
        })
        .catch(err => {
            if (err.response.status === 403) {
                localStorage.removeItem('token');
            }
            dispatch({ type: DATA_FAILURE, payload: err.response });
        })
};