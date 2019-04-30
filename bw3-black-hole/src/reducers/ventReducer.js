import { ADD_VENT, TOGGLE_VENT } from '../actions';

const initialState = {
    vents: []
  };
  
  export const ventReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_VENT:
        const newVent = {
          topic: action.payload,
          body: action.payload,
          delete: false,
          index: Date.now()
        };
        return {
          ...state,
          vents: [...state.vents, newVent]
        };
      case TOGGLE_VENT:
        return {
          ...state,
          vents: state.vents.map((vent, index) =>
            action.payload === index
              ? { ...state, delete: !vent.delete }
              : vent
          )
        };
      default:
        return state;
    }
  };
  