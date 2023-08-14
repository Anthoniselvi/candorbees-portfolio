import Footer from "@/components/Home/Footer";
import Content from "@/components/jobmanagement/Content";
import Header from "@/components/jobmanagement/Header";
import Head from "next/head";

const jobmanagement = () => {
  return (
    <div className="Project_Container">
      <Head>
        <link rel="shortcut icon" href="/image/logo.jpeg" />
        <title>Candorbees</title>
      </Head>
      <Header />
      <Content />
      {/* <Footer /> */}
    </div>
  );
};

export default jobmanagement;
