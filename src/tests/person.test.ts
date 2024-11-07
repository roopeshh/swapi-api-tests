import { createSwapiClient, ISwapiClient } from '../api/swapiClient';
import { Person, PersonValidator } from '../models/person';
import { isValidUrl, ResponseValidator } from '../utils/testHelpers';

describe('SWAPI People Endpoints', () => {
  let swapiClient: ISwapiClient;

  beforeAll(() => {
    swapiClient = createSwapiClient();
  });

  it('should fetch Luke Skywalker data correctly', async () => {
    const luke: Person = await swapiClient.getPerson(1);

    expect(PersonValidator.isValid(luke)).toBe(true);
    expect(luke.name).toBe('Luke Skywalker');
    expect(luke.height).toBe('172');
    expect(luke.mass).toBe('77');
    expect(luke.hair_color).toBe('blond');
    expect(luke.skin_color).toBe('fair');
    expect(luke.eye_color).toBe('blue');
    expect(luke.birth_year).toBe('19BBY');
    expect(luke.gender).toBe('male');

    expect(isValidUrl(luke.homeworld)).toBe(true);
    expect(ResponseValidator.validateUrls(luke.films)).toBe(true);
    expect(ResponseValidator.validateUrls(luke.species)).toBe(true);
    expect(ResponseValidator.validateUrls(luke.vehicles)).toBe(true);
    expect(ResponseValidator.validateUrls(luke.starships)).toBe(true);

    expect(ResponseValidator.validateDates([luke.created, luke.edited])).toBe(true);
    expect(isValidUrl(luke.url)).toBe(true);
  });

  it('should handle non-existent person', async () => {
    await expect(swapiClient.getPerson(999999)).rejects.toThrow('Request failed with status code 404');
  });
});