export interface WeatherLocation {
  id: string;
  nameEn: string;
  nameKm: string;
  latitude: number;
  longitude: number;
}

export const weatherLocations: WeatherLocation[] = [
  {
    id: "kampong-thom",
    nameEn: "Kampong Thom",
    nameKm: "កំពង់ធំ",
    latitude: 12.7111,
    longitude: 104.8887,
  },
  {
    id: "phnom-penh",
    nameEn: "Phnom Penh",
    nameKm: "ភ្នំពេញ",
    latitude: 11.5564,
    longitude: 104.9282,
  },
  {
    id: "banteay-meanchey",
    nameEn: "Banteay Meanchey",
    nameKm: "បន្ទាយមានជ័យ",
    latitude: 13.5859,
    longitude: 102.9737,
  },
  {
    id: "battambang",
    nameEn: "Battambang",
    nameKm: "បាត់ដំបង",
    latitude: 13.0957,
    longitude: 103.2022,
  },
  {
    id: "kampong-cham",
    nameEn: "Kampong Cham",
    nameKm: "កំពង់ចាម",
    latitude: 11.9934,
    longitude: 105.4635,
  },
  {
    id: "kampong-chhnang",
    nameEn: "Kampong Chhnang",
    nameKm: "កំពង់ឆ្នាំង",
    latitude: 12.2500,
    longitude: 104.6667,
  },
  {
    id: "kampong-speu",
    nameEn: "Kampong Speu",
    nameKm: "កំពង់ស្ពឺ",
    latitude: 11.4533,
    longitude: 104.5208,
  },
  {
    id: "kampot",
    nameEn: "Kampot",
    nameKm: "កំពត",
    latitude: 10.6104,
    longitude: 104.1810,
  },
  {
    id: "kandal",
    nameEn: "Kandal",
    nameKm: "កណ្ដាល",
    latitude: 11.4833,
    longitude: 104.9500,
  },
  {
    id: "kep",
    nameEn: "Kep",
    nameKm: "កែប",
    latitude: 10.4829,
    longitude: 104.3167,
  },
  {
    id: "koh-kong",
    nameEn: "Koh Kong",
    nameKm: "កោះកុង",
    latitude: 11.6175,
    longitude: 102.9849,
  },
  {
    id: "kratie",
    nameEn: "Kratie",
    nameKm: "ក្រចេះ",
    latitude: 12.4881,
    longitude: 106.0188,
  },
  {
    id: "mondulkiri",
    nameEn: "Mondulkiri",
    nameKm: "មណ្ឌលគិរី",
    latitude: 12.4558,
    longitude: 107.1881,
  },
  {
    id: "oddar-meanchey",
    nameEn: "Oddar Meanchey",
    nameKm: "ឧត្តរមានជ័យ",
    latitude: 14.1818,
    longitude: 103.5176,
  },
  {
    id: "pailin",
    nameEn: "Pailin",
    nameKm: "ប៉ៃលិន",
    latitude: 12.8489,
    longitude: 102.6093,
  },
  {
    id: "preah-sihanouk",
    nameEn: "Preah Sihanouk",
    nameKm: "ព្រះសីហនុ",
    latitude: 10.6253,
    longitude: 103.5234,
  },
  {
    id: "preah-vihear",
    nameEn: "Preah Vihear",
    nameKm: "ព្រះវិហារ",
    latitude: 13.8073,
    longitude: 104.9805,
  },
  {
    id: "pursat",
    nameEn: "Pursat",
    nameKm: "ពោធិ៍សាត់",
    latitude: 12.5388,
    longitude: 103.9192,
  },
  {
    id: "prey-veng",
    nameEn: "Prey Veng",
    nameKm: "ព្រៃវែង",
    latitude: 11.4868,
    longitude: 105.3253,
  },
  {
    id: "ratanakiri",
    nameEn: "Ratanakiri",
    nameKm: "រតនគិរី",
    latitude: 13.7394,
    longitude: 106.9873,
  },
  {
    id: "siem-reap",
    nameEn: "Siem Reap",
    nameKm: "សៀមរាប",
    latitude: 13.3633,
    longitude: 103.8564,
  },
  {
    id: "stung-treng",
    nameEn: "Stung Treng",
    nameKm: "ស្ទឹងត្រែង",
    latitude: 13.5259,
    longitude: 105.9683,
  },
  {
    id: "svay-rieng",
    nameEn: "Svay Rieng",
    nameKm: "ស្វាយរៀង",
    latitude: 11.0879,
    longitude: 105.7994,
  },
  {
    id: "takeo",
    nameEn: "Takeo",
    nameKm: "តាកែវ",
    latitude: 10.9908,
    longitude: 104.7849,
  },
  {
    id: "tboung-khmum",
    nameEn: "Tboung Khmum",
    nameKm: "ត្បូងឃ្មុំ",
    latitude: 11.8891,
    longitude: 105.8760,
  },
];

export const defaultWeatherLocation =
  weatherLocations[0];

export function getWeatherLocation(
  id: string,
): WeatherLocation | undefined {
  return weatherLocations.find(
    (location) => location.id === id,
  );
}
