import { makeStyles } from "tss-react/mui";
import { Theme } from "@mui/material";

export const useStyles = makeStyles()((theme: Theme) => ({
  cardRoot: {
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(90, 90, 90)",
    },
  },
  cardMedia: {
    margin: "auto",
    width: "130px",
    height: "130px",
  },
  cardContent: {
    "&.MuiTypography-root": {
      textAlign: "center",
      "&:first-letter": {
        textTransform: "uppercase",
      },
    },
  },
  linkRoot: {
    textDecoration: "none",
  },
}));
