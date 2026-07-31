export function updateQueryParameter(
  key: string,
  value: string
): void {
  const params = new URLSearchParams(window.location.search);

  if (value === "") {
    params.delete(key);
  } else {
    params.set(key, value);
  }

  const newUrl =
    `${window.location.pathname}${
      params.toString() ? `?${params}` : ""
    }`;

  window.history.replaceState({}, "", newUrl);
}