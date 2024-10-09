import { ErrorType } from '../types/requests';

export const customErrorHandling = (error: any): ErrorType => {
  const errorMainInfo = error?.data;
  const message = errorMainInfo?.message as string;

  return { ...errorMainInfo, message } as ErrorType;
};
