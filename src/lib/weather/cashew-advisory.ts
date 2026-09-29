import type {
  MatoWeatherData,
  WeatherCondition,
} from "./weather-types";

export type CashewAdvisoryLevel =
  | "favorable"
  | "caution"
  | "avoid";

export interface CashewAdvisory {
  level: CashewAdvisoryLevel;
  title: {
    en: string;
    km: string;
  };
  message: {
    en: string;
    km: string;
  };
}

const WET_CONDITIONS = new Set<WeatherCondition>([
  "drizzle",
  "rain",
  "showers",
  "thunderstorm",
]);

function advisory(
  level: CashewAdvisoryLevel,
  enTitle: string,
  kmTitle: string,
  enMessage: string,
  kmMessage: string,
): CashewAdvisory {
  return {
    level,
    title: {
      en: enTitle,
      km: kmTitle,
    },
    message: {
      en: enMessage,
      km: kmMessage,
    },
  };
}

export function getCashewAdvisory(
  data: MatoWeatherData,
): CashewAdvisory {
  const current = data.current;
  const today = data.daily[0];

  const rainProbability =
    today?.precipitationProbability ?? 0;

  /*
   * Highest-priority safety/weather rule.
   * Active thunderstorm or very strong wind means outdoor
   * work should be approached cautiously regardless of
   * drying conditions.
   */
  if (
    current.condition === "thunderstorm" ||
    current.windSpeed >= 40
  ) {
    return advisory(
      "avoid",
      "Delay exposed outdoor work",
      "គួរពន្យារការងារក្រៅដែលប្រឈមអាកាសធាតុ",
      "Thunderstorm or strong-wind conditions may make exposed field work and outdoor cashew drying unsuitable. Protect harvested nuts and review local conditions before resuming work.",
      "លក្ខខណ្ឌផ្គររន្ទះ ឬខ្យល់ខ្លាំង អាចមិនសមស្របសម្រាប់ការងារចម្ការ និងការហាលគ្រាប់ចន្ទីនៅខាងក្រៅ។ គួរការពារគ្រាប់ដែលប្រមូលផលរួច និងពិនិត្យលក្ខខណ្ឌនៅតំបន់មុនបន្តការងារ។",
    );
  }

  /*
   * Wet weather or high daily rain probability:
   * outdoor drying carries a clear moisture risk.
   */
  if (
    WET_CONDITIONS.has(current.condition) ||
    rainProbability >= 70
  ) {
    return advisory(
      "avoid",
      "Avoid outdoor cashew drying",
      "គួរជៀសវាងការហាលគ្រាប់ចន្ទីនៅខាងក្រៅ",
      "Rain or a high chance of rain can interrupt drying and increase moisture exposure. Keep raw cashew nuts protected and wait for a drier weather window before outdoor drying.",
      "ភ្លៀង ឬឱកាសភ្លៀងខ្ពស់ អាចរំខានដល់ការហាល និងបង្កើនការប៉ះពាល់នឹងសំណើម។ គួរការពារគ្រាប់ស្វាយចន្ទីឆៅ និងរង់ចាំពេលអាកាសធាតុស្ងួតជាងនេះ មុនធ្វើការហាលនៅខាងក្រៅ។",
    );
  }

  /*
   * Very humid air can slow drying even when it is not
   * actively raining.
   */
  if (current.humidity >= 85) {
    return advisory(
      "caution",
      "High humidity — monitor drying closely",
      "សំណើមខ្ពស់ — ត្រូវតាមដានការហាលឱ្យបានជិតស្និទ្ធ",
      "High humidity can slow moisture removal from cashew nuts. Use a protected drying area where possible, keep nuts off damp surfaces, and check moisture before storage.",
      "សំណើមខ្ពស់អាចធ្វើឱ្យការបាត់បង់សំណើមពីគ្រាប់ចន្ទីយឺត។ ប្រសិនបើអាច គួរប្រើកន្លែងហាលដែលមានការការពារ កុំដាក់គ្រាប់លើផ្ទៃសើម និងពិនិត្យសំណើមមុនរក្សាទុក។",
    );
  }

  /*
   * Moderate rain risk or elevated humidity:
   * drying may still be possible, but conditions should
   * be monitored and nuts should be easy to cover/move.
   */
  if (
    rainProbability >= 40 ||
    current.humidity >= 75
  ) {
    return advisory(
      "caution",
      "Use caution for outdoor drying",
      "ត្រូវប្រុងប្រយ័ត្នពេលហាលនៅខាងក្រៅ",
      "Conditions may allow some outdoor drying, but rain risk or humidity is elevated. Monitor the forecast, keep a cover ready, and move cashew nuts to a protected area if conditions worsen.",
      "លក្ខខណ្ឌអាចអនុញ្ញាតឱ្យហាលនៅខាងក្រៅបានខ្លះ ប៉ុន្តែហានិភ័យភ្លៀង ឬសំណើមនៅកម្រិតខ្ពស់។ គួរតាមដានការព្យាករណ៍ ត្រៀមសម្ភារៈគ្រប និងផ្លាស់ទីគ្រាប់ចន្ទីទៅកន្លែងមានការការពារ ប្រសិនបើអាកាសធាតុប្រែប្រួល។",
    );
  }

  /*
   * Lower rain risk and moderate humidity.
   * This is guidance, not a guarantee that conditions
   * will remain dry.
   */
  return advisory(
    "favorable",
    "Favorable window for outdoor drying",
    "លក្ខខណ្ឌអំណោយផលសម្រាប់ការហាលនៅខាងក្រៅ",
    "Current humidity and rain risk are relatively favorable for outdoor cashew drying. Continue monitoring the forecast, spread nuts evenly, and be ready to protect them if conditions change.",
    "សំណើម និងហានិភ័យភ្លៀងបច្ចុប្បន្នមានលក្ខណៈអំណោយផលសម្រាប់ការហាលគ្រាប់ចន្ទីនៅខាងក្រៅ។ គួរបន្តតាមដានការព្យាករណ៍ រាលគ្រាប់ឱ្យស្មើ និងត្រៀមការពារ ប្រសិនបើអាកាសធាតុប្រែប្រួល។",
  );
}
