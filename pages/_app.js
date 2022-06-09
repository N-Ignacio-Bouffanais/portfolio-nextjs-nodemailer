import Head from "next/head";
import "../public/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nicolas Bouffanais</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, initial-scalable=1.0"
        />
        <meta
          name="description"
          content="Portafolio de Nicolas Bouffanais, un desarrollador de software, frontend developer especializado en Reactjs, CSS, y HTML."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
