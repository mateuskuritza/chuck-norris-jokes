import { ListItem, ListItemText } from "@material-ui/core";

export default function Item({ primary, secondary }: { primary: string; secondary: string }) {
	return (
		<ListItem>
			<ListItemText primary={primary} secondary={secondary} />
		</ListItem>
	);
}
