import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = ( credentials ) => dispatch => {
    dispatch({ type: LOGIN_START })
    return axios.post('https://blackhole-app.herokuapp.com/login', credentials )
        .then(res => {
            console.log('hello')
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE }))
    
}

// console.log(res)
//             localStorage.setItem('token', res.data.token);

// axios.post('https://blackhole-app.herokuapp.com/login', { email, password })
//         .then(res => {
//             dispatch({ type})
//         })

// dispatch({type: LOGIN_START});