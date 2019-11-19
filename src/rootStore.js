import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { createLogger } from 'redux-logger'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware()

export default createStore(
    rootReducer,
    applyMiddleware(createLogger(), sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
