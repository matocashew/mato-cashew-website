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

        resolve({
          latitude,
          longitude,
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

  const edgeLocation =
    await getCloudflareLocation();

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