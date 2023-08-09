import Footer from "@/components/Home/Footer";
import Projects from "@/components/Home/Projects";
import Header from "@/components/What/Header";
import WeAreGoodAt from "@/components/What/WeAreGoodAt";
import ProcessAndStack from "@/components/What/ProcessAndStack";
import Head from "next/head";

const what = () => {
  return (
    <div className="What_Container">
      <Head>
        <link rel="shortcut icon" href="/image/logo-big.png" />
        <title>Candorbees</title>
      </Head>
      <Header />
      <WeAreGoodAt />
      <ProcessAndStack />
      <Projects />
      {/* <Footer /> */}
    </div>
  );
};

export default what;
