import "../styles/globals.css";
import Navbar2 from "../components/Navbar2";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar2 />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
