import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles((theme: Theme) => ({
  AppBar: {
    backgroundColor: "black",
    "&.MuiPaper-root.MuiAppBar-root": {},
    // "&.MuiBox-root": {
    // },
  },
  link: {
    textDecoration: "none",
  },
}));
