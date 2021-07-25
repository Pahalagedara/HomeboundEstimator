import { combineReducers } from "redux";
import estimateReducer from "./estimateReducer";

const rootReducer = combineReducers({
  estimate: estimateReducer,
});

export default rootReducer;