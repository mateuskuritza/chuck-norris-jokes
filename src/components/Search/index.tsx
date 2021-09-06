import Input from "../Input";
import InputSlider from "../Slider";
import Button from "../Button";
import CustomizedSelect from "../Select";
import { Container, FormControlLabel, FormGroup, makeStyles, Switch } from "@material-ui/core";
import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "./Toast";

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
	},
	container: {
		backgroundColor: "#493C43",
		width: "400px",
		height: "400px",
		boxShadow: "0 0 10px 3px #000000",
		borderRadius: "20px",
		margin: "0 3%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "5px 5px 30px 5px",
	},
	forms: {
		width: "100%",
		padding: "0 30px",
		display: "flex",
		flexDirection: "column",
		alignItems: "left",
		justifyContent: "space-evenly",
		height: "100%",
	},
	inputs: {
		width: "100%",
		margin: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
});

export default function Search({ setJokes }: { setJokes: Function }) {
	const [name, setName] = useState("");
	const [byName, setByName] = useState(false);
	const [quantity, setQuantity] = useState(1);

	const [category, setCategory] = useState("");
	const [categories, setCategories] = useState<string[]>([]);

	const classes = styles();

	const api = useApi();

	function searchJokes() {
		const nameArray = byName ? name.split(" ") : "";
		api.chuck
			.getJokes(nameArray[0], nameArray[1], quantity, category)
			.then((jokes) => {
				setJokes(jokes.value);
				sucessToast();
			})
			.catch(() => errorToast());
	}

	useEffect(() => {
		api.chuck
			.categories()
			.then((categories) => {
				setCategories(categories.value);
				sucessToast();
			})
			.catch(() => errorToast("Chuck Norris destruiu as categorias! :("));
		// eslint-disable-next-line
	}, []);

	return (
		<div className={classes.root}>
			<Toast />
			<Container maxWidth="sm" className={classes.container}>
				<FormGroup className={classes.forms}>
					<FormControlLabel
						control={
							<Input
								size="small"
								variant="outlined"
								fullWidth
								margin="dense"
								value={name}
								onChange={(event: React.FormEvent<HTMLInputElement>) => setName(event.currentTarget.value)}
							/>
						}
						label="Nome"
						labelPlacement="start"
						color="primary"
						className={classes.inputs}
					/>
					<FormControlLabel
						control={<Switch color="primary" checked={byName} onChange={() => setByName(!byName)} />}
						label="Piada com nome"
						labelPlacement="start"
						color="primary"
						className={classes.inputs}
						style={{ maxWidth: "190px" }}
					/>
					<FormControlLabel
						control={<InputSlider value={quantity} setValue={setQuantity} />}
						label="Quantidade"
						labelPlacement="start"
						color="primary"
						className={classes.inputs}
					/>
					<CustomizedSelect options={categories} selected={category} select={setCategory} />
				</FormGroup>
				<Button onClick={searchJokes} color="primary" variant="contained">
					{" "}
					Pesquisar{" "}
				</Button>
			</Container>
		</div>
	);
}

function errorToast(message: string = "Chuck Norris se cansou das piadas!") {
	toast.error(message, {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
}

function sucessToast(message: string = '"Estou rindo muito" - Chuck Norris') {
	toast.success(message, {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
}
