import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterSlice from './reducerSlices/counterSlice';
import boxSlice from './reducerSlices/boxSlice';
import userSlice from './reducerSlices/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import logger from 'redux-logger'; 


const rootReducer = combineReducers({
  counter: counterSlice,
  box: boxSlice,
  user: userSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // optional, can customize
    }).concat(logger),
});

export const persistor = persistStore(store);
