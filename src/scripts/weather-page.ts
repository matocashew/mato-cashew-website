import { getCashewAdvisory } from "../lib/weather/cashew-advisory";
import { fetchWeather } from "../lib/weather/open-meteo";

import type {
  MatoWeatherData,
  WeatherCondition,
} from "../lib/weather/weather-types";

interface LocationConfig {
  id: string;
  nameEn: string;
  nameKm: string;
  latitude: number;
  longitude: number;
}

interface WeatherCopy {
  demo: string;
  live: string;
  loading: string;
  unavailable: string;
  feelsPrefix: string;
  updatedPrefix: string;
  today: string;
  tomorrow: string;
  conditions: Record<WeatherCondition, string>;
}

interface WeatherClientConfig {
  language: "en" | "km";
  copy: WeatherCopy;
  locations: LocationConfig[];
}

let weatherPageController:
  AbortController | null = null;

function round(value: number): number {
  return Math.round(value);
}

function getLocationName(
  location: LocationConfig,
  language: "en" | "km",
): string {
  return language === "km"
    ? location.nameKm
    : location.nameEn;
}

function getIconType(
  condition: WeatherCondition,
): "sun" | "cloud" | "rain" {
  if (
    condition === "clear" ||
    condition === "mainly-clear"
  ) {
    return "sun";
  }

  if (
    condition === "rain" ||
    condition === "showers" ||
    condition === "drizzle" ||
    condition === "thunderstorm"
  ) {
    return "rain";
  }

  return "cloud";
}

function formatDayName(
  dateValue: string,
  index: number,
  language: "en" | "km",
  copy: WeatherCopy,
): string {
  if (index === 0) {
    return copy.today;
  }

  if (index === 1) {
    return copy.tomorrow;
  }

  const date =
    new Date(`${dateValue}T12:00:00`);

  return new Intl.DateTimeFormat(
    language === "km" ? "km-KH" : "en-US",
    { weekday: "short" },
  ).format(date);
}

function formatUpdated(
  language: "en" | "km",
  prefix: string,
): string {
  const time =
    new Intl.DateTimeFormat(
      language === "km" ? "km-KH" : "en-US",
      {
        hour: "2-digit",
        minute: "2-digit",
      },
    ).format(new Date());

  return `${prefix} ${time}`;
}

function setText(
  root: HTMLElement,
  selector: string,
  value: string,
): void {
  const element =
    root.querySelector<HTMLElement>(selector);

  if (element) {
    element.textContent = value;
  }
}

function setForecastIcon(
  element: HTMLElement,
  condition: WeatherCondition,
): void {
  element.classList.remove(
    "weather-day__icon--sun",
    "weather-day__icon--cloud",
    "weather-day__icon--rain",
  );

  element.classList.add(
    `weather-day__icon--${getIconType(condition)}`,
  );
}

