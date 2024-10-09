import { Filters } from 'src/types/requests';

export const constructQueryString = (filters: Filters): string => {
  return Object.entries(filters)
    .map(([key, value]) => value && `${key}=${encodeURIComponent(value)}`)
    .filter(Boolean)
    .join('&');
};
