import { applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import persistReducer from 'redux-persist/lib/persistReducer';
import { persistStore } from 'redux-persist';
import { rootReducer } from '../reducers';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';

const persistConfig:any = {
  key: 'root',
  storage,
  
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
  ));
export const persistor = persistStore(store);
export type RootState=ReturnType<typeof rootReducer>

