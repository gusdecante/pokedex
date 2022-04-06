import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles((theme: Theme) => ({
  AppBar: {
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
    },
  },
}));
