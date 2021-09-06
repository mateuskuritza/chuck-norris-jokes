import IJoke from "../interfaces/IJoke";
import IMultipleJokes from "../interfaces/IMultipleJokes";
import api from "./api";

export default class chuckApi {
  async byName(firstName: string, lastName: string, quantity: number = 1): Promise<IMultipleJokes>{
      const joke = await api.get(`/jokes/random/${quantity}?firstName=${firstName}&lastName=${lastName}`);
      return joke.data;
  }

  async random(quantity: number = 1): Promise<IMultipleJokes>{
    const joke = await api.get(`/jokes/random/${quantity}`);
    return joke.data;
  }

  async multipleJokes(quantity: number = 1): Promise<IMultipleJokes>{
    const joke = await api.get(`/jokes/random/${quantity}`);
    return joke.data;
  }

  async includeCategories(categories: string[], quantity: number = 1): Promise<IMultipleJokes>{
    const joke = await api.get(`/jokes/random/${quantity}?limitTo=${categories}`);
    return joke.data;
  }

  async excludeCategories(categories: string[], quantity: number = 1): Promise<IMultipleJokes>{
    const joke = await api.get(`/jokes/random/${quantity}?exclude=${categories}`);
    return joke.data;
  }

  async jokeById(id: number): Promise<IJoke>{
    const joke = await api.get(`/jokes/${id}`);
    return joke.data;
  }

  async countJokes(): Promise<{type: string, value: number}>{
      const numberOfJokes = await api.get(`/jokes/count`);
      return numberOfJokes.data;
  }

  async categories(): Promise<{type: string, value: string[]}>{
      const categories = await api.get(`/categories`);
      return categories.data;
  }
}