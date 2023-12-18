import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

export const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    icon: {
        marginRight: "20px",
    },
    button: {
        marginTop: "40px"
    },
    cardGrid: {
        paddingTop: "20px 0"
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: "#f8f8f8",
        padding: "50px 0"
    }
}));
