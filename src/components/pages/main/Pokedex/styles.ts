import { makeStyles } from "tss-react/mui";
import { Theme } from "@mui/material";

export const useStyles = makeStyles()((theme: Theme) => ({
  pokedexRoot: {
    "&.MuiBox-root": {
      marginTop: theme.spacing(7),
      display: "flex",
      justifyContent: "center",
    },
  },
  pokedexGridContainer: {
    textAlign: "left",
    padding: theme.spacing(2),
    backgroundColor: "rgb(68, 68, 68)",
  },
}));
