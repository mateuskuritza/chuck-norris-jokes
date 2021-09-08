import Theme from "./Theme";
import { FavoriteJokesProvider } from "./contexts/FavoriteJokesContext";
import { useState } from "react";
import Search from "./components/Search";
import IJokeValue from "./interfaces/IJokeValue";
import JokesList from "./components/JokesList";
import { makeStyles } from "@material-ui/core";

function App() {
	const [jokes, setJokes] = useState<IJokeValue[]>([]);

	const classes = styles();

	return (
		<Theme>
			<FavoriteJokesProvider>
				<div className={classes.root}>
					<Search setJokes={setJokes} />
					<JokesList jokes={jokes} />
				</div>
			</FavoriteJokesProvider>
		</Theme>
	);
}

export default App;

const styles = makeStyles({
	root: {
		backgroundImage: "url(./images/chucknorriswallpaper.jpg)",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		height: "100vh",
		width: "100vw",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
});
