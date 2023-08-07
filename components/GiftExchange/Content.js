import { useEffect, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "@/styles/GiftContent.module.css";
import Image from "next/image";

const boxVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hidden: { opacity: 0, y: 50 },
};

const Content = () => {
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
  const control18 = useAnimation();
  const [ref18, inView18] = useInView();

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
    if (inView18) {
      control18.start("visible");
    } else {
      control18.start("hidden");
    }
  }, [control18, inView18]);

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
            <h1>
              <span id="over"></span>
              OVERVIEW
            </h1>
          </motion.div>
          <motion.div
            className="box"
            ref={ref2}
            initial="hidden"
            variants={boxVariant}
            animate={control2}
          >
            <p className={styles.parat1}>
              The Santa game web app is designed to bring people together during
              the Christmas season to share gifts and wishes. It allows users to
              create groups and participate in a secret Santa game where they
              can exchange task messages and fulfill each other's wishes.
            </p>
          </motion.div>
          <p className={styles.parat1}>&#160;</p>

          <p className={styles.para}>&#160;</p>
          <motion.div
            className="box"
            ref={ref3}
            initial="hidden"
            variants={boxVariant}
            animate={control3}
          >
            <h1>
              <span id="pur"></span>PURPOSE AND NEED
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
              The purpose of the app is to facilitate the organization and
              enjoyment of the secret Santa game, allowing users to connect,
              exchange gifts, and create a joyful Christmas experience. The app
              addresses the need for a user-friendly platform that simplifies
              the process of drawing names, sending task messages, managing
              wishlists, and coordinating the final reveal event.
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
            <h1>
              <span id="work"></span>WORKFLOW
            </h1>
          </motion.div>
          <motion.div
            className="box"
            ref={ref6}
            initial="hidden"
            variants={boxVariant}
            animate={control6}
          >
            <p className={styles.parat1}>Group Creation:</p>

            <p className={styles.parat1}>
              Users can create a new group and specify a group name.
            </p>
            <p className={styles.para}>
              The group creator becomes the organizer with administrative
              privileges. User Invitation and Joining:
            </p>

            <p className={styles.parat1}>
              The organizer can invite multiple users to join the group via
              invitation links or email.
            </p>
            <p className={styles.para}>
              Users can accept invitations and become members of the group.
            </p>
          </motion.div>
          <motion.div
            className="box"
            ref={ref7}
            initial="hidden"
            variants={boxVariant}
            animate={control7}
          >
            <p className={styles.parat1}>Drawing Names:</p>
            <p className={styles.para}>
              The organizer initiates the name-drawing process. Names are
              randomly assigned to each user, ensuring that no user draws their
              own name. Users are notified of their assigned role as a mom or
              child.
            </p>
          </motion.div>
          <motion.div
            className="box"
            ref={ref8}
            initial="hidden"
            variants={boxVariant}
            animate={control8}
          >
            <p className="parat1">Task Messages:</p>
            <p className="para">
              Moms can send task messages to their assigned children. Children
              can receive and respond to task messages from their moms. Task
              messages enable communication, provide hints, or request
              additional information.
            </p>
          </motion.div>
          <motion.div
            className="box"
            ref={ref9}
            initial="hidden"
            variants={boxVariant}
            animate={control9}
          >
            <p className={styles.parat1}>Wishlist Creation and Management:</p>
            <p className={styles.para}>
              Children can create and update their wishlists. Wishlists include
              items or gifts that the child would like to receive. Wishlists are
              visible to the assigned mom, who can use them for gift selection.
            </p>
          </motion.div>
          <motion.div
            className="box"
            ref={ref10}
            initial="hidden"
            variants={boxVariant}
            animate={control10}
          >
            <p className={styles.parat1}>Reveal and Gift Exchange:</p>
            <p className={styles.para}>
              A designated final game event date is set. Moms' identities are
              revealed to the children during the event. Moms have access to
              their assigned child's wishlist to purchase gifts. Gifts are
              exchanged between moms and children during the event.
            </p>
          </motion.div>
          <p className={styles.parat1}>&#160;</p>
          <motion.div
            className="box"
            ref={ref11}
            initial="hidden"
            variants={boxVariant}
            animate={control11}
          >
            <h1>
              <span id="tech"></span>TECHNOLOGY
            </h1>
          </motion.div>
          <motion.div
            className="box"
            ref={ref12}
            initial="hidden"
            variants={boxVariant}
            animate={control12}
          >
            <p className={styles.parat1}>
              The Santa game web app will be developed using the following
              technologies:
            </p>

            <div className={styles.list1}>
              <ul>
                <ol>1. Programming Language: [Specify programming language]</ol>
                <ol>
                  2. Frameworks/Libraries: [Specify frameworks or libraries]
                </ol>
                <ol>3. Database: [Specify database system]</ol>
                <ol>4. Hosting Platform: [Specify hosting platform]</ol>
                <ol>5. Front-end: [Specify front-end technologies]</ol>
                <ol>6. Back-end: [Specify back-end technologies]</ol>
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
            <h1>
              <span id="stru"></span>STRUCTURE AND FEATURES
            </h1>
          </motion.div>
          <motion.div
            className="box"
            ref={ref14}
            initial="hidden"
            variants={boxVariant}
            animate={control14}
          >
            <p className={styles.parat1}>
              The Santa game web app will consist of the following structure and
              features:
            </p>
            <div className={styles.list1}>
              <ul>
                <ol>1. Group Management</ol>
                <ol>2. Name Drawing</ol>
                <ol>3. Task Messaging System</ol>
                <ol>4. Wishlist Creation and Management</ol>
                <ol>5. Reveal Event Management</ol>
                <ol>6. Gift Exchange</ol>
                <ol>7. User Notifications</ol>
                <ol>8. User-friendly UI and Design</ol>
              </ul>
            </div>
          </motion.div>
          <p className={styles.parat1}>&#160;</p>
          <motion.div
            className="box"
            ref={ref15}
            initial="hidden"
            variants={boxVariant}
            animate={control15}
          >
            <Image
              src="/image/project1.png"
              width="500"
              height="300"
              alt=""
              className={styles.image}
            />
          </motion.div>

          <p className={styles.parat1}>&#160;</p>
          <motion.div
            className="box"
            ref={ref16}
            initial="hidden"
            variants={boxVariant}
            animate={control16}
          >
            <h1>
              <span id="res"></span>RESULTS
            </h1>
          </motion.div>
          <motion.div
            className="box"
            ref={ref17}
            initial="hidden"
            variants={boxVariant}
            animate={control17}
          >
            <p className={styles.parat1}>
              The expected results from the Santa game web app are as follows:
            </p>

            <div className={styles.list1}>
              <ul>
                <ol className={styles.ol}>
                  1. Users can create groups and invite others to join.
                </ol>
                <ol className={styles.ol}>
                  2. Names are assigned randomly, ensuring fair distribution.
                </ol>
                <ol className={styles.ol}>
                  3. Moms can send task messages to their assigned children.
                </ol>
                <ol className={styles.ol}>
                  4. Children can create wishlists visible to their assigned
                  moms.
                </ol>
                <ol className={styles.ol}>
                  5. Moms can access wishlists to purchase gifts.
                </ol>
                <ol className={styles.ol}>
                  6. The final game event facilitates the reveal and gift
                  exchange.
                </ol>
                <ol className={styles.ol}>
                  7. Users receive notifications to stay updated on app
                  activities.
                </ol>
                <ol className={styles.ol}>
                  8. The app provides an enjoyable and seamless user experience,
                  fostering Christmas spirit and celebration.
                </ol>
              </ul>
            </div>
          </motion.div>
          <div className={styles.containercontent1}></div>
        </div>
      </div>
      <motion.div
        className="box"
        ref={ref18}
        initial="hidden"
        variants={boxVariant}
        animate={control18}
      >
        <div className={styles.container1content}>
          <h1>THESE ARE SOME OF OUR PERFECT MATCHES</h1>
          <p className={styles.para}>
            We are burning not only with cool projects, but also with the people
            behind them. And a perfect team match truly matters. Our clients are
            our partners, co-authors, and friends at all project stages. Here
            are some examples of times when CandorBees became a best-fit
            teammate for our customers.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Content;
