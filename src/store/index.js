import { createStore, combineReducers, applyMiddleware } from "redux";

import digimonsReducer from "./modules/digimon/reducer";

import thunk from "redux-thunk";

const reducers = combineReducers({ digimon: digimonsReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
