import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import * as api from '../api';
import { WeatherReport } from '../helpers/interfaces';
import WeatherDetailPage from './weather-detail';

jest.mock('../api');

const fakeCity: WeatherReport = {
  title: 'Manchester',
  consolidated_weather: [
    {
      id: 5502915885137920,
      weather_state_name: 'Heavy Cloud',
      weather_state_abbr: 'hc',
      applicable_date: '2022-03-09',
      min_temp: 6.6,
      max_temp: 12.870000000000001,
      the_temp: 12.04,
    },
    {
      id: 5476324165550080,
      weather_state_name: 'Showers',
      weather_state_abbr: 's',
      applicable_date: '2022-03-10',
      min_temp: 9.425,
      max_temp: 11.725000000000001,
      the_temp: 11.65,
    },
    {
      id: 6575565176832000,
      weather_state_name: 'Heavy Rain',
      weather_state_abbr: 'hr',
      applicable_date: '2022-03-11',
      min_temp: 8.09,
      max_temp: 12.23,
      the_temp: 11.695,
    },
    {
      id: 4550011892269056,
      weather_state_name: 'Light Rain',
      weather_state_abbr: 'lr',
      applicable_date: '2022-03-12',
      min_temp: 5.66,
      max_temp: 10.16,
      the_temp: 10.195,
    },
    {
      id: 5198132397735936,
      weather_state_name: 'Light Rain',
      weather_state_abbr: 'lr',
      applicable_date: '2022-03-13',
      min_temp: 5.515000000000001,
      max_temp: 10.870000000000001,
      the_temp: 10.04,
    },
  ],
};

const queryClient = new QueryClient();

describe('Weather Detail Page', () => {
  const renderComponent = () => {
    return render(
      <QueryClientProvider client={queryClient}>
        <WeatherDetailPage />
      </QueryClientProvider>,
      { wrapper: MemoryRouter }
    );
  };

  beforeEach(() => {
    (api.fetchWeatherApi as jest.Mock).mockImplementation(() => Promise.resolve(fakeCity));
  });

  afterEach(() => {
    (api.fetchWeatherApi as jest.Mock).mockRestore();
  });

  test('show the city name', async () => {
    renderComponent();

    expect(await screen.findByText(/manchester/i)).toBeInTheDocument();
  });

  test('show 5 days weather report', async () => {
    renderComponent();

    expect(await screen.findAllByTestId('reportCard')).toHaveLength(5);
  });
});
