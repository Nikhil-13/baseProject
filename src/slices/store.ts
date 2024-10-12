import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as reducers from './index';
import reactotron from '../../reactotron.config';

const whitelist = ['user'];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 0,
  whitelist,
};

const rootReducer = combineReducers({...reducers});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: false,
    }),
  enhancers: getDefaultEnhancers =>
    getDefaultEnhancers().concat(reactotron.createEnhancer()),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persister = persistStore(store, {}, async () => {});
