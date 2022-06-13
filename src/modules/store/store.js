import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistCombineReducers } from 'reduxjs-toolkit-persist';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import carReducer from './carReducer';
import otherReducer from './otherReducer';
import sessionReducer from './sessionReducer';

const persistConfig = {
  key: 'wheelInRent',
  version: 1,
  storage,
  stateReconciler: autoMergeLevel1,
  whitelist: ['session']
};

const _persistedReducer= persistCombineReducers(
  persistConfig,
  {
    session: sessionReducer,
    car: carReducer,
    other: otherReducer,
  },
);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
