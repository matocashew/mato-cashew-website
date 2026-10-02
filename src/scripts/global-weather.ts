import {
  getVisitorLocation
} from "../lib/location/visitor-location";

import {
  fetchWeather
} from "../lib/weather/open-meteo";

import {
  getWeatherAtmosphere
} from "../lib/weather/weather-atmosphere";


let requestId = 0;


/*
 * R71F6Q4P5D
 * ---------------------------------------------------------
 * ClientRouter atmosphere continuity.
 *
 * During Astro client navigation the destination page
 * receives a new WeatherAtmosphere element. Preserve the
 * last confirmed live state so that new element does not
 * briefly display its static fallback background.
 */

type PersistedAtmosphereState = {
  kind: string;
  wind: string;
  day: string;
  phase: string;
};


let persistedAtmosphereState:
  PersistedAtmosphereState | null =
    null;


function applyPersistedAtmosphereState():
  void {

  const atmosphere =
    getAtmosphereElement();

  if (
    !atmosphere ||
    !persistedAtmosphereState
  ) {
    return;
  }

  atmosphere.dataset.weatherKind =
    persistedAtmosphereState.kind;

  atmosphere.dataset.weatherWind =
    persistedAtmosphereState.wind;

  atmosphere.dataset.weatherDay =
    persistedAtmosphereState.day;

  atmosphere.dataset.weatherPhase =
    persistedAtmosphereState.phase;
}


function getAtmosphereElement():
  HTMLElement | null {

  return document.querySelector<HTMLElement>(
    "[data-weather-atmosphere]"
  );
}


async function refreshGlobalWeather():
  Promise<void> {

  const atmosphere =
    getAtmosphereElement();

  if (!atmosphere) {

    console.warn(
      "[Mato Global Weather] Atmosphere element not found."
    );

    return;
  }


  const currentRequest =
    ++requestId;

  try {

    /*
     * ---------------------------------------------------------
     * 1. Resolve actual visitor location
     * ---------------------------------------------------------
     *
     * Priority is owned by visitor-location.ts:
     *
     * Cloudflare Edge
     *      ->
     * Browser Geolocation
     *      ->
     * null
     *
     * No fixed Kampong Thom fallback.
     */

    const location =
      await getVisitorLocation();


    if (
      !location ||
      currentRequest !== requestId
    ) {
      return;
    }


    /*
     * ---------------------------------------------------------
     * 2. Fetch live weather
     * ---------------------------------------------------------
     */

    const weather =
      await fetchWeather(
        location.latitude,
        location.longitude,
        location.timezone ?? "auto"
      );


    if (
      !weather ||
      currentRequest !== requestId
    ) {
      return;
    }


    /*
     * ---------------------------------------------------------
     * 3. Convert weather -> atmosphere state
     * ---------------------------------------------------------
     */

    const state =
      getWeatherAtmosphere(
        weather.current.weatherCode,
        weather.current.windSpeed,
        weather.current.isDay
      );


    /*
     * ---------------------------------------------------------
     * 4. Update existing GLOBAL WeatherAtmosphere owner
     * ---------------------------------------------------------
     *
     * We intentionally update only dataset state.
     *
     * Visual rendering remains owned by:
     *
     * WeatherAtmosphere.astro
     * weather-atmosphere.css
     *
     * Home Weather Card remains independent.
     */

    atmosphere.dataset.weatherKind =
      state.kind;

    atmosphere.dataset.weatherWind =
      state.wind;

    atmosphere.dataset.weatherDay =
      String(weather.current.isDay);

    /*
     * ---------------------------------------------------------
     * Scenic phase from VISITOR LOCAL TIME
     * ---------------------------------------------------------
     *
     * Weather location and timezone are resolved from the
     * visitor-location pipeline.
     *
     * Keep scenic phase ownership here beside the live
     * weather dataset update so every page receives the
     * same visitor-aware atmosphere state.
     */

    let visitorHour: number;

    try {

      const hourText =
        new Intl.DateTimeFormat(
          "en-US",
          {
            timeZone:
              location.timezone ?? "UTC",

            hour:
              "2-digit",

            hourCycle:
              "h23"
          }
        )
          .format(new Date());

      visitorHour =
        Number.parseInt(
          hourText,
          10
        );

    } catch {

      /*
       * Safe fallback only when the supplied timezone
       * cannot be interpreted by Intl.
       */

      visitorHour =
        new Date().getUTCHours();
    }


    const weatherPhase =
      visitorHour >= 5 &&
      visitorHour < 10

        ? "morning"

        : visitorHour >= 10 &&
          visitorHour < 17

          ? "day"

          : visitorHour >= 17 &&
            visitorHour < 19

            ? "evening"

            : "night";


    atmosphere.dataset.weatherPhase =
      weatherPhase;


    /*
     * Keep only the fully resolved state.
     *
     * This is reused during the next client-side route swap
     * while the fresh location/weather request runs.
     */

    persistedAtmosphereState = {
      kind:
        atmosphere.dataset.weatherKind ?? "",

      wind:
        atmosphere.dataset.weatherWind ?? "",

      day:
        atmosphere.dataset.weatherDay ?? "",

      phase:
        weatherPhase
    };

    atmosphere.dispatchEvent(
      new CustomEvent(
        "mato:weather-change",
        {
          detail: {
            state,
            weather,
            location
          }
        }
      )
    );


    console.info(
      "[Mato Global Weather] Updated:",
      {
        source: location.source,

        latitude:
          location.latitude,

        longitude:
          location.longitude,

        city:
          location.city ?? null,

        country:
          location.country ?? null,

        weatherCode:
          weather.current.weatherCode,

        temperature:
          weather.current.temperature,

        windSpeed:
          weather.current.windSpeed,

        isDay:
          weather.current.isDay,

        atmosphereKind:
          state.kind,

        atmosphereWind:
          state.wind
      }
    );

  } catch (error) {

    /*
     * Do not replace the atmosphere with a fake city/weather.
     *
     * Existing static scenic state remains available when
     * live weather cannot be resolved.
     */

    console.warn(
      "[Mato Global Weather] Live update unavailable.",
      error
    );
  }
}


