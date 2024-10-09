import * as yup from 'yup';

export interface IFiltersForm {
  city: string;
}

export const FiltersSchema = yup.object().shape({});
