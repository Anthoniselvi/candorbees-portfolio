import Header from "@/components/Project/Header";
import WorkingWayAndStock from "@/components/Home/WorkingWayAndStock";
import Footer from "@/components/Home/Footer";
import Head from "next/head";

const project = () => {
  return (
    <div className="Project_Container">
      <Head>
        <link rel="shortcut icon" href="/image/logo-big.png" />
        <title>Candorbees</title>
      </Head>
      <Header />
      <WorkingWayAndStock />
      {/* <Footer /> */}
    </div>
  );
};

export default project;
