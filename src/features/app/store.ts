import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import wheather from '@features/wheather/slice';

const store = configureStore({
  reducer: {
    wheather,
  } });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
