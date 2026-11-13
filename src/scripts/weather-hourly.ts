
type HourlyResponse = {
  hourly?: {
    time?: string[];
    temperature_2m?: (number | null)[];
    precipitation_probability?: (number | null)[];
    precipitation?: (number | null)[];
    weather_code?: (number | null)[];
  };
};

const latestRequest = new WeakMap<HTMLElement, number>();

function localized(km: boolean, en: string, kh: string): string {
  return km ? kh : en;
}

function formatNumber(value: number | null | undefined, digits = 0): string {
  return typeof value === "number" && Number.isFinite(value)
    ? value.toFixed(digits)
    : "\u2014";
}

function weatherLabel(code: number | null | undefined, km: boolean): string {
  if (code == null) return localized(km, "Unknown", "\u1798\u17B7\u1793\u178A\u17B9\u1784");
  if (code === 0) return localized(km, "Clear", "\u1798\u17C1\u1783\u179F\u17D2\u179A\u17A1\u17C7");
  if (code <= 3) return localized(km, "Cloudy", "\u1798\u17B6\u1793\u1796\u1796\u1780");
  if (code === 45 || code === 48) return localized(km, "Fog", "\u17A2\u17D0\u1796\u17D2\u1791");
  if ([95, 96, 99].includes(code)) return localized(km, "Thunderstorm", "\u1795\u17D2\u1782\u179A\u179A\u1793\u17D2\u1791\u17C7");
  if ([80, 81, 82].includes(code)) return localized(km, "Showers", "\u1797\u17D2\u179B\u17C0\u1784\u1792\u17D2\u179B\u17B6\u1780\u17CB\u1781\u17D2\u179B\u17B6\u17C6\u1784");
  if ([51, 53, 55, 56, 57].includes(code)) return localized(km, "Drizzle", "\u1797\u17D2\u179B\u17C0\u1784\u179A\u179B\u17B9\u1798");
  if ([61, 63, 65, 66, 67].includes(code)) return localized(km, "Rain", "\u1797\u17D2\u179B\u17C0\u1784");
  return localized(km, "Unknown", "\u1798\u17B7\u1793\u178A\u17B9\u1784");
}

