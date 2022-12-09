import AppHeader from "../components/app-header/app-header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const geLayout = Component.getLayout ?? ((page) => page);
  return geLayout(<Component {...pageProps} />);
}

export default MyApp;
