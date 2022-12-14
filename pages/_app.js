import '../styles/globals.scss';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/UI/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bryan's Portfolio</title>
        <meta name='description' content="Bryan's awesome portfolio" />
        <link rel='icon' href='/icon.svg' />
      </Head>
      <Script src='https://kit.fontawesome.com/1161eb7072.js' crossOrigin='anonymous' strategy='lazyOnload'></Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
