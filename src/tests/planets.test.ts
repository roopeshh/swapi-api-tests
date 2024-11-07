import { createSwapiClient, ISwapiClient } from '../api/swapiClient';
import { Planet, PlanetValidator } from '../models/planets';
import { isValidUrl, ResponseValidator } from '../utils/testHelpers';

describe('SWAPI Planets Endpoints', () => {
  let swapiClient: ISwapiClient;

  beforeAll(() => {
    swapiClient = createSwapiClient();
  });

  it('should fetch Tatooine planet data correctly', async () => {
    const tatooine: Planet = await swapiClient.getPlanet(1);

    expect(PlanetValidator.isValid(tatooine)).toBe(true);

    expect(tatooine.name).toBe('Tatooine');
    expect(tatooine.rotation_period).toBe('23');
    expect(tatooine.orbital_period).toBe('304');
    expect(tatooine.diameter).toBe('10465');
    expect(tatooine.climate).toBe('arid');
    expect(tatooine.gravity).toBe('1 standard');
    expect(tatooine.terrain).toBe('desert');
    expect(tatooine.surface_water).toBe('1');
    expect(tatooine.population).toBe('200000');
    expect(ResponseValidator.validateUrls(tatooine.residents)).toBe(true);
    expect(ResponseValidator.validateUrls(tatooine.films)).toBe(true);
    expect(ResponseValidator.validateDates([tatooine.created, tatooine.edited])).toBe(true);
    expect(isValidUrl(tatooine.url)).toBe(true);
  });

  it('should handle non-existent planet', async () => {
    await expect(swapiClient.getPlanet(999999)).rejects.toThrow(
      'Request failed with status code 404',
    );
  });
});
