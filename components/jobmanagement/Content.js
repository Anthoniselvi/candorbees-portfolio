import styles from "@/styles/JobContent.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

const boxVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hidden: { opacity: 0, y: 50 },
};

export default function Content() {
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
  const control11 = useAnimation();
  const [ref11, inView11] = useInView();
  const control12 = useAnimation();
  const [ref12, inView12] = useInView();
  const control13 = useAnimation();
  const [ref13, inView13] = useInView();
  const control14 = useAnimation();
  const [ref14, inView14] = useInView();
  const control15 = useAnimation();
  const [ref15, inView15] = useInView();
  const control16 = useAnimation();
  const [ref16, inView16] = useInView();
  const control17 = useAnimation();
  const [ref17, inView17] = useInView();

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
  useEffect(() => {
    if (inView11) {
      control11.start("visible");
    } else {
      control11.start("hidden");
    }
  }, [control11, inView11]);
  useEffect(() => {
    if (inView12) {
      control12.start("visible");
    } else {
      control12.start("hidden");
    }
  }, [control12, inView12]);
  useEffect(() => {
    if (inView13) {
      control13.start("visible");
    } else {
      control13.start("hidden");
    }
  }, [control13, inView13]);
  useEffect(() => {
    if (inView14) {
      control14.start("visible");
    } else {
      control14.start("hidden");
    }
  }, [control14, inView14]);
  useEffect(() => {
    if (inView15) {
      control15.start("visible");
    } else {
      control15.start("hidden");
    }
  }, [control15, inView15]);
  useEffect(() => {
    if (inView16) {
      control16.start("visible");
    } else {
      control16.start("hidden");
    }
  }, [control16, inView16]);
  useEffect(() => {
    if (inView17) {
      control17.start("visible");
    } else {
      control17.start("hidden");
    }
  }, [control17, inView17]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.containercontent}>
        <div className={styles.containercontent1}>
          <motion.div
            className="box"
            ref={ref1}
            initial="hidden"
            variants={boxVariant}
            animate={control1}
          >
            <h1> OVERVIEW</h1>
          </motion.div>
          <motion.div
            className="box"
            ref={ref1}
            initial="hidden"
            variants={boxVariant}
            animate={control1}
            // className="parat1"
          >
            <p className={styles.parat1}>
              The Production Scheduler is a web based application aims to
              address the operational challenges faced by a manufacturing client
              through the development of a comprehensive software application.
              The client currently relies on a manual system for managing
              machine operations and productivity tracking, which is inefficient
              and prone to errors.
            </p>
          </motion.div>
          <motion.div
            className="box"
            ref={ref2}
            initial="hidden"
            variants={boxVariant}
            animate={control2}
            // className="parat1"
          >
            <p className={styles.parat1}>
              To enhance efficiency, accuracy, and decision-making, our team
              developed the Production Scheduler application. This user-friendly
              solution enables machine operators to plan, schedule, and monitor
              jobs, while providing real-time dashboards and report generation
              capabilities.
            </p>
          </motion.div>
          <p className={styles.parat1}>&#160;</p>

          {/* <p className="para">&#160;</p> */}

          <motion.div
            className="box"
            ref={ref3}
            initial="hidden"
            variants={boxVariant}
            animate={control3}
          >
            <h1>
              {/* <span ></span> */}
              PURPOSE AND NEED
            </h1>
          </motion.div>

          <motion.div
            className="box"
            ref={ref4}
            initial="hidden"
            variants={boxVariant}
            animate={control4}
          >
            <p className={styles.parat1}>
              The manufacturing client operates a wide range of machines within
              their factory, each responsible for producing different tools.
              However, the manual process of managing these machines and
              tracking their productivity hampers operational efficiency. The
              client approached our company seeking a solution that would
              automate and streamline these processes.
            </p>
          </motion.div>
          <motion.div
            className="box"
            ref={ref5}
            initial="hidden"
            variants={boxVariant}
            animate={control5}
          >
            <p className={styles.parat1}>
              In response, we developed the Production Scheduler application to
              empower machine operators to efficiently plan and schedule jobs,
              monitor machine statuses, and generate insightful reports. By
              replacing the manual system, the application improves
              productivity, accuracy, and overall operational performance.
            </p>
          </motion.div>
          <p className={styles.parat1}>&#160;</p>

          <motion.div
            className="box"
            ref={ref6}
            initial="hidden"
            variants={boxVariant}
            animate={control6}
          >
            <h1>
              {/* <span id="work">                </span> */}
              WORKFLOW
            </h1>
          </motion.div>

          <motion.div
            className="box"
            ref={ref7}
            initial="hidden"
            variants={boxVariant}
            animate={control7}
          >
            <p className={styles.parat1}>
              The Production Scheduler application revolutionizes the
              client&apos;s workflow by providing a centralized platform for
              managing machine operations and productivity tracking. Machine
              operators can utilize the application to plan and schedule jobs,
              assign specific tools to individual machines, and make adjustments
              as needed.
            </p>
          </motion.div>

          <p className={styles.parat1}>&#160;</p>

          <motion.div
            className="box"
            ref={ref8}
            initial="hidden"
            variants={boxVariant}
            animate={control8}
          >
            <h1>
              {/* <span ></span> */}
              TECHNOLOGY
            </h1>
          </motion.div>

          <motion.div
            className="box"
            ref={ref9}
            initial="hidden"
            variants={boxVariant}
            animate={control9}
          >
            <p className={styles.parat1}>
              The application&apos;s real-time dashboard offers comprehensive
              visibility into machine statuses, enabling operators to monitor
              progress effectively. Furthermore, the application facilitates
              report generation, providing valuable insights for analysis,
              performance evaluation, and informed decision-making.
            </p>
          </motion.div>

          <p className={styles.parat1}>&#160;</p>

          <motion.div
            className="box"
            ref={ref10}
            initial="hidden"
            variants={boxVariant}
            animate={control10}
          >
            <h1>
              {/* <span ></span> */}
              STRUCTURE AND FEATURES
            </h1>
          </motion.div>

          <motion.div
            className="box"
            ref={ref11}
            initial="hidden"
            variants={boxVariant}
            animate={control11}
          >
            <p className={styles.parat1}>
              The Production Scheduler application is structured to provide
              seamless and efficient management of machine operations. Key
              features include:
            </p>
          </motion.div>

          <motion.div
            className="box"
            ref={ref12}
            initial="hidden"
            variants={boxVariant}
            animate={control12}
          >
            <div className={styles.list1}>
              <ul>
                <ol className={styles.ol}>
                  1. Job Planning and Scheduling: Machine operators can easily
                  plan and schedule jobs, assigning specific tools to individual
                  machines and making adjustments as necessary.
                </ol>
                <ol className={styles.ol}>
                  2. Real-time Dashboard: The application offers a comprehensive
                  dashboard, providing real-time updates on machine statuses,
                  such as running, idle, or stopped.
                </ol>
                <ol className={styles.ol}>
                  3. Data Visualization: Machine data is presented in an
                  intuitive and visually appealing manner, enabling operators to
                  monitor productivity trends and identify bottlenecks.
                </ol>
                <ol className={styles.ol}>
                  4. Report Generation: The application allows users to generate
                  detailed reports based on the collected machine data,
                  facilitating analysis, performance evaluation, and informed
                  decision-making.
                </ol>
              </ul>
            </div>
          </motion.div>
          <p className={styles.parat1}>&#160;</p>
          <motion.div
            className="box"
            ref={ref13}
            initial="hidden"
            variants={boxVariant}
            animate={control13}
          >
            <Image
              src="/image/project1.png"
              style={{
                width: "100%",
                height: "100%",
              }}
              width={400}
              height={400}
              alt="job-img"
              className={styles.image}
            />
          </motion.div>

          <p className={styles.parat1}>&#160;</p>

          <motion.div
            className="box"
            ref={ref14}
            initial="hidden"
            variants={boxVariant}
            animate={control14}
          >
            <h1>RESULTS</h1>
          </motion.div>

          <motion.div
            className="box"
            ref={ref15}
            initial="hidden"
            variants={boxVariant}
            animate={control15}
          >
            <p className={styles.parat1}>
              After the successful release of the product, our team continues to
              work on the project, provide support and work with feedback to
              improve the functionality of Production Scheduler.
            </p>
          </motion.div>
        </div>
        <div className={styles.containercontent1}></div>
      </div>

      <div className={styles.container1content}>
        <motion.div
          className="box"
          ref={ref16}
          initial="hidden"
          variants={boxVariant}
          animate={control16}
        >
          <h1>THESE ARE SOME OF OUR PERFECT MATCHES</h1>
        </motion.div>

        <motion.div
          className="box"
          ref={ref17}
          initial="hidden"
          variants={boxVariant}
          animate={control17}
        >
          <p className={styles.para}>
            We are burning not only with cool projects, but also with the people
            behind them. And a perfect team match truly matters. Our clients are
            our partners, co-authors, and friends at all project stages. Here
            are some examples of times when CandorBees became a best-fit
            teammate for our customers.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
