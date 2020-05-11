import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import Reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
  // Deixar sem whitelist p/ todos Reducers entrarem no local storage
};

const pReducer = persistReducer(persistConfig, Reducers);

const store = createStore(pReducer);
const persistor = persistStore(store);

export { store, persistor };
