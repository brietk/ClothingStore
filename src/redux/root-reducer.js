import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

import cartReduser from "./cart/cart.reducer";

//a function from redux that creates the root reducer object
export default combineReducers({
  user: userReducer,
  cart: cartReduser
});