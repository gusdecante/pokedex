import { makeStyles } from "tss-react/mui";
import { Theme } from "@mui/material";

export const useStyles = makeStyles()((theme: Theme) => ({
  text: {
    "&.MuiTypography-root": {
      fontSize: "30px",
    },
  },
}));
