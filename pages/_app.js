import "../styles/globals.css";
import SimpleReactLightbox from "simple-react-lightbox";
import { useState } from "react";
import { AppProvider } from "../components/context";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieAccept from "../components/CookieAccept";
import Cookie from "../components/RodoCookies";

function MyApp({ Component, pageProps }) {
  const [visibleCookie, setVisibleCookie] = useState(false);
  return (
    <div className="app">
      <AppProvider>
        <Navbar />
        <SimpleReactLightbox>
          <Component {...pageProps} />
        </SimpleReactLightbox>
        <Footer />
        <CookieAccept setVisibleCookie={setVisibleCookie} />
        {visibleCookie && <Cookie setVisibleCookie={setVisibleCookie} />}
      </AppProvider>
    </div>
  );
}

export default MyApp;
