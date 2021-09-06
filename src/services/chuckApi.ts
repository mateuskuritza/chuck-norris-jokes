import IJoke from "../interfaces/IJoke";
import IMultipleJokes from "../interfaces/IMultipleJokes";
import api from "./api";

export default class chuckApi {
	async getJokes(firstName: string, lastName: string, quantity: number = 1, category: string): Promise<IMultipleJokes> {
		if (firstName && lastName && category) {
			return this.jokeByNameAndCategory(firstName, lastName, quantity, category);
		}

		if (firstName && lastName) {
			return this.byName(firstName, lastName, quantity);
		}

		if (category) {
			return this.includeCategories(category, quantity);
		}

		return this.random(quantity);
	}

	async byName(firstName: string, lastName: string, quantity: number = 1): Promise<IMultipleJokes> {
		const joke = await api.get(`/jokes/random/${quantity}?firstName=${firstName}&lastName=${lastName}`);
		return joke.data;
	}

	async jokeByNameAndCategory(firstName: string, lastName: string, quantity: number = 1, category: string): Promise<IMultipleJokes> {
		const jokes = await api.get(`/jokes/random/${quantity}?firstName=${firstName}&lastName=${lastName}&limitTo=[${category}]`);
		return jokes.data;
	}

	async random(quantity: number = 1): Promise<IMultipleJokes> {
		const joke = await api.get(`/jokes/random/${quantity}`);
		return joke.data;
	}

	async multipleJokes(quantity: number = 1): Promise<IMultipleJokes> {
		const joke = await api.get(`/jokes/random/${quantity}`);
		return joke.data;
	}

	async includeCategories(category: string, quantity: number = 1): Promise<IMultipleJokes> {
		const joke = await api.get(`/jokes/random/${quantity}?limitTo=[${category}]`);
		return joke.data;
	}

	async excludeCategories(category: string, quantity: number = 1): Promise<IMultipleJokes> {
		const joke = await api.get(`/jokes/random/${quantity}?exclude=[${category}]`);
		return joke.data;
	}

	async jokeById(id: number): Promise<IJoke> {
		const joke = await api.get(`/jokes/${id}`);
		return joke.data;
	}

	async countJokes(): Promise<{ type: string; value: number }> {
		const numberOfJokes = await api.get(`/jokes/count`);
		return numberOfJokes.data;
	}

	async categories(): Promise<{ type: string; value: string[] }> {
		const categories = await api.get(`/categories`);
		return categories.data;
	}
}
