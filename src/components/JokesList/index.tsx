import React, { useMemo } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Item from "./Item";
import IJokeValue from "../../interfaces/IJokeValue";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			minWidth: 300,
			height: 300,
			backgroundColor: "#493C43",
			boxShadow: "0 0 10px 3px #000000",
			borderRadius: "20px",
			padding: "15px",
			"& p": {
				color: "#919191",
			},
		},
		list: {
			overflow: "auto",
			overflowY: "scroll",
			msScrollbarFaceColor: "#493c43",
			width: "100%",
			height: "100%",
		},
		title: {
			margin: theme.spacing(4, 0, 2),
		},
	})
);

function generate(element: React.ReactElement) {
	return [0, 1, 2].map((value) =>
		React.cloneElement(element, {
			key: value,
		})
	);
}

export default function JokesList({ jokes }: { jokes: IJokeValue[] }) {
	const classes = useStyles();

	const data = useMemo(() => {
		return jokes.map((joke) => {
			return {
				primary: joke.joke,
				secondary: joke.categories.join(", "),
			};
		});
	}, [jokes]);

	return (
		<div className={classes.root}>
			<List className={classes.list} dense={true}>
				{data?.map((joke) => (
					<Item primary={joke.primary} secondary={joke.secondary} />
				))}
			</List>
		</div>
	);
}
