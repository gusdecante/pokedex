import type { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material";

import { NavBar } from "../components";

import { theme } from "../../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
