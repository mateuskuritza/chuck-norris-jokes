import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles({
	root: {
		width: "100%",
		display: "flex",
	},
	input: {
		width: "20%",
		minWidth: "36px",
	},
	slider: {
		width: "100%",
		margin: "0 15px",
	},
});

export default function InputSlider({ value, setValue }: any) {
	const classes = useStyles();

	function handleSliderChange(event: any, newValue: any) {
		changeValue(newValue);
	}

	function handleInputChange(event: any) {
		changeValue(event.target.value === "" ? "" : Number(event.target.value));
	}

	function changeValue(value: any) {
		if (value < 0) {
			return setValue(0);
		} else if (value >= 100) {
			return setValue(100);
		}
		setValue(value);
	}

	return (
		<div className={classes.root}>
			<Slider
				className={classes.slider}
				value={typeof value === "number" ? value : 0}
				onChange={(e, value) => handleSliderChange(e, value)}
			/>
			<Input
				className={classes.input}
				value={value}
				margin="dense"
				onChange={handleInputChange}
				inputProps={{
					step: 1,
					min: 0,
					max: 100,
					type: "number",
				}}
			/>
		</div>
	);
}
