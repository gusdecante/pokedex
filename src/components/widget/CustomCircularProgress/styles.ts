import { makeStyles } from "tss-react/mui";
import { Theme } from "@mui/material";

export const useStyles = makeStyles()((theme: Theme) => ({
  circularProgressRoot: {
    "&.MuiCircularProgress-root": {
      color: "lightgrey",
      marginTop: "160px",
    },
  },
}));
