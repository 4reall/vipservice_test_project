import { PropsWithChildren } from "react";
import Head from "next/head";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Head>
        <title>vipservice project</title>
      </Head>
      <main>
        <section className="p-8">{children}</section>
      </main>
    </>
  );
};

export default Layout;