function renderWeather(
  root: HTMLElement,
  config: WeatherClientConfig,
  location: LocationConfig,
  data: MatoWeatherData,
): void {
  const locationName =
    getLocationName(
      location,
      config.language,
    );

  setText(
    root,
    "[data-weather-current-location]",
    locationName,
  );

  setText(
    root,
    "[data-weather-forecast-location]",
    locationName,
  );

  setText(
    root,
    "[data-weather-temperature]",
    `${round(data.current.temperature)}°C`,
  );

  setText(
    root,
    "[data-weather-condition]",
    config.copy.conditions[
      data.current.condition
    ] ?? config.copy.conditions.unknown,
  );

  setText(
    root,
    "[data-weather-feels]",
    `${config.copy.feelsPrefix} ${round(
      data.current.apparentTemperature,
    )}°C`,
  );

  setText(
    root,
    "[data-weather-humidity]",
    `${round(data.current.humidity)}%`,
  );

  setText(
    root,
    "[data-weather-wind]",
    `${round(data.current.windSpeed)} km/h`,
  );

  const today =
    data.daily[0];

  if (today) {
    setText(
      root,
      "[data-weather-rain]",
      `${round(
        today.precipitationProbability,
      )}%`,
    );
  }

  setText(
    root,
    "[data-weather-status]",
    config.copy.live,
  );

  setText(
    root,
    "[data-weather-hero-status]",
    config.copy.live,
  );

  setText(
    root,
    "[data-weather-updated]",
    formatUpdated(
      config.language,
      config.copy.updatedPrefix,
    ),
  );

  const currentIcon =
    root.querySelector<HTMLElement>(
      "[data-weather-current-icon]",
    );

  if (currentIcon) {
    currentIcon.dataset.condition =
      data.current.condition;
  }

  const cashewAdvisory =
    getCashewAdvisory(data);

  const advisoryLanguage =
    config.language === "km" ? "km" : "en";

  setText(
    root,
    "[data-weather-advisory-title]",
    cashewAdvisory.title[advisoryLanguage],
  );

  setText(
    root,
    "[data-weather-advisory-text]",
    cashewAdvisory.message[advisoryLanguage],
  );

  const advisoryElement =
    root.querySelector<HTMLElement>(
      "[data-weather-advisory]",
    );

  if (advisoryElement) {
    advisoryElement.dataset.level =
      cashewAdvisory.level;
  }

  const advisoryStatusLabel =
    config.language === "km"
      ? {
          favorable: "អំណោយផល",
          caution: "ប្រុងប្រយ័ត្ន",
          avoid: "គួរជៀសវាង",
        }[cashewAdvisory.level]
      : {
          favorable: "Favorable",
          caution: "Caution",
          avoid: "Avoid",
        }[cashewAdvisory.level];

  setText(
    root,
    "[data-weather-advisory-status]",
    advisoryStatusLabel,
  );
  const cards =
    Array.from(
      root.querySelectorAll<HTMLElement>(
        "[data-weather-day]",
      ),
    );

  data.daily
    .slice(0, 7)
    .forEach((day, index) => {
      const card = cards[index];

      if (!card) {
        return;
      }

      setText(
        card,
        "[data-weather-day-name]",
        formatDayName(
          day.date,
          index,
          config.language,
          config.copy,
        ),
      );

      setText(
        card,
        "[data-weather-high]",
        `${round(day.temperatureMax)}°`,
      );

      setText(
        card,
        "[data-weather-low]",
        `${round(day.temperatureMin)}°`,
      );

      setText(
        card,
        "[data-weather-day-rain]",
        `☂ ${round(
          day.precipitationProbability,
        )}%`,
      );

      const icon =
        card.querySelector<HTMLElement>(
          "[data-weather-day-icon]",
        );

      if (icon) {
        setForecastIcon(
          icon,
          day.condition,
        );
      }
    });
}

async function loadWeather(
  root: HTMLElement,
  config: WeatherClientConfig,
  location: LocationConfig,
  signal: AbortSignal,
): Promise<void> {
  setText(
    root,
    "[data-weather-status]",
    config.copy.loading,
  );

  setText(
    root,
    "[data-weather-hero-status]",
    config.copy.loading,
  );

  try {
    const data =
      await fetchWeather(
        location.latitude,
        location.longitude,
      );

    if (signal.aborted) {
      return;
    }

    renderWeather(
      root,
      config,
      location,
      data,
    );
  } catch (error) {
    if (signal.aborted) {
      return;
    }

    console.warn(
      "Mato Cashew weather update failed.",
      error,
    );

    setText(
      root,
      "[data-weather-status]",
      config.copy.demo,
    );

    setText(
      root,
      "[data-weather-hero-status]",
      config.copy.demo,
    );

    setText(
      root,
      "[data-weather-updated]",
      config.copy.unavailable,
    );
  }
}

function initWeatherPage(): void {
  weatherPageController?.abort();

  const controller =
    new AbortController();

  weatherPageController =
    controller;

  const root =
    document.querySelector<HTMLElement>(
      "[data-weather-page]",
    );

  if (!root) {
    return;
  }

  const configElement =
    root.querySelector<HTMLScriptElement>(
      "[data-weather-config]",
    );

  const select =
    root.querySelector<HTMLSelectElement>(
      "[data-weather-location]",
    );

  if (!configElement || !select) {
    return;
  }

  let config: WeatherClientConfig;

  try {
    config =
      JSON.parse(
        configElement.textContent ?? "",
      ) as WeatherClientConfig;
  } catch (error) {
    console.warn(
      "Weather configuration could not be parsed.",
      error,
    );

    return;
  }

  const getSelectedLocation = () =>
    config.locations.find(
      (location) =>
        location.id === select.value,
    ) ?? config.locations[0];

  const requestSelectedWeather =
    async () => {
      const location =
        getSelectedLocation();

      if (!location) {
        return;
      }

      await loadWeather(
        root,
        config,
        location,
        controller.signal,
      );
    };

  select.addEventListener(
    "change",
    requestSelectedWeather,
    { signal: controller.signal },
  );

  void requestSelectedWeather();
}

document.addEventListener(
  "astro:before-swap",
  () => {
    weatherPageController?.abort();
    weatherPageController = null;
  },
);

document.addEventListener(
  "astro:page-load",
  initWeatherPage,
);

initWeatherPage();
