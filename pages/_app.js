import Head from "next/head";
import "../public/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nicolas Bouffanais</title>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta
          name="description"
          content="Sitio web de un desarrollador de software"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
