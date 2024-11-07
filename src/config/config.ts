interface Config {
  apiBaseUrl: string;
  timeout: number;
}

const config: Config = {
  apiBaseUrl: process.env.API_BASE_URL || 'https://swapi.dev/api',
  timeout: parseInt(process.env.API_TIMEOUT || '5000', 10),
};

export default config;
