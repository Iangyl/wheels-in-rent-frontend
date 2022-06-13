import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistCombineReducers } from 'reduxjs-toolkit-persist';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import sessionReducer from './sessionReducer';

const persistConfig = {
  key: 'wheelInRent',
  version: 1,
  storage,
  stateReconciler: autoMergeLevel1,
};

const _persistedReducer= persistCombineReducers(
  persistConfig,
  {
    session: sessionReducer,
  },
);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
