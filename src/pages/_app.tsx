import type { AppProps } from "next/app";
import "src/global.css";
import Layout from "src/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
