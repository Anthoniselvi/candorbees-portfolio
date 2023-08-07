import Image from "next/image";
import styles from "@/styles/ProjectHeader.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hidden: { opacity: 0, y: 50 },
};

const Header = () => {
  const control1 = useAnimation();
  const [ref1, inView1] = useInView();
  const control2 = useAnimation();
  const [ref2, inView2] = useInView();
  const control3 = useAnimation();
  const [ref3, inView3] = useInView();
  const control4 = useAnimation();
  const [ref4, inView4] = useInView();
  const control5 = useAnimation();
  const [ref5, inView5] = useInView();
  const control6 = useAnimation();
  const [ref6, inView6] = useInView();
  const control7 = useAnimation();
  const [ref7, inView7] = useInView();

  useEffect(() => {
    if (inView1) {
      control1.start("visible");
    } else {
      control1.start("hidden");
    }
  }, [control1, inView1]);

  useEffect(() => {
    if (inView2) {
      control2.start("visible");
    } else {
      control2.start("hidden");
    }
  }, [control2, inView2]);

  useEffect(() => {
    if (inView3) {
      control3.start("visible");
    } else {
      control3.start("hidden");
    }
  }, [control3, inView3]);

  useEffect(() => {
    if (inView4) {
      control4.start("visible");
    } else {
      control4.start("hidden");
    }
  }, [control4, inView4]);

  useEffect(() => {
    if (inView5) {
      control5.start("visible");
    } else {
      control5.start("hidden");
    }
  }, [control5, inView5]);

  useEffect(() => {
    if (inView6) {
      control6.start("visible");
    } else {
      control6.start("hidden");
    }
  }, [control6, inView6]);
  useEffect(() => {
    if (inView7) {
      control7.start("visible");
    } else {
      control7.start("hidden");
    }
  }, [control7, inView7]);

  return (
    <div className={styles.container}>
      <div className={styles.containercontent}>
        <h1>THESE ARE SOME OF OUR PERFECT MATCHES </h1>

        <p className={styles.para}>
          We are driven not only by exciting projects but also by the people who
          bring them to life. Finding the perfect team match is of utmost
          importance to us. Our clients are not just clients; they are our
          partners, collaborators, and friends throughout all stages of the
          project. Let's take a look at some instances where CandorBees proved
          to be the ideal teammate for our valued customers.
        </p>
      </div>

      <div className={styles.container1}>
        <motion.div
          className="box"
          ref={ref3}
          initial="hidden"
          variants={boxVariant}
          animate={control3}
        >
          <Image
            src="/image/project5.png"
            width="50"
            height="50"
            alt=""
            className={styles.homeimage}
          />
        </motion.div>
        <div className={styles.container3}>
          <motion.div
            className="box"
            ref={ref4}
            initial="hidden"
            variants={boxVariant}
            animate={control4}
          >
            <h2>Production Scheduler</h2>
            <h3>JOB MANAGEMENT PLATFORM</h3>
            <p className={styles.parat}>Country: India</p>
            <p className={styles.para}>
              Technologies : React, Node.js, PostgreSQL
            </p>
            <p className={styles.para}>Time together: 6 months till now</p>
            <p className={styles.para}>
              Team : 1 PM, 0.5 BA, 2 developers, 1 QA
            </p>

            <Image
              src="/image/arrow.png"
              width="20"
              height="20"
              alt=""
              className={styles.homeimage1}
            />
          </motion.div>
        </div>
      </div>

      <div className={styles.container1a}>
        <motion.div
          className="box"
          ref={ref5}
          initial="hidden"
          variants={boxVariant}
          animate={control5}
        >
          <Image
            src="/image/project1.png"
            width="50"
            height="50"
            alt=""
            className={styles.homeimage}
          />
        </motion.div>
        <div className={styles.container3}>
          <motion.div
            className="box"
            ref={ref6}
            initial="hidden"
            variants={boxVariant}
            animate={control6}
          >
            <h2>Gift Junction</h2>
            <h3>A GIFT MANAGEMENT SOFTWARE</h3>
            <p className={styles.parat}>Country: United States</p>
            <p className={styles.para}>
              Technologies : React, Node.js, PostgreSQL
            </p>
            <p className={styles.para}>Time together: 3 months till now</p>
            <p className={styles.para}>
              Team : 0.5 PM, 0.5 BA, 2 developers, 1 QA
            </p>

            <Image
              src="/image/arrow.png"
              width="20"
              height="20"
              alt=""
              className={styles.homeimage1}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
