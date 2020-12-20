import { Global } from "@emotion/react";
import GoogleFonts from "next-google-fonts";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { globalStyles } from "~src/lib/styles/globalStyles";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <GoogleFonts href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Gentium+Basic|Gentium+Book+Basic:700&display=swap" />
      <Global styles={globalStyles} />
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/images/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/images/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/images/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/images/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="UTF-8" />
        <meta
          name="google-site-verification"
          content="aEZXQ9Sa6ffNUZlsa_5niffn9eSFTty4CqdiVz-OqyA"
        />
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="/css/default.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="text/javascript"
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
        ></script>
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
