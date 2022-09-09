import type { NextPage } from "next";
import Main from "../components/Main/Main";
import Head from "next/head";
import Product from "../components/Products/Product";
import Features from "../components/Features/Features";
import Mission from "../components/Mission";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Project</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Main />
      <Product />
      <Features />
      <Mission />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
