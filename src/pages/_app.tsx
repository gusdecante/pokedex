import type { AppProps } from "next/app";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createCache, { EmotionCache } from "@emotion/cache";

import { Provider } from "react-redux";

import { theme } from "../../styles/theme";
import { NavBar } from "../components";

import "@fontsource/roboto";
import { persistor, store } from "../components/redux/store";
import { PersistGate } from "redux-persist/integration/react";

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
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavBar />
            <CssBaseline />
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
