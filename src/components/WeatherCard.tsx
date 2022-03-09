import { FC } from 'react';
import styled from 'styled-components';
import { baseURL } from '../api';
import { device } from '../helpers/devices';
import { Weather } from '../helpers/interfaces';
import { formatDate, formatTemperature } from '../helpers/util';

const Card = styled.div`
  flex: 0 0 auto;
  width: 20%;
  margin-bottom: 20px;

  @media ${device.mobile} {
    width: 100%;
  }
`;

const CardBody = styled.div`
  margin: 0 10px;
  border: 1px solid rgb(209, 208, 207);
  border-bottom: 3px solid rgb(251, 182, 21);
  position: relative;
  border-radius: 5px;
  padding: 20px;
`;

const Meta = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 50px;
`;

const Paragraph = styled.p`
  margin: 0;
  font-weight: 500;
`;

const ParagraphBold = styled(Paragraph)`
  font-weight: 700;
`;

type Props = {
  weather: Weather;
};

const WeatherCard: FC<Props> = ({ weather }) => {
  return (
    <Card data-testid='reportCard'>
      <CardBody>
        <Paragraph>{formatDate(weather.applicable_date)}</Paragraph>
        <Meta>
          <Image src={`${baseURL}/static/img/weather/png/${weather.weather_state_abbr}.png`} alt={weather.weather_state_abbr}></Image>

          <div>
            <ParagraphBold>{formatTemperature(weather.the_temp)}</ParagraphBold>
            <Paragraph>{formatTemperature(weather.max_temp)}</Paragraph>
          </div>
        </Meta>
        <Paragraph>{weather.weather_state_name}</Paragraph>
      </CardBody>
    </Card>
  );
};

export default WeatherCard;
