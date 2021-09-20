import { createStore, applyMiddleware } from "redux";
// to put the store in cache memory
import { persistStore } from "redux-persist";
import logger from 'redux-logger';

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store, persistor };