import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { localeContext, targetLocaleContext, userLocale, targetLocale } from '../lib/locale-context';
import { userLocaleInterface, targetLocaleInterface } from '../lib/locale-context';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [userLocale,setUserLocale] = useState('');
  const [targetLocale,setTargetLocale] = useState('');

  /* This causes language selector to be unchangeable on register.tsx
  useEffect(
    () => {
      setUserLocale(navigator.language.substring(0,2))
    }
  );
  */
  const changeLocale = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setUserLocale(e.target.value);
  }

  const changeTargetLocale = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setTargetLocale(e.target.value);
  }

  const userLocaleState: userLocaleInterface = {
    locale: userLocale,
    changeLocale: changeLocale
  }

  const targetLocaleState: targetLocaleInterface = {
    locale: targetLocale,
    changeTargetLocale: changeTargetLocale
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
        <meta name="description" content="Health management app to lower language barriers" />
        <meta name="keywords" content="refugees, healthcare" />
        <title>ImmiHealth | Better Health, Better Life</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/icon-32x32.png"></link>
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png"></link>
        <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png"></link>
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png"></link>
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png"></link>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#0085FF" />
      </Head>
      <localeContext.Provider value={userLocaleState}>
        <targetLocaleContext.Provider value={targetLocaleState}>
          <Component {...pageProps} />
        </targetLocaleContext.Provider>
      </localeContext.Provider>
    </>
  )
}