function startGlobalWeather():
  void {

  void refreshGlobalWeather();
}


/*
 * R71F6Q3D - Browser-only bootstrap guard
 *
 * Astro imports this module while prerendering.
 * Browser APIs must therefore execute only in the browser.
 */
if (
  typeof document !== "undefined" &&
  typeof window !== "undefined"
) {
  /*
   * Standard page load.
   */

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      startGlobalWeather,
      {
        once: true
      }
    );

  }
  else {

    startGlobalWeather();
  }


  /*
   * Astro client-side navigation.
   *
   * If View Transitions / client navigation are enabled,
   * refresh the atmosphere for the newly rendered page.
   */

  /*
   * Astro has now installed the destination DOM.
   *
   * Restore the last confirmed atmosphere state immediately
   * rather than exposing the destination element's fallback
   * weather state while network refresh is still pending.
   */

  document.addEventListener(
    "astro:after-swap",
    () => {

      applyPersistedAtmosphereState();
    }
  );


  document.addEventListener(
    "astro:page-load",
    () => {

      /*
       * Defensive second application.
       */

      applyPersistedAtmosphereState();

      /*
       * Existing live weather refresh remains active.
       */

      void refreshGlobalWeather();
    }
  );


  /*
   * Optional debugging API.
   *
   * Useful during development without changing production
   * weather ownership.
   */

  declare global {

    interface Window {

      MatoGlobalWeather?: {
        refresh:
          () => Promise<void>;
      };

    }

  }


  window.MatoGlobalWeather = {

    refresh:
      refreshGlobalWeather

  };
}
