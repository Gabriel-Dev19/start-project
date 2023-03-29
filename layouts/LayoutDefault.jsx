import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function LayoutDefault({ title, header = true, footer = true, children }) {
  return (
    <>
      <Head>
        <title>{(title || 'Home') + ' | Start project'}</title>
        <meta name="description" content="Descrição" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      { header && <Header /> }
      <main>{children}</main>
      { footer && <Footer /> }
      {/* Scripts */}
    </>
  )
}