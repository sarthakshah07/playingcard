import { combineReducers } from "redux";
import counterSlice from "../slice/counterSlice";

const rootReducer = combineReducers({
  Counter: counterSlice,
});

export default rootReducer;
