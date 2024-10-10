import Button from '@containers/common/Button';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { FiltersSchema, IFiltersForm } from './helpers';

const SearchForm = () => {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const params = queryString.parse(search) as any; // TODO: change any

  const { city = '' } = params;
  const methods = useForm<IFiltersForm>({
    resolver: yupResolver(FiltersSchema as any),
    defaultValues: { city },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = (data: IFiltersForm) => {
    const searchParams = new URLSearchParams(search);

    if (data.city) {
      searchParams.set('city', data.city);
    } else {
      searchParams.delete('city');
    }

    navigate(`${pathname}?${searchParams.toString()}`, { replace: true });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('city')}
          type="text"
          className="search-input"
          placeholder="Search"
        />
        <Button>Search</Button>
      </form>
    </FormProvider>
  );
};

export default SearchForm;
