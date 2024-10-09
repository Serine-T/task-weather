import { RootState } from '@features/app/store';

export const selectWeather = (state: RootState) => state.wheather;
