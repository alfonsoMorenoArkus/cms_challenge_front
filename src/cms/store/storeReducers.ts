import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { cmsContentMangeReducer } from "./manageContent";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  cmsContentManage: cmsContentMangeReducer,
});

const persistedReducer: any = persistReducer(persistConfig, reducer);

export const storeCmsChallenge = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof storeCmsChallenge.getState>;
export type AppDispatch = typeof storeCmsChallenge.dispatch;
