import Head from "next/head";
import "../public/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nicolas Bouffanais</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
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
