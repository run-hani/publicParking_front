import React, { useEffect } from "react";
import Head from "next/head";
import { wrapper } from "@/redux/store.ts";
import { Layout } from "@/pages/common";
import '@/pages/common/styles/globals.css'

const App = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Public Parking front</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default wrapper.withRedux(App);
