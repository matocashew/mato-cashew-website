import { getCashewAdvisory } from "../lib/weather/cashew-advisory";
import { fetchWeather } from "../lib/weather/open-meteo";

import type {
  MatoWeatherData,
  WeatherCondition,
} from "../lib/weather/weather-types";

interface HomeWeatherConfig {
  language: "en" | "km";

  location: {
    id: string;
    nameEn: string;
    nameKm: string;
    latitude: number;
    longitude: number;
  };

  labels: {
    live: string;
    unavailable: string;
  };
}

let homeWeatherController: AbortController | null = null;

function round(value: number): number {
  return Math.round(value);
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

function getConditionLabel(
  condition: WeatherCondition,
  language: "en" | "km",
): string {
  const labels: Record<
    WeatherCondition,
    { en: string; km: string }
  > = {
    clear: {
      en: "Clear",
      km: "មេឃស្រឡះ",
    },

    "mainly-clear": {
      en: "Mainly clear",
      km: "មេឃភាគច្រើនស្រឡះ",
    },

    "partly-cloudy": {
      en: "Partly cloudy",
      km: "មានពពកខ្លះ",
    },

    overcast: {
      en: "Overcast",
      km: "មេឃមានពពកច្រើន",
    },

    fog: {
      en: "Fog",
      km: "មានអ័ព្ទ",
    },

    drizzle: {
      en: "Drizzle",
      km: "ភ្លៀងរលឹម",
    },

    rain: {
      en: "Rain",
      km: "មានភ្លៀង",
    },

    showers: {
      en: "Showers",
      km: "ភ្លៀងមួយរយៈ",
    },

    thunderstorm: {
      en: "Thunderstorm",
      km: "ភ្លៀងផ្គររន្ទះ",
    },

    unknown: {
      en: "Weather conditions",
      km: "ស្ថានភាពអាកាសធាតុ",
    },
  };

  return labels[condition][language];
}

function renderHomeWeather(
  root: HTMLElement,
  config: HomeWeatherConfig,
  data: MatoWeatherData,
): void {
  const language = config.language;

  const locationName =
    language === "km"
      ? config.location.nameKm
      : config.location.nameEn;

  setText(
    root,
    "[data-home-weather-location]",
    locationName,
  );

  setText(
    root,
    "[data-home-weather-temperature]",
    `${round(data.current.temperature)}°C`,
  );

  setText(
    root,
    "[data-home-weather-condition]",
    getConditionLabel(
      data.current.condition,
      language,
    ),
  );

  setText(
    root,
    "[data-home-weather-feels]",
    language === "km"
      ? `សីតុណ្ហភាពគិតតាមអារម្មណ៍ ${round(
          data.current.apparentTemperature,
        )}°C`
      : `Feels like ${round(
          data.current.apparentTemperature,
        )}°C`,
  );

  const today = data.daily[0];

  setText(
    root,
    "[data-home-weather-rain]",
    today
      ? `${round(
          today.precipitationProbability,
        )}%`
      : "—",
  );

  setText(
    root,
    "[data-home-weather-humidity]",
    `${round(data.current.humidity)}%`,
  );

  setText(
    root,
    "[data-home-weather-wind]",
    `${round(data.current.windSpeed)} km/h`,
  );

  const advisory = getCashewAdvisory(data);

  const advisoryLanguage =
    language === "km" ? "km" : "en";

  setText(
    root,
    "[data-home-weather-advisory-title]",
    advisory.title[advisoryLanguage],
  );

  setText(
    root,
    "[data-home-weather-advisory-text]",
    advisory.message[advisoryLanguage],
  );

  setText(
    root,
    "[data-home-weather-status]",
    config.labels.live,
  );

  root.dataset.weatherState = "live";

  const icon =
    root.querySelector<HTMLElement>(
      "[data-home-weather-icon]",
    );

  if (icon) {
    icon.dataset.condition =
      data.current.condition;

    icon.dataset.day =
      data.current.isDay ? "day" : "night";
  }
}

async function loadHomeWeather(
  root: HTMLElement,
  config: HomeWeatherConfig,
  signal: AbortSignal,
): Promise<void> {
  try {
    const data = await fetchWeather(
      config.location.latitude,
      config.location.longitude,
    );

    if (signal.aborted) {
      return;
    }

    renderHomeWeather(
      root,
      config,
      data,
    );
  }
  catch (error) {
    if (signal.aborted) {
      return;
    }

    console.error(
      "Mato Cashew home weather request failed.",
      error,
    );

    setText(
      root,
      "[data-home-weather-status]",
      config.labels.unavailable,
    );

    root.dataset.weatherState = "unavailable";
  }
}

function initHomeWeather(): void {
  homeWeatherController?.abort();

  const root =
    document.querySelector<HTMLElement>(
      "[data-home-weather]",
    );

  if (!root) {
    homeWeatherController = null;
    return;
  }

  const configElement =
    root.parentElement?.querySelector<HTMLScriptElement>(
      "[data-home-weather-config]",
    );

  if (!configElement) {
    return;
  }

  let config: HomeWeatherConfig;

  try {
    config = JSON.parse(
      configElement.textContent ?? "",
    ) as HomeWeatherConfig;
  }
  catch (error) {
    console.error(
      "Mato Cashew home weather configuration is invalid.",
      error,
    );

    return;
  }

  const controller = new AbortController();

  homeWeatherController = controller;

  void loadHomeWeather(
    root,
    config,
    controller.signal,
  );
}

document.addEventListener(
  "astro:before-swap",
  () => {
    homeWeatherController?.abort();
    homeWeatherController = null;
  },
);

document.addEventListener(
  "astro:page-load",
  initHomeWeather,
);

initHomeWeather();
