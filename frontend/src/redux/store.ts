import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import logger from 'redux-logger';
import rootReducer from "./reducers/rootReducer";
import sagas from "./sagas/rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(sagas);

export default store;
