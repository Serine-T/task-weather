import { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@features/app/hooks';
import { searchWeather } from '@features/wheather/actions';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { selectWeather } from '@features/wheather/selectors';

import TemComponent from './TemComponent';

const Home = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(selectWeather);

  const { search } = useLocation();
  const params = queryString.parse(search) as any; // TODO: change any

  const { city = '', units = 'imperial' } = params;

  const fetchData = useCallback(() => {
    dispatch(searchWeather({ q: city, units }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, units]);

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, units]);

  return (
    <>
      {data ? <TemComponent /> : <p>There is no data</p>}
    </>
  );
};

export default Home;
