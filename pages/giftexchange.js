import Content from "@/components/GiftExchange/Content";
import Header from "@/components/GiftExchange/Header";
import Footer from "@/components/Home/Footer";
import Head from "next/head";

export default function giftexchange() {
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
}
