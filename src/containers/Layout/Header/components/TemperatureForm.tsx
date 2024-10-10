import { ChangeEvent } from 'react';

import queryString from 'query-string';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';

const TemperatureForm = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const params = queryString.parse(search) as any; // TODO: change any
  const { units = '' } = params;
  const { register } = useForm({
    defaultValues: { units },
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newUnit = event.target.value;
    const searchParams = new URLSearchParams(search);

    searchParams.set('units', newUnit);
    navigate(`${pathname}?${searchParams.toString()}`, { replace: true });
  };

  return (
    <form>
      <div>
        <label>
          <input
            type="radio"
            value="imperial"
            {...register('units')}
            onChange={handleChange}
          />
          F
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="metric"
            {...register('units')}
            onChange={handleChange}
          />
          C
        </label>
      </div>
    </form>
  );
};

export default TemperatureForm;
