import type { WeatherCondition } from "./weather-types";

/**
 * A48 — Weather Atmosphere Engine
 *
 * Converts A47 weather data into a small visual-state contract.
 *
 * This module:
 * - does not access the DOM
 * - does not fetch weather
 * - does not request location
 * - does not interact with Header
 */

export type WeatherAtmosphereKind =
  | "clear"
  | "cloudy"
  | "rain"
  | "storm";

export type WeatherWindLevel =
  | "calm"
  | "breezy"
  | "windy";

export interface WeatherAtmosphereState {
  kind: WeatherAtmosphereKind;
  wind: WeatherWindLevel;
  isDay: boolean;
}

const BREEZY_THRESHOLD_KMH = 15;
const WINDY_THRESHOLD_KMH = 30;

function getAtmosphereKind(
  condition: WeatherCondition,
): WeatherAtmosphereKind {
  switch (condition) {
    case "clear":
    case "mainly-clear":
      return "clear";

    case "partly-cloudy":
    case "overcast":
    case "fog":
    case "drizzle":
      return "cloudy";

    case "rain":
    case "showers":
      return "rain";

    case "thunderstorm":
      return "storm";

    case "unknown":
    default:
      return "cloudy";
  }
}

function getWindLevel(
  windSpeed: number,
): WeatherWindLevel {
  if (!Number.isFinite(windSpeed) || windSpeed < 0) {
    return "calm";
  }

  if (windSpeed >= WINDY_THRESHOLD_KMH) {
    return "windy";
  }

  if (windSpeed >= BREEZY_THRESHOLD_KMH) {
    return "breezy";
  }

  return "calm";
}

/**
 * Produce the visual atmosphere state consumed by A48.
 *
 * Wind is intentionally independent from the sky condition:
 * a clear day can still be windy, and rain can also have calm
 * or strong cloud movement.
 */
export function getWeatherAtmosphere(
  condition: WeatherCondition,
  windSpeed: number,
  isDay: boolean,
): WeatherAtmosphereState {
  return {
    kind: getAtmosphereKind(condition),
    wind: getWindLevel(windSpeed),
    isDay,
  };
}
