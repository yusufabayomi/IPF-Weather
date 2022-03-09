import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../helpers/devices';
import { WeatherReport } from '../helpers/interfaces';
import WeatherCard from './WeatherCard';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    display: block;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
`;

type Props = {
  report: WeatherReport;
};

const WeatherList: FC<Props> = ({ report }) => {
  return (
    <>
      <Header>
        <h1>{report.title}</h1>
        <Link to='/'>Back To Cities</Link>
      </Header>
      <Flex>
        {report.consolidated_weather.slice(0, 5).map((weather) => (
          <WeatherCard key={weather.id} weather={weather} />
        ))}
      </Flex>
    </>
  );
};

export default WeatherList;
