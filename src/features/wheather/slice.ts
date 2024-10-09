import { createSlice } from '@reduxjs/toolkit';

import { IState } from './types';
import { searchWeather } from './actions';

const initialState: IState = {
  isLoading: false,
  data: null,
  errorMessage: '',
};

const wheatherSlice = createSlice({
  name: 'wheather',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(searchWeather.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchWeather.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.errorMessage = '';
    });
    builder.addCase(searchWeather.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload.message;
    });
  },
});

export default wheatherSlice.reducer;
