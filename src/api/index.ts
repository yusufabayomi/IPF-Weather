import axios from 'axios';
import { City, WeatherReport } from '../helpers/interfaces';
import liveLocation from '../helpers/location';

export const baseURL = 'https://meta-weather.vercel.app';

const api = axios.create({
  baseURL: `${baseURL}/api/location/`,
});

export const fetchCitiesApi = async () => {
  try {
    const coordinates = await liveLocation();
    const response = await api.get(`search/?lattlong=${coordinates.latitude},${coordinates.longitude}`);

    // return a string error message
    if (response.status !== 200) {
      throw new Error('Error fetching cities');
    }
    const cities: City[] = response.data;
    return cities;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const fetchWeatherApi = async (woeid: string) => {
  const response = await api.get(`${woeid}/`);
  const weather: WeatherReport = response.data;
  return weather;
};
