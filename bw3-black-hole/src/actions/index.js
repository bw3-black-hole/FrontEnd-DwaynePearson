import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({type: LOGIN_START});
    return
        axios.post('', creds)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
            })
            .catch(err => console.log(err));
}

export const DATA_START = 'DATA_START';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_FAILURE = 'DATA_FAILURE';
export const ADD_VENT = "ADD_VENT";
export const TOGGLE_VENT = "TOGGLE_VENT";

export const getData = () => dispatch => {
    dispatch({type: DATA_START});
    axios
        .get('https://black-hole-server.herokuapp.com/', {
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

export function addNewVent(newVent) {
    console.log("action addNewVent", newVent);
    return {
      type: ADD_VENT,
      payload: newVent
    };
  }

export function toggleVent(index) {
    console.log("action toggle vent index", index);
    return {
      type: TOGGLE_VENT,
      payload: index
    };
  }