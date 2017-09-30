import { applyMiddleware, createStore } from "redux"

import { createLogger } from 'redux-logger'
import thunk from "redux-thunk"
// import promise from "redux-promise-middleware"

import rootReducer from "./reducers"

// const middleware = applyMiddleware(promise(), thunk, createLogger());
const middleware = applyMiddleware(thunk, createLogger());

export default createStore(rootReducer, middleware);
