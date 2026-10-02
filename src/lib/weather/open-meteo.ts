import type {
  MatoWeatherData,
  WeatherCondition,
} from "./weather-types";

interface OpenMeteoResponse {
  latitude: number;
  longitude: number;
  timezone: string;

  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    weather_code: number;
    wind_speed_10m: number;
    is_day: number;
  };

  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
  };
}

export function mapWeatherCode(
  code: number,
): WeatherCondition {
  if (code === 0) return "clear";
  if (code === 1) return "mainly-clear";
  if (code === 2) return "partly-cloudy";
  if (code === 3) return "overcast";

  if (code === 45 || code === 48) {
    return "fog";
  }

  if (
    code === 51 ||
    code === 53 ||
    code === 55 ||
    code === 56 ||
    code === 57
  ) {
    return "drizzle";
  }

  if (
    code === 61 ||
    code === 63 ||
    code === 65 ||
    code === 66 ||
    code === 67
  ) {
    return "rain";
  }

  if (
    code === 80 ||
    code === 81 ||
    code === 82
  ) {
    return "showers";
  }

  if (
    code === 95 ||
    code === 96 ||
    code === 97 ||
    code === 99
  ) {
    return "thunderstorm";
  }

  return "unknown";
}

export async function fetchWeather(
  latitude: number,
  longitude: number,
  timezone = "Asia/Phnom_Penh",
): Promise<MatoWeatherData> {

  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),

    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "weather_code",
      "wind_speed_10m",
      "is_day",
    ].join(","),

    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_probability_max",
    ].join(","),

    timezone,
    forecast_days: "7",
  });

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?${params}`,
  );

  if (!response.ok) {
    throw new Error(
      `Weather request failed: ${response.status}`,
    );
  }

  const data =
    (await response.json()) as OpenMeteoResponse;

  if (
    !data.current ||
    !data.daily ||
    data.daily.time.length === 0
  ) {
    throw new Error(
      "Weather provider returned incomplete data.",
    );
  }

  const daily = data.daily.time.map(
    (date, index) => ({
      date,

      temperatureMax:
        data.daily.temperature_2m_max[index],

      temperatureMin:
        data.daily.temperature_2m_min[index],

      precipitationProbability:
        data.daily.precipitation_probability_max[index],

      weatherCode:
        data.daily.weather_code[index],

      condition: mapWeatherCode(
        data.daily.weather_code[index],
      ),
    }),
  );

  return {
    latitude: data.latitude,
    longitude: data.longitude,
    timezone: data.timezone,

    current: {
      temperature:
        data.current.temperature_2m,

      apparentTemperature:
        data.current.apparent_temperature,

      humidity:
        data.current.relative_humidity_2m,

      windSpeed:
        data.current.wind_speed_10m,

      weatherCode:
        data.current.weather_code,

      condition:
        mapWeatherCode(
          data.current.weather_code,
        ),

      isDay:
        data.current.is_day === 1,
    },

    daily,
  };
}
