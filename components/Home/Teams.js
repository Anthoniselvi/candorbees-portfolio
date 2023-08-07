import styles from "@/styles/Teams.module.css";
import Image from "next/image";
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

const Teams = () => {
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
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <motion.div
          className="box"
          ref={ref1}
          initial="hidden"
          variants={boxVariant}
          animate={control1}
        >
          <h1>
            <span id="team" className={styles.span}></span>
            OUR CANDORBEES
          </h1>
        </motion.div>
        <motion.div
          className="box"
          ref={ref2}
          initial="hidden"
          variants={boxVariant}
          animate={control2}
        >
          <p className={styles.para}>
            We are a remote team of 5 professionals who are passionate about
            creating complex projects. With a remarkable track record of zero
            staff turnover, each member of our community is a highly skilled
            expert who finds joy in crafting intricate projects.
          </p>
        </motion.div>
      </div>

      <div className={styles.container2}>
        <motion.div
          className="box"
          ref={ref3}
          initial="hidden"
          variants={boxVariant}
          animate={control3}
        >
          <div className={styles.content}>
            <div className={styles.image}>
              {/* <img src="./image/profile1.png" alt="" className="homeTeam_image" /> */}
              <Image
                src="/image/profile1.png"
                width="200"
                height="380"
                alt=""
                className={styles.teamimage}
              />
            </div>
            <h3>
              <a href="https://www.linkedin.com/in/anthoni-selvi-813804248/">
                ANTHONI SELVI
              </a>
            </h3>
            <p className={styles.parat}>Role: Full Stack Developer</p>
            <p className={styles.para}>Time together : 2 years</p>
          </div>
        </motion.div>
        <motion.div
          className="box"
          ref={ref4}
          initial="hidden"
          variants={boxVariant}
          animate={control4}
        >
          <div className={styles.content}>
            {/* <img src="./image/profile2.png" alt="" className={styles.teamimage} /> */}
            <Image
              src="/image/profile2.png"
              width="200"
              height="380"
              alt=""
              className={styles.teamimage}
            />
            <h3>
              <a href="https://www.linkedin.com/in/fatima-mary-572b90252/">
                FATIMA MARY
              </a>
            </h3>

            <p className={styles.parat}>Role: Full Stack Developer</p>
            <p className={styles.para}>Time together: 2 years</p>
          </div>
        </motion.div>
        <motion.div
          className="box"
          ref={ref5}
          initial="hidden"
          variants={boxVariant}
          animate={control5}
        >
          <div className={styles.content}>
            {/* <img src="/image/profile3.jpg" alt="" className={styles.teamimage}/> */}
            <Image
              src="/image/profile3.jpg"
              width="200"
              height="380"
              alt=""
              className={styles.teamimage}
            />
            <h3>
              <a href="https://www.linkedin.com/in/stella-mary-577ab1252">
                MARIA STELLA MARY
              </a>
            </h3>
            <div className={styles.parat}>Role: UI Developer</div>
            <div className={styles.para}>Time together: 2 years</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Teams;