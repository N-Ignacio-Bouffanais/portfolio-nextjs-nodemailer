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
        {/*fuentes de google*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        {/*Iconos font awesome*/}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
