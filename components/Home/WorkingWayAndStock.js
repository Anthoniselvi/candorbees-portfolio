import styles from "@/styles/Working.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useRouter } from "next/router";

const boxVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hidden: { opacity: 0, y: 50 },
};

const WorkingWayAndStock = () => {
  const router = useRouter();

  const navigateToWhat = () => {
    router.push("/what");
  };
  const control1 = useAnimation();
  const [ref1, inView1] = useInView();
  const control2 = useAnimation();
  const [ref2, inView2] = useInView();
  const control3 = useAnimation();
  const [ref3, inView3] = useInView();
  const control4 = useAnimation();
  const [ref4, inView4] = useInView();

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

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <motion.div
          className="box"
          ref={ref1}
          initial="hidden"
          variants={boxVariant}
          animate={control1}
        >
          <h1>
            WE VALUE TRANSPARENCY, MAKING OUR PROCESS EASILY UNDERSTANDABLE.
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
            Our process is designed to be straightforward and customer-friendly.
            Utilizing a Scrum-based workflow, we ensure efficient collaboration,
            even across different time zones between our team and clients.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="box"
        ref={ref3}
        initial="hidden"
        variants={boxVariant}
        animate={control3}
      >
        <div className={styles.button} onClick={navigateToWhat}>
          LOOK AT HOW WE WORK
        </div>
      </motion.div>
      <motion.div
        className="box"
        ref={ref4}
        initial="hidden"
        variants={boxVariant}
        animate={control4}
      >
        <div className={styles.container1}>
          <div className={styles.container1content}>
            <p className={styles.para1}>
              We have carefully chosen a range of established and adaptable
              technologies that empower us to develop fully functional apps,
              starting from scratch. This is our tried & true approach to
              delivering exceptional results.
            </p>
            <h4>REACT, NODE.JS, NEXT, NEST, MONGODB, POSTGRESQL</h4>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkingWayAndStock;
