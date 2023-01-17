import Head from "next/head";

import Header from "../components/homepage/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>CYCLOAGAETE</title>
        <meta name="description" content="..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>
      <div className="app">
        <Header />
      </div>
    </>
  );
}
