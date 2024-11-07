import axios, { AxiosInstance } from 'axios';
import config from '../config/config';
import { Person } from '../models/person';
import { Planet } from '../models/planets';

export interface ISwapiClient {
  getPerson(id: number): Promise<Person>;
  getPlanet(id: number): Promise<Planet>;
}

export class SwapiClient implements ISwapiClient {
  private client: AxiosInstance;

  constructor(baseURL: string, timeout: number) {
    this.client = axios.create({ baseURL, timeout });
  }

  async getPerson(id: number) {
    const response = await this.client.get(`/people/${id}/`);
    return response.data;
  }

  async getPlanet(id: number) {
    const response = await this.client.get(`/planets/${id}/`);
    return response.data;
  }
}

export const createSwapiClient = (): ISwapiClient => {
  return new SwapiClient(config.apiBaseUrl, config.timeout);
};
