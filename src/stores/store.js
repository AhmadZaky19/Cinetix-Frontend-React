import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import rootReducer from "./reducer";

// redux persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default createStore(rootReducer, applyMiddleware(PromiseMiddleware, logger));
let store = createStore(persistedReducer, applyMiddleware(promiseMiddleware, logger));
let persistor = persistStore(store);

export { store, persistor };
