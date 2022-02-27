import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import {ProductReducer} from "./ProductsList/reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  data: ProductReducer,
});


const loggerMiddlewear = (store) => (next) => (action) => {
  next(action);
};

const asyncMiddlewear = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  next(action);
};

// export const store = createStore( ProductReducer);

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//  compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()