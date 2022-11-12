import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <main>
      <section className="p-8">{children}</section>
    </main>
  );
};

export default Layout;
