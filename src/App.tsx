import Theme from "./Theme";
import { FavoriteJokesProvider } from "./contexts/FavoriteJokesContext";
import { useState } from "react";
import Search from "./components/Search";
import IJokeValue from "./interfaces/IJokeValue";

function App() {
	const [jokes, setJokes] = useState<IJokeValue[]>([]);

	return (
		<Theme>
			<FavoriteJokesProvider>
				<Search setJokes={setJokes} />
			</FavoriteJokesProvider>
		</Theme>
	);
}

export default App;
