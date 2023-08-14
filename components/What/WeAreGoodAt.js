import styles from "@/styles/WeAreGood.module.css";
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

const WeAreGoodAt = () => {
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
  const control8 = useAnimation();
  const [ref8, inView8] = useInView();
  const control9 = useAnimation();
  const [ref9, inView9] = useInView();
  const control10 = useAnimation();
  const [ref10, inView10] = useInView();

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

  useEffect(() => {
    if (inView8) {
      control8.start("visible");
    } else {
      control8.start("hidden");
    }
  }, [control8, inView8]);

  useEffect(() => {
    if (inView9) {
      control9.start("visible");
    } else {
      control9.start("hidden");
    }
  }, [control9, inView9]);

  useEffect(() => {
    if (inView10) {
      control10.start("visible");
    } else {
      control10.start("hidden");
    }
  }, [control10, inView10]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content1}>
          <motion.div
            className="box"
            ref={ref1}
            initial="hidden"
            variants={boxVariant}
            animate={control1}
          >
            <h1>WE VALUE RELATIONSHIPS </h1>
          </motion.div>
          <motion.div
            className="box"
            ref={ref2}
            initial="hidden"
            variants={boxVariant}
            animate={control2}
          >
            <p className={styles.parat1}>
              We are burning not only with cool projects, but also with the
              people behind them. And a perfect team match truly matters. Our
              clients are our partners, co-authors, and friends at all project
              stages. Here are some examples of times when CandorBees became a
              best-fit teammate for our customers.
            </p>
          </motion.div>
          <p className={styles.parat1}>&#160;</p>
          <motion.div
            className="box"
            ref={ref3}
            initial="hidden"
            variants={boxVariant}
            animate={control3}
          >
            <h1>WE KNOW EXACTLY WHAT WE ARE GOOD AT </h1>
          </motion.div>
          <motion.div
            className="box"
            ref={ref4}
            initial="hidden"
            variants={boxVariant}
            animate={control4}
          >
            <p className={styles.parat1}>
              Our clear definition makes us really good experts.
            </p>
          </motion.div>
          <p className={styles.parat1}>&#160;</p>
          <motion.div
            className="box"
            ref={ref5}
            initial="hidden"
            variants={boxVariant}
            animate={control5}
          >
            <h5>WE PROVIDE: </h5>
          </motion.div>

          <motion.div
            className="box"
            ref={ref6}
            initial="hidden"
            variants={boxVariant}
            animate={control6}
          >
            <div className={styles.list}>
              <ul>
                <li className={styles.li}>Programming.</li>
                <li className={styles.li}>Testing.</li>
                <li className={styles.li}>Development process management.</li>
                <li className={styles.li}>Server configuration and support.</li>
                <li className={styles.li}>Documentation creation. </li>
              </ul>
            </div>
          </motion.div>
          <p className={styles.parat1}>&#160;</p>
          <motion.div
            className="box"
            ref={ref7}
            initial="hidden"
            variants={boxVariant}
            animate={control7}
          >
            <h5>WE DO NOT PROVIDE:</h5>
          </motion.div>
          <motion.div
            className="box"
            ref={ref8}
            initial="hidden"
            variants={boxVariant}
            animate={control8}
          >
            <div className={styles.list}>
              <ul>
                <li className={styles.li}>
                  Consulting; we can share our experience, but consulting is not
                  our area.
                </li>
                <li className={styles.li}>
                  Design; if you don&apos;t have your own designer, we are ready
                  to recommend our partners.
                </li>
                <li className={styles.li}>
                  AI/VR/AR/ML; we can determine the need for such technologies
                  and attract third-party narrow experts.
                </li>
                <li className={styles.li}>
                  Promotion and sales; we are techies, so business endeavors are
                  up to you.
                </li>
              </ul>
            </div>
          </motion.div>
          <p className={styles.parat1}>&#160;</p>
          <motion.div
            className="box"
            ref={ref9}
            initial="hidden"
            variants={boxVariant}
            animate={control9}
          >
            <h1>IT’S EASY TO GET US STARTED</h1>
          </motion.div>

          <motion.div
            className="box"
            ref={ref10}
            initial="hidden"
            variants={boxVariant}
            animate={control10}
          >
            <p className={styles.parat1}>
              If you have a vision for a future product, you simply need to
              reach out and tell us your idea. There’s no need to include
              technical specifications and other complex documentation, and we
              won’t burden you with requests for payment or cost estimations
              right away. If we feel your project is a good match for us, we
              will assemble a team, draw up a roadmap, and launch sprints. There
              will be interesting and difficult work ahead, but this stage is
              very simple.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WeAreGoodAt;
