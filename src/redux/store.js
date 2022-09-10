import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga"

const sagaMiddleware = createSagaMiddleware();
// const middlewares = [logger, sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

export default store;
