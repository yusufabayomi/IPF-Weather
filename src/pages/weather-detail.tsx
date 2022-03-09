import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchWeatherApi } from '../api';
import LoadingNotification from '../components/LoadingNotification';
import WeatherList from '../components/WeatherList';

const Paragraph = styled.p`
  text-align: center;
  font-weight: 500;
`;

const WeatherDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  let { isLoading, data: weatherReport, isError } = useQuery(['fetchReport', id], () => fetchWeatherApi(id!));

  return (
    <>
      {isLoading && <LoadingNotification />}
      {isError && (
        <>
          <Paragraph>Error fetching report</Paragraph>
          <Paragraph>
            <Link to='/'>Back To Cities</Link>
          </Paragraph>
        </>
      )}
      {weatherReport && <WeatherList report={weatherReport} />}
    </>
  );
};

export default WeatherDetailPage;
