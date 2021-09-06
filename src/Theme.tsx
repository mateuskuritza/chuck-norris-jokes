import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function Theme({ children }: { children: React.ReactNode }) {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#925c21",
				contrastText: "#fcfcfc",
			},
			text: {
				primary: "#FFFFFF",
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
