export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isIsoDate = (date: string): boolean => {
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{6}Z$/;
  return isoDateRegex.test(date);
};

export class ResponseValidator {
  static validateUrls(urls: string[]): boolean {
    return urls.every(isValidUrl);
  }

  static validateDates(dates: string[]): boolean {
    return dates.every(isIsoDate);
  }
}
