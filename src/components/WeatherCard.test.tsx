import { render, screen } from '@testing-library/react';
import WeatherCard from './WeatherCard';

test('should display a weather report card', () => {
  const weather = {
    id: 5198132397735936,
    weather_state_name: 'Light Rain',
    weather_state_abbr: 'lr',
    applicable_date: '2022-03-13',
    min_temp: 5.515000000000001,
    max_temp: 10.870000000000001,
    the_temp: 10.04,
  };

  render(<WeatherCard weather={weather} />);

  expect(screen.getByText(/light rain/i)).toBeInTheDocument();
  expect(screen.getByText(/10/i)).toBeInTheDocument();
  expect(screen.getByText(/11/i)).toBeInTheDocument();
  expect(screen.getByText(/Sun 13th/i)).toBeInTheDocument();
});
