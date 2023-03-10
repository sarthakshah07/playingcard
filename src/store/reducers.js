import { combineReducers } from "redux";
import counterSlice from "../slice/counter/counterSlice";
// import users from '../users'

const rootReducer = combineReducers({
  Counter: counterSlice,
  // products: users,
});

export default rootReducer;
