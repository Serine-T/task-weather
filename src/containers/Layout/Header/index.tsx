import './styles.scss';
import Button from '@containers/common/Button';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PAGE_ROUTES from '@routes/routingEnum';
import { useNavigate } from 'react-router-dom';
import { constructQueryString } from '@utils/helpers';

import { FiltersSchema, IFiltersForm } from './helpers';
import TemperatureForm from './TemperatureForm';

const HeaderSection = () => {
  const navigate = useNavigate();
  const methods = useForm<IFiltersForm>({
    resolver: yupResolver(FiltersSchema as any),
    defaultValues: { city: '' },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = (data: IFiltersForm) => {
    const queryParams = constructQueryString({ ...data });

    navigate(`${PAGE_ROUTES.HOME}?${queryParams}`);
  };

  return (
    <header className="styled-header">
      <div className="styled-toolbar">
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
      </div>
      <TemperatureForm />

    </header>
  );
};

export default HeaderSection;
