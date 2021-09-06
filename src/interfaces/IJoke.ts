export default interface IJoke {
	type: string;
	value: {
		id: number;
		joke: string;
		categories: string[];
	}[];
}
