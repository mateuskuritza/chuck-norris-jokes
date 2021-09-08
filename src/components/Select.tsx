import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
	root: {
		"label + &": {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderRadius: 4,
		position: "relative",
		border: "1px solid #fff",
		fontSize: 16,
		padding: "10px 26px 10px 12px",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		"&:focus": {
			borderRadius: 4,
			borderColor: "#b4abab",
			boxShadow: "0 0 0 0.2rem #493C43",
		},
	},
}))(InputBase);

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
		width: "100%",
	},
	item: {
		color: "#000",
	},
}));

export default function CustomizedSelect({ options, selected, select }: { options: string[]; selected: string; select: Function }) {
	const classes = useStyles();

	const handleChange = (event: any) => {
		select(event.target.value);
	};

	return (
		<div>
			<FormControl color="primary" className={classes.margin}>
				<Select
					color="primary"
					labelId="demo-customized-select-label"
					id="demo-customized-select"
					value={selected}
					onChange={handleChange}
					input={<BootstrapInput />}
				>
					<MenuItem className={classes.item} value="">
						<em>Nenhuma</em>
					</MenuItem>
					{options.map((option, i) => (
						<MenuItem key={i} className={classes.item} value={option}>
							{option}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
