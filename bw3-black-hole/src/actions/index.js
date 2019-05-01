export { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, login } from './login';

export { DATA_START, DATA_SUCCESS, DATA_FAILURE, getData } from './ventData';


export const ADD_VENT = "ADD_VENT";
export const TOGGLE_VENT = "TOGGLE_VENT";



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