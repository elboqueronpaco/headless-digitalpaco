import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head'
import Header from '../components/header/header'
import { GlobalStyled, Main } from '../components/global/global.style'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to app-headless-digitalpaco!</title>
      </Head>
      <>
        <GlobalStyled />
        <>
        <Header>
          <h1>header</h1>
        </Header>
        <Main>
          <Component {...pageProps} />
        </Main>
        </>
      </>
    </>
  );
};

export default CustomApp;
