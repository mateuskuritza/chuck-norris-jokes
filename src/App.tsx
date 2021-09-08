import Theme from "./Theme";
import { FavoriteJokesProvider } from "./contexts/FavoriteJokesContext";
import { useState } from "react";
import Search from "./components/Search";
import IJokeValue from "./interfaces/IJokeValue";
import JokesList from "./components/JokesList";
import styled from "styled-components";

function App() {
	const [jokes, setJokes] = useState<IJokeValue[]>([]);

	return (
		<Theme>
			<FavoriteJokesProvider>
				<MainContainer>
					<Search setJokes={setJokes} />
					<JokesList jokes={jokes} />
				</MainContainer>
			</FavoriteJokesProvider>
		</Theme>
	);
}

export default App;

const MainContainer = styled.div`
	background-image: url("./images/chucknorriswallpaper.jpg");
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	> div {
		width: 100%;
		margin: 30px;
	}

	@media (max-width: 800px) {
		flex-direction: column;
		> div {
			width: 90%;
		}
	}
`;
