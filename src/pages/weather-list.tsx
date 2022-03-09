import { useQuery } from 'react-query';
import { fetchCitiesApi } from '../api';
import CitiesList from '../components/CitiesList';
import LoadingNotification from '../components/LoadingNotification';

const WeatherListPage = () => {
  let { isLoading, data: cities } = useQuery('fetchCities', fetchCitiesApi, {
    onError: (error) => alert(error),
  });

  return (
    <>
      {isLoading && <LoadingNotification />}
      {cities && <CitiesList cities={cities} />}
    </>
  );
};

export default WeatherListPage;
