import { AxiosResponse } from 'axios';

export type ErrorType = {
  error: string;
  message: string;
  statusCode: number;
}

export type AxiosData = AxiosResponse['data']

export interface Filters {
  [key: string]: string | undefined | number;
}
