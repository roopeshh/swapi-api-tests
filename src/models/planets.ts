export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export class PlanetValidator {
  static isValid(planet: Planet): boolean {
    return (
      typeof planet.name === 'string' &&
      typeof planet.rotation_period === 'string' &&
      typeof planet.orbital_period === 'string' &&
      typeof planet.diameter === 'string' &&
      typeof planet.climate === 'string' &&
      typeof planet.gravity === 'string' &&
      typeof planet.terrain === 'string' &&
      typeof planet.surface_water === 'string' &&
      typeof planet.population === 'string' &&
      Array.isArray(planet.residents) &&
      Array.isArray(planet.films) &&
      typeof planet.created === 'string' &&
      typeof planet.edited === 'string' &&
      typeof planet.url === 'string'
    );
  }
}
