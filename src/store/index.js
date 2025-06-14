import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import themeReducer from './slices/themeSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
