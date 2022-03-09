export interface City {
  distance: number;
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
}

export interface Weather {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
}

export interface WeatherReport {
  title: string;
  consolidated_weather: Weather[];
}
