import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WeatherDetailPage from './pages/weather-detail';
import WeatherListPage from './pages/weather-list';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';
import { device } from './helpers/devices';

const queryClient = new QueryClient();

const Container = styled.div`
  width: 100%;
  margin: auto;

  @media ${device.desktop} {
    max-width: 1100px;
  }
`;

const App = () => {
  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<WeatherListPage />} />
            <Route path='/city/:id' element={<WeatherDetailPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Container>
  );
};

export default App;
