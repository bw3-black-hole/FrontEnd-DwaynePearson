import { combineReducers } from "redux";
import { ventReducer as vent } from "./ventReducer";
import { vortexReducer } from "./vortexReducer";

export default combineReducers({
  vent,
  vortexReducer
});
