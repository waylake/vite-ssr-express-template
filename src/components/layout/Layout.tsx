import { Header, Footer } from ".";

type Props = {
  children: React.ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
