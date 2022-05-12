import axios, { AxiosInstance } from 'axios';
import { ICoffee } from './randomDataTypes';

const randomDataBaseUrl = 'https://random-data-api.com/api/';

const randomDataAxiosInstance = axios.create({
  baseURL: randomDataBaseUrl,
});

class RandomDataService {
  private randomDataInstance : AxiosInstance;

  constructor(randomDataInstance : AxiosInstance) {
    this.randomDataInstance = randomDataInstance;
  }

  async getRandomCoffeeList(size: number) : Promise<Array<ICoffee>> {
    const randomCoffeeListResponse = await this.randomDataInstance.get(
      `coffee/random_coffee?size=${size}`,
    );

    return randomCoffeeListResponse.data;
  }
}

export const RandomDataServiceInstance = new RandomDataService(
  randomDataAxiosInstance,
);
