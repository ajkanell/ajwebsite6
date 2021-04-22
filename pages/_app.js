import "../styles/globals.css";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import Flag from "../components/Flag";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Flag />

      <Navbar2 />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
