import Head from "next/head";

import Header from "../components/homepage/Header";
import ShortBikes from "../components/homepage/ShortBikes";
import AboutUs from "../components/homepage/AboutUs";
import ShortRoads from "../components/homepage/ShortRoads";
import ShortGallery from "../components/homepage/ShortGallery";
import ShortFaqRegulations from "../components/homepage/ShortFaqRegulations";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cycloagaete</title>
        <meta name="description" content="Cycloagaete" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="shortcut icon" href="/logo192.png" />
      </Head>
      <div>
        <Header />
        <ShortBikes />
        <AboutUs />
        <ShortRoads />
        <ShortGallery />
        <ShortFaqRegulations />
      </div>
    </>
  );
}
