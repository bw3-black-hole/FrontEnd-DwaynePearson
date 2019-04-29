import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const login = creds => dispatch => {
    dispatch({type: LOGIN_START});
    return
        axios
            .post('', creds)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
            })
            .catch(err => console.log(err));
}

export const DATA_START = 'DATA_START';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_FAILURE = 'DATA_FAILURE';
export const getData = () => dispatch => {
    dispatch({type: DATA_START});
    axios
        .get('', {
            headers: {Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(res);
            dispatch({ type: DATA_SUCCESS, payload: res.data.data });
        })
        .catch(err => {
            console.log(err.response);
            if (err.response.status === 403) {
                localStorage.removeItem('token');
            }
            dispatch({ type: DATA_FAILURE, payload: err.response });
        })
};