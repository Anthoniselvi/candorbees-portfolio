import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "@/styles/GiftHeader.module.css";
import Image from "next/image";

const boxVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hidden: { opacity: 0, y: 50 },
};
export default function Header() {
  const control1 = useAnimation();
  const [ref1, inView1] = useInView();
  const control2 = useAnimation();
  const [ref2, inView2] = useInView();

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

  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <motion.div
          className="box"
          ref={ref1}
          initial="hidden"
          variants={boxVariant}
          animate={control1}
        >
          <Image
            src="/image/project5.png"
            style={{
              width: "100%",
              height: "100%",
            }}
            width={400}
            height={400}
            alt="santa-img"
            className={styles.homeimage}
          />
        </motion.div>
        <motion.div
          className="box"
          ref={ref2}
          initial="hidden"
          variants={boxVariant}
          animate={control2}
        >
          <div className={styles.container3}>
            <h2>Santa Surprise</h2>
            <h3>A GIFT EXCHANGE PROGRAM</h3>
            <p className={styles.parat}>Country: India</p>
            <p className={styles.para}>Technologies: React, Node.js, MongoDB</p>
            <p className={styles.para}>Time together: 3 months till now</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
