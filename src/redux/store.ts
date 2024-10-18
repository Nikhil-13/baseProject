import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reactotron from '../../reactotron.config';
import rootReducer from './rootReducer';

const whitelist = ['auth'];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 0, // Increment version if persisted state structure changes
  whitelist,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: false, // Be cautious when disabling this check
    }),
  enhancers: getDefaultEnhancers =>
    __DEV__
      ? getDefaultEnhancers().concat(reactotron.createEnhancer()) // Only in dev
      : getDefaultEnhancers(),
});

export const persistor = persistStore(store);
