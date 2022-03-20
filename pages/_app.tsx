import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { localeContext, targetLocaleContext, userLocale, targetLocale } from '../lib/locale-context';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [userLocale,setUserLocale] = useState('en');
  const [targetLocale,setTargetLocale] = useState('');


  const changeLocale = (e) => {
    setUserLocale(e.target.value);
  }

  const changeTargetLocale = (e) => {
    setTargetLocale(e.target.value);
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>ImmiHealth | Better Health, Better Life</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <localeContext.Provider value={{userLocale, changeLocale}}>
        <targetLocaleContext.Provider value={{targetLocale, changeTargetLocale}}>
          <Component {...pageProps} />
        </targetLocaleContext.Provider>
      </localeContext.Provider>
    </>
  )
}