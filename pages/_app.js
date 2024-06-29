import Layout from "../components/layout/Layout.js";
import "../style/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout suppressHydrationWarning>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
