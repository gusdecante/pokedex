import { makeStyles } from "tss-react/mui";
import { Theme } from "@mui/material";

export const useStyles = makeStyles<{ color: "dark" | "light" }>()(
  (theme: Theme, { color }) => ({
    appBarRoot: {
      "&.MuiPaper-root.MuiAppBar-root": {
        backgroundColor: theme.palette.primary[color],
      },
    },
    toobarRoot: {
      "&.MuiToolbar-root": {
        padding: theme.spacing(1, 8, 1, 8),
        display: "flex",
        justifyContent: "space-between",
      },
    },
    link: {
      textDecoration: "none",
    },
    title: {
      "&.MuiTypography-root": {
        cursor: "pointer",
        color: "white",
        fontSize: "2rem",
        fontHeight: "1.25rem",
        "& span": {
          color: theme.palette.grey["100"],
        },
      },
      "&.MuiTypography-root:first-letter": {
        color: theme.palette.grey["900"],
      },
    },
  })
);
