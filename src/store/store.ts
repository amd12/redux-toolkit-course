import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postAPI } from '../services/PostService';
import { userSlice } from './reducers/UserSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  [postAPI.reducerPath]: postAPI.reducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware),
});
const store = setupStore();
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
