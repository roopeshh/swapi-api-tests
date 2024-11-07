export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export class PersonValidator {
  static isValid(person: Person): boolean {
    return (
      typeof person.name === 'string' &&
      typeof person.height === 'string' &&
      typeof person.mass === 'string' &&
      typeof person.hair_color === 'string' &&
      typeof person.skin_color === 'string' &&
      typeof person.eye_color === 'string' &&
      typeof person.birth_year === 'string' &&
      typeof person.gender === 'string' &&
      typeof person.homeworld === 'string' &&
      Array.isArray(person.films) &&
      Array.isArray(person.species) &&
      Array.isArray(person.vehicles) &&
      Array.isArray(person.starships) &&
      typeof person.created === 'string' &&
      typeof person.edited === 'string' &&
      typeof person.url === 'string'
    );
  }
}
