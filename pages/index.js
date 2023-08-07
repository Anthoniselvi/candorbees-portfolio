import Head from "next/head";
import Header from "@/components/Home/Header";
import Projects from "@/components/Home/Projects";
import WorkingWayAndStock from "@/components/Home/WorkingWayAndStock";
import Teams from "@/components/Home/Teams";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Candorbees</title>
        <Image
          src="/image/logo-small.png"
          width="50"
          height="50"
          alt=""
          className={styles.image}
        />
      </Head>
      <Header />
      <Projects />
      <WorkingWayAndStock />
      <Teams />
    </div>
  );
}
