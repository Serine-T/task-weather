// TODO: Correct logic
import PAGE_ROUTES from '@routes/routingEnum';
import { constructQueryString } from '@utils/helpers';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface IFormInputs {
  unit: 'C' | 'F';
}

const TemperatureForm = () => {
  const navigate = useNavigate();

  const { control, setValue } = useForm<IFormInputs>({
    defaultValues: {
      unit: 'C',
    },
  });

  const handleChanges = (value: IFormInputs['unit']) => {
    setValue('unit', value);

    const queryParams = constructQueryString({ unit: value });

    navigate(`${PAGE_ROUTES.HOME}?${queryParams}`);
  };

  return (
    <div>
      <Controller
        name="unit"
        control={control}
        defaultValue="C"
        render={({ field }) => (
          <div role="radiogroup">
            <label>
              <input
                type="radio"
                value="C"
                checked={field.value === 'C'}
                onChange={() => handleChanges('C')}
              />
              °C
            </label>
            <label>
              <input
                type="radio"
                value="F"
                checked={field.value === 'F'}
                onChange={() => handleChanges('F')}
              />
              °F
            </label>
          </div>
        )}
      />
    </div>
  );
};

export default TemperatureForm;
