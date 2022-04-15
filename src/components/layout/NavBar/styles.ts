import { makeStyles } from "tss-react/mui";
import { Theme } from "@mui/material";

export const useStyles = makeStyles()((theme: Theme) => ({
  appBarRoot: {
    "&.MuiPaper-root.MuiAppBar-root": {
      backgroundColor: "black",
    },
  },
  link: {
    textDecoration: "none",
  },
  title: {
    "&.MuiTypography-root": {
      cursor: "pointer",
      color: "white",
      fontHeight: "2rem",
      "& span": {
        color: "lightgray",
      },
    },
    "&.MuiTypography-root:first-letter": {
      color: "red",
    },
  },
}));
