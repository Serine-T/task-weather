import { useAppSelector } from '@features/app/hooks';
import { selectWeather } from '@features/wheather/selectors';

const TemComponent = () => {
  const { data } = useAppSelector(selectWeather);

  return (
    <>
      <p>
        {`Tempreture In ${data?.name} is`}
      </p>
      <div>
        {data?.main?.temp}
      </div>
    </>
  );
};

export default TemComponent;
