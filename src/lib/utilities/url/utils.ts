export function getNumberSearchParameterOrDefault(
  url: URL,
  parameter: string,
  defaultValue: number
): number {
  try {
    return url.searchParams.has(parameter)
      ? parseInt(url.searchParams.get(parameter)!, 10)
      : defaultValue;
  } catch {
    return defaultValue;
  }
}
