import type { AppProps } from "next/app";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createCache, { EmotionCache } from "@emotion/cache";

import { theme } from "../../styles/theme";
import { NavBar } from "../components";

let muiCache: EmotionCache | undefined = undefined;

export const createMuiCache = () =>
  (muiCache = createCache({ key: "mui", prepend: true }));

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={muiCache ?? createMuiCache()}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <NavBar />
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
