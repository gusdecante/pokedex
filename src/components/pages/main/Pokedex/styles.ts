import { makeStyles } from "tss-react/mui";
import { Theme } from "@mui/material";

export const useStyles = makeStyles()((theme: Theme) => ({
  pokedexContainer: {
    marginTop: theme.spacing(10),
  },
}));
