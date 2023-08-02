import { createStore, combineReducers, applyMiddleware } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
// import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
// import countWatcher from "../saga/countSaga";
import { rootWathcer } from "../saga";

const sagaMiddleWare = createSagaMiddleware

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})
export const store = createStore(rootReducer, applyMiddleware(createSagaMiddleware))
// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

sagaMiddleWare.run(rootWathcer)