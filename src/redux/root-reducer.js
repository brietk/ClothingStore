import { combineReducers } from "redux";


import { persistReducer } from "redux-persist";
//the actual local storage
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReduser from "./cart/cart.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReduser
});

//a function from redux that creates the root reducer object
export default persistReducer(persistConfig, rootReducer);