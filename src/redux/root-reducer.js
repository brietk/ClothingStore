import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

//a function from redux that creates the root reducer object
export default combineReducers({
  user: userReducer
});