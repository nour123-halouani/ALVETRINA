import Layout from "../components/layout";
import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../styles/theme";
import createEmotionCache from "../styles/createEmotionCache";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import variables from "../styles/variables.module.scss";
import "../styles/NavBar.css"
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout color={variables.primary}>
          <Script src="https://code.jquery.com/jquery-3.6.0.min.js"></Script>
          <Script src="https://cdn.rawgit.com/JacobLett/bootstrap4-latest/504729ba/bootstrap-4-latest.min.js"></Script>
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"></Script>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
