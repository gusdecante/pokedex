import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#00796B",
      main: "#00695C",
      dark: "#004D40",
    },
    secondary: {
      light: "#CCE1DE",
      main: "#02E7D9",
      dark: "#1dd6cb",
    },
    text: {
      primary: "#000000",
      secondary: "#9B9B9B",
    },
    error: {
      main: "#FC3C00",
    },
    warning: {
      main: "#FCA600",
    },
    success: {
      main: "#00D34D",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F0F0F0",
      200: "#EEEEEE",
      300: "#C4C4C4",
      400: "#9B9B9B",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});
