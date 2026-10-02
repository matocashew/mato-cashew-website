interface CloudflareRequestCf {
  latitude?: string | number;
  longitude?: string | number;

  city?: string;
  region?: string;
  regionCode?: string;
  country?: string;

  timezone?: string;
  postalCode?: string;
  continent?: string;
}

interface VisitorLocationRequest extends Request {
  cf?: CloudflareRequestCf;
}

interface VisitorLocationContext {
  request: VisitorLocationRequest;
}

function parseCoordinate(
  value: string | number | undefined
): number | null {

  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return null;
  }

  const parsed = Number(value);

  return Number.isFinite(parsed)
    ? parsed
    : null;
}

export const onRequestGet =
  async (context: VisitorLocationContext) => {

    try {

      const cf =
        context.request.cf;

      if (!cf) {

        return Response.json(
          {
            success: false,
            source: "cloudflare-edge",
            reason: "edge-location-unavailable"
          },
          {
            status: 503,
            headers: {
              "Cache-Control": "no-store"
            }
          }
        );
      }

      const latitude =
        parseCoordinate(cf.latitude);

      const longitude =
        parseCoordinate(cf.longitude);

      if (
        latitude === null ||
        longitude === null
      ) {

        return Response.json(
          {
            success: false,
            source: "cloudflare-edge",
            reason: "coordinates-unavailable"
          },
          {
            status: 503,
            headers: {
              "Cache-Control": "no-store"
            }
          }
        );
      }

      return Response.json(
        {
          success: true,

          source: "cloudflare-edge",

          location: {
            latitude,
            longitude,

            city:
              cf.city ?? null,

            region:
              cf.region ?? null,

            regionCode:
              cf.regionCode ?? null,

            country:
              cf.country ?? null,

            timezone:
              cf.timezone ?? null,

            postalCode:
              cf.postalCode ?? null,

            continent:
              cf.continent ?? null
          }
        },
        {
          status: 200,

          headers: {
            "Cache-Control": "no-store"
          }
        }
      );

    } catch (error) {

      console.error(
        "Visitor location API error:",
        error
      );

      return Response.json(
        {
          success: false,
          source: "cloudflare-edge",
          reason: "internal-error"
        },
        {
          status: 500,
          headers: {
            "Cache-Control": "no-store"
          }
        }
      );
    }
  };