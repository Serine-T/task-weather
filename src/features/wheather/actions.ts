import { createAsyncThunk } from '@reduxjs/toolkit';
import { customErrorHandling } from '@utils/errorHandler';
import { AxiosData, Filters } from 'src/types/requests';
import { http } from '@services/http';
import { API_KEY } from '@utils/config';

import { IWeather } from './types';

export const searchWeather = createAsyncThunk<IWeather, Filters, { rejectValue: AxiosData}>(
  'weather/search',
  async (searchingData, thunkAPI) => {
    try {
      const { data } = await http.get<IWeather>(
        '',
        { ...searchingData, appid: API_KEY },
      );

      return data;
    } catch (error) {
      const errorInfo = customErrorHandling(error);

      return thunkAPI.rejectWithValue(errorInfo);
    }
  },
);
