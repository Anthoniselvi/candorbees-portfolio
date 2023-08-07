import styles from "@/styles/Process.module.css";
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
const ProcessAndStack = () => {
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
      <div className={styles.containercontent}>
        <motion.div
          className="box"
          ref={ref1}
          initial="hidden"
          variants={boxVariant}
          animate={control1}
        >
          <h1>WE ARE TRANSPARENT, AND SO IS OUR PROCESS </h1>
        </motion.div>
        <motion.div
          className="box"
          ref={ref2}
          variants={boxVariant}
          initial="hidden"
          animate={control2}
        >
          <p className={styles.para}>
            The process is based on Scrum, which we have tweaked to make it more
            practical and allow us to work remotely in different time zones. You
            can read details in our knowledge base.
          </p>
        </motion.div>
      </div>

      <div className={styles.containercontent1}>
        <div className={styles.containercontent1a}>
          <motion.div
            className="box"
            ref={ref3}
            initial="hidden"
            variants={boxVariant}
            animate={control3}
          >
            <h6>PREDICTABILITY </h6>
          </motion.div>

          <motion.div
            className="box"
            ref={ref4}
            initial="hidden"
            variants={boxVariant}
            animate={control4}
          >
            <p className={styles.para}>
              We maintain a long-term roadmap for months in advance and detailed
              estimates for upcoming weeks. Working with startups forces us to
              change the plan a lot, but we always have it.
            </p>
          </motion.div>
        </div>
        <div className={styles.containercontent1a}>
          <motion.div
            className="box"
            ref={ref5}
            initial="hidden"
            variants={boxVariant}
            animate={control5}
          >
            <h6>PRACTICALITY </h6>
          </motion.div>
          <motion.div
            className="box"
            ref={ref6}
            initial="hidden"
            variants={boxVariant}
            animate={control6}
          >
            <p className={styles.para}>
              We maintain projects in working and shippable conditions at all
              times. We also understand that humans are not perfect, so we do a
              lot of documenting and testing.
            </p>
          </motion.div>
        </div>
        <div className={styles.containercontent1a}>
          <motion.div
            className="box"
            ref={ref7}
            initial="hidden"
            variants={boxVariant}
            animate={control7}
          >
            <h6>TRANSPARENCY </h6>
          </motion.div>
          <motion.div
            className="box"
            ref={ref8}
            initial="hidden"
            variants={boxVariant}
            animate={control8}
          >
            <p className={styles.para}>
              The client has full access to all tasks, documentation, servers,
              and code. Everyone can talk to anyone. Weekly demos ensure that
              everyone is on the same page.
            </p>
          </motion.div>
        </div>
      </div>

      <div className={styles.container1}>
        <div className={styles.container1content}>
          <motion.div
            className="box"
            ref={ref9}
            initial="hidden"
            variants={boxVariant}
            animate={control9}
          >
            <p className={styles.para1}>
              We have carefully chosen a range of established and adaptable
              technologies that empower us to develop fully functional apps of
              any level of complexity, starting from scratch. This is our
              tried-and-true approach to delivering exceptional results.
            </p>{" "}
          </motion.div>
          <motion.div
            className="box"
            ref={ref10}
            initial="hidden"
            variants={boxVariant}
            animate={control10}
          >
            <h4>REACT, NODE.JS, NEXT, NEST, MONGODB, POSTGRESQL</h4>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProcessAndStack;
