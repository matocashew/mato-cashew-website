import { weatherLocations } from "../../config/weather-locations";

export interface VisitorLocation {
  latitude: number;
  longitude: number;

  city?: string | null;
  region?: string | null;
  regionCode?: string | null;
  country?: string | null;
  timezone?: string | null;
  postalCode?: string | null;
  continent?: string | null;

  accuracy?: number | null;

  source:
    | "cloudflare-edge"
    | "browser-geolocation";
}

interface CloudflareLocationResponse {
  success?: boolean;

  source?: string;

  location?: {
    latitude?: number;
    longitude?: number;

    city?: string | null;
    region?: string | null;
    regionCode?: string | null;
    country?: string | null;
    timezone?: string | null;
    postalCode?: string | null;
    continent?: string | null;
  };

  reason?: string;
}

function isValidCoordinate(
  latitude: unknown,
  longitude: unknown
): latitude is number {

  return (
    typeof latitude === "number" &&
    typeof longitude === "number" &&
    Number.isFinite(latitude) &&
    Number.isFinite(longitude) &&
    latitude >= -90 &&
    latitude <= 90 &&
    longitude >= -180 &&
    longitude <= 180
  );
}

async function getCloudflareLocation():
  Promise<VisitorLocation | null> {

  try {

    const response =
      await fetch(
        "/api/visitor-location",
        {
          method: "GET",
          headers: {
            Accept: "application/json"
          },
          cache: "no-store"
        }
      );

    if (!response.ok) {
      return null;
    }

    const data =
      await response.json() as CloudflareLocationResponse;

    const location =
      data.location;

    if (
      !data.success ||
      !location ||
      !isValidCoordinate(
        location.latitude,
        location.longitude
      )
    ) {
      return null;
    }

    return {
      latitude: location.latitude,
      longitude: location.longitude,

      city: location.city ?? null,
      region: location.region ?? null,
      regionCode: location.regionCode ?? null,
      country: location.country ?? null,
      timezone: location.timezone ?? null,
      postalCode: location.postalCode ?? null,
      continent: location.continent ?? null,

      accuracy: null,

      source: "cloudflare-edge"
    };

  } catch (error) {

    console.warn(
      "Cloudflare visitor location unavailable.",
      error
    );

    return null;
  }
}

/*
 * R72F1Q7F - LOCAL WEATHER LOCATION NAME
 *
 * Browser geolocation supplies latitude/longitude but not a city.
 * Resolve a display name from the existing Mato Cashew
 * weatherLocations configuration.
 *
 * IMPORTANT:
 * - Original browser GPS coordinates remain unchanged.
 * - The resolved location is DISPLAY metadata only.
 * - Production Cloudflare Edge behavior remains unchanged.
 */

function getDistanceKm(
  latitude1: number,
  longitude1: number,
  latitude2: number,
  longitude2: number
): number {

  const earthRadiusKm = 6371;

  const latitudeDelta =
    (latitude2 - latitude1) *
    Math.PI / 180;

  const longitudeDelta =
    (longitude2 - longitude1) *
    Math.PI / 180;

  const value =
    Math.sin(latitudeDelta / 2) ** 2 +
    Math.cos(latitude1 * Math.PI / 180) *
    Math.cos(latitude2 * Math.PI / 180) *
    Math.sin(longitudeDelta / 2) ** 2;

  return (
    earthRadiusKm *
    2 *
    Math.atan2(
      Math.sqrt(value),
      Math.sqrt(1 - value)
    )
  );
}

function resolveBrowserLocationName(
  latitude: number,
  longitude: number
): string | null {

  if (weatherLocations.length === 0) {
    return null;
  }

  let nearestLocation =
    weatherLocations[0];

  let nearestDistance =
    getDistanceKm(
      latitude,
      longitude,
      nearestLocation.latitude,
      nearestLocation.longitude
    );

  for (
    let index = 1;
    index < weatherLocations.length;
    index++
  ) {

    const location =
      weatherLocations[index];

    const distance =
      getDistanceKm(
        latitude,
        longitude,
        location.latitude,
        location.longitude
      );

    if (distance < nearestDistance) {
      nearestLocation = location;
      nearestDistance = distance;
    }
  }

  return nearestLocation.nameEn;
}

function getBrowserLocation():
  Promise<VisitorLocation | null> {

  return new Promise((resolve) => {

    if (
      typeof navigator === "undefined" ||
      !navigator.geolocation
    ) {
      resolve(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(

      (position) => {

        const {
          latitude,
          longitude,
          accuracy
        } = position.coords;

        if (
          !isValidCoordinate(
            latitude,
            longitude
          )
        ) {
          resolve(null);
          return;
        }

        const resolvedLocationName =
          resolveBrowserLocationName(
            latitude,
            longitude
          );

        resolve({
          latitude,
          longitude,

          city:
            resolvedLocationName,

          accuracy:
            Number.isFinite(accuracy)
              ? accuracy
              : null,

          source: "browser-geolocation"
        });
      },

      (error) => {

        console.warn(
          "Browser geolocation unavailable:",
          error.message
        );

        resolve(null);
      },

      {
        enableHighAccuracy: false,
        timeout: 8000,
        maximumAge: 15 * 60 * 1000
      }
    );
  });
}

export async function getVisitorLocation():
  Promise<VisitorLocation | null> {

  /*
   * PRIMARY:
   * Cloudflare Edge approximate visitor location.
   *
   * Advantages:
   * - no browser GPS permission required
   * - same-origin API
   * - suitable for weather atmosphere
   */

  /*
   * R72F1Q9F1 - SKIP CLOUDFLARE API ON LOCALHOST
   *
   * Astro local development does not expose the production
   * /api/visitor-location Cloudflare endpoint.
   *
   * Local development therefore skips the Edge request and
   * continues to the existing Browser Geolocation fallback.
   *
   * Production behavior remains Cloudflare-first.
   */

  const isLocalDevelopment =
    typeof window !== "undefined" &&
    (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    );

  const edgeLocation =
    isLocalDevelopment
      ? null
      : await getCloudflareLocation();

  if (edgeLocation) {

    console.info(
      "[Mato Location] Cloudflare Edge:",
      edgeLocation
    );

    return edgeLocation;
  }

  /*
   * FALLBACK:
   * Browser geolocation.
   *
   * Used only when Cloudflare Edge coordinates
   * are unavailable.
   */

  const browserLocation =
    await getBrowserLocation();

  if (browserLocation) {

    console.info(
      "[Mato Location] Browser Geolocation:",
      browserLocation
    );

    return browserLocation;
  }

  /*
   * IMPORTANT:
   * No fixed city fallback.
   *
   * Do NOT silently substitute Kampong Thom
   * or another location for the visitor.
   */

  console.warn(
    "[Mato Location] Visitor location unavailable."
  );

  return null;
}