function makeElement(tag: string, className?: string, text?: string): HTMLElement {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function makeMetricRow(label: string, value: string): HTMLElement {
  const row = makeElement("div", "weather-hourly__metric-row");
  row.append(
    makeElement("span", "weather-hourly__metric-label", label),
    makeElement("strong", "weather-hourly__metric-value", value),
  );
  return row;
}
export async function startHourlyForecast(
  root: HTMLElement,
  latitude: number,
  longitude: number,
  signal: AbortSignal,
): Promise<void> {
  const forecast = root.querySelector<HTMLElement>(".weather-forecast");
  if (!forecast) return;

  const km = document.documentElement.lang.toLowerCase().startsWith("km");
  const sequence = (latestRequest.get(root) ?? 0) + 1;
  latestRequest.set(root, sequence);
  let section = root.querySelector<HTMLElement>("[data-hourly-forecast]");
  if (!section) {
    section = makeElement("section", "weather-hourly");
    section.dataset.hourlyForecast = "";
    forecast.append(section);
  }
  section.replaceChildren(
    makeElement("h2", "weather-hourly__title", localized(km, "48-Hour Forecast", "\u1780\u17B6\u179A\u1796\u17D2\u1799\u17B6\u1780\u179A\u178E\u17CD\u17A2\u17B6\u1780\u17B6\u179F\u1792\u17B6\u178F\u17BB \u17E4\u17E8 \u1798\u17C9\u17C4\u1784")),
    makeElement("p", "weather-hourly__status", localized(km, "Loading hourly forecastâ€¦", "\u1780\u17C6\u1796\u17BB\u1784\u1791\u17B6\u1789\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1796\u17D2\u1799\u17B6\u1780\u179A\u178E\u17CD\u178F\u17B6\u1798\u1798\u17C9\u17C4\u1784\u2026")),
  );

  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    hourly: "temperature_2m,precipitation_probability,precipitation,weather_code",
    timezone: "Asia/Phnom_Penh",
    forecast_hours: "48",
  });

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, { signal });
    if (!response.ok) throw new Error(`Hourly API HTTP ${response.status}`);
    const data = (await response.json()) as HourlyResponse;
    const hours = data.hourly;
    if (!hours?.time?.length || !hours.temperature_2m || !hours.precipitation_probability || !hours.precipitation || !hours.weather_code) {
      throw new Error("Incomplete hourly response");
    }
    if (signal.aborted || latestRequest.get(root) !== sequence || !section.isConnected) return;

    const scroller = makeElement("div", "weather-hourly__scroller");
    scroller.setAttribute("role", "region");
    scroller.setAttribute("aria-label", localized(km, "Hourly weather forecast", "\u1780\u17B6\u179A\u1796\u17D2\u1799\u17B6\u1780\u179A\u178E\u17CD\u17A2\u17B6\u1780\u17B6\u179F\u1792\u17B6\u178F\u17BB\u178F\u17B6\u1798\u1798\u17C9\u17C4\u1784"));
    scroller.tabIndex = 0;
    const grid = makeElement("div", "weather-hourly__grid");
    const formatter = new Intl.DateTimeFormat(km ? "km-KH" : "en-GB", {
      weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false,
      timeZone: "Asia/Phnom_Penh",
    });
    for (let i = 0; i < Math.min(48, hours.time.length); i++) {
      const time = hours.time[i];
      // Open-Meteo returns local timestamps without an offset for the requested timezone.
      const date = new Date(`${time}+07:00`);
      const card = makeElement("article", "weather-hourly__card");
      card.append(
        makeElement("time", "weather-hourly__time", Number.isNaN(date.getTime()) ? time : formatter.format(date)),
        makeElement("strong", "weather-hourly__temp", `${formatNumber(hours.temperature_2m[i])}\u00B0C`),
        makeElement("span", "weather-hourly__condition", weatherLabel(hours.weather_code[i], km)),
        makeMetricRow(localized(km, "Rain chance", "\u17B1\u1780\u17B6\u179F\u1797\u17D2\u179B\u17C0\u1784"), `${formatNumber(hours.precipitation_probability[i])}%`),
        makeMetricRow(localized(km, "Rain amount", "\u1794\u179A\u17B7\u1798\u17B6\u178E\u1797\u17D2\u179B\u17C0\u1784"), `${formatNumber(hours.precipitation[i], 1)}\u00A0mm`),
      );
      grid.append(card);
    }
    scroller.append(grid);
    section.replaceChildren(
      makeElement("h2", "weather-hourly__title", localized(km, "48-Hour Forecast", "\u1780\u17B6\u179A\u1796\u17D2\u1799\u17B6\u1780\u179A\u178E\u17CD\u17A2\u17B6\u1780\u17B6\u179F\u1792\u17B6\u178F\u17BB \u17E4\u17E8 \u1798\u17C9\u17C4\u1784")),
      makeElement("p", "weather-hourly__hint", localized(km, "Scroll horizontally to view all hours \u2022 Cambodia time", "\u17A2\u17BC\u179F\u1795\u17D2\u178A\u17C1\u1780\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1798\u17BE\u179B\u1798\u17C9\u17C4\u1784\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB \u2022 \u1798\u17C9\u17C4\u1784\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6")),
      scroller,
    );
  } catch (error) {
    if (signal.aborted || latestRequest.get(root) !== sequence || !section.isConnected) return;
    console.warn("Hourly weather unavailable:", error);
    section.replaceChildren(
      makeElement("h2", "weather-hourly__title", localized(km, "48-Hour Forecast", "\u1780\u17B6\u179A\u1796\u17D2\u1799\u17B6\u1780\u179A\u178E\u17CD\u17A2\u17B6\u1780\u17B6\u179F\u1792\u17B6\u178F\u17BB \u17E4\u17E8 \u1798\u17C9\u17C4\u1784")),
      makeElement("p", "weather-hourly__status", localized(km, "Hourly forecast is temporarily unavailable.", "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1796\u17D2\u1799\u17B6\u1780\u179A\u178E\u17CD\u178F\u17B6\u1798\u1798\u17C9\u17C4\u1784\u1798\u17B7\u1793\u17A2\u17B6\u1785\u1794\u17D2\u179A\u17BE\u1794\u17B6\u1793\u1794\u178E\u17D2\u178A\u17C4\u17C7\u17A2\u17B6\u179F\u1793\u17D2\u1793\u17D4")),
    );
  }
}