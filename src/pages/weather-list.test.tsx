import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import * as api from '../api';
import WeatherListPage from './weather-list';

jest.mock('../api');

const fakeCities = [
  {
    distance: 428,
    title: 'Manchester',
    location_type: 'City',
    woeid: 28218,
    latt_long: '53.479599,-2.248810',
  },
  {
    distance: 2930,
    title: 'Salford',
    location_type: 'City',
    woeid: 33887,
    latt_long: '53.489731,-2.2843',
  },
  {
    distance: 35140,
    title: 'Huddersfield',
    location_type: 'City',
    woeid: 24083,
    latt_long: '53.648998,-1.791790',
  },
];

const queryClient = new QueryClient();

describe('Weather List Page', () => {
  const renderComponent = () => {
    return render(
      <QueryClientProvider client={queryClient}>
        <WeatherListPage />
      </QueryClientProvider>,
      { wrapper: MemoryRouter }
    );
  };
  beforeEach(() => {
    (api.fetchCitiesApi as jest.Mock).mockImplementation(() => Promise.resolve(fakeCities));
  });

  afterEach(() => {
    (api.fetchCitiesApi as jest.Mock).mockRestore();
  });

  test('show loading indicator', () => {
    renderComponent();

    expect(screen.getByText(/please wait/i)).toBeInTheDocument();
  });

  test('show list of cities', async () => {
    renderComponent();

    expect(await screen.findAllByRole('listitem')).toHaveLength(3);
  });
});
