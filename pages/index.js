import Head from "next/head";
import Header from "@/components/Home/Header";
import Projects from "@/components/Home/Projects";
import WorkingWayAndStock from "@/components/Home/WorkingWayAndStock";
import Teams from "@/components/Home/Teams";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="/image/logo.jpeg" />
        <title>Candorbees</title>
      </Head>
      <Header />
      <Projects />
      <WorkingWayAndStock />
      <Teams />
    </div>
  );
}
