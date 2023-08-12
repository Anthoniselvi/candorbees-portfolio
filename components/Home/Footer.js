import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styles from "@/styles/Footer.module.css";
import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const boxVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hidden: { opacity: 0, y: 50 },
};

const Footer = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ishovered, setIsHovered] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bp6nng6",
        "template_c5cvgha",
        form.current,
        "bH6gJH26XMfIL_pIW"
      )
      .then(
        (result) => {
          form.current.reset();
          setIsSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.container} id="get">
      <div className={styles.content}>
        <div className={styles.container1content}>
          <motion.div
            className="box"
            ref={ref1}
            initial="hidden"
            variants={boxVariant}
            animate={control1}
          >
            <h1>
              <span className={styles.span}></span>
              LET’S MAKE IT TOGETHER
            </h1>
          </motion.div>
          <motion.div
            className="box"
            ref={ref2}
            initial="hidden"
            variants={boxVariant}
            animate={control2}
          >
            {isSubmitted ? (
              <div className={styles.successcontainer}>
                <p className={styles.successmsg}>
                  Thank you for your message. We will answer you as soon as
                  possible.
                </p>
                <button
                  className={styles.button}
                  onClick={() => setIsSubmitted(false)}
                >
                  SEND ONE MORE MESSAGE
                </button>
              </div>
            ) : (
              <form
                ref={form}
                onSubmit={handleSubmit}
                className={styles.myform}
              >
                <div className={styles.myforminput}>
                  <label className={styles.label}>Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    className={styles.input}
                  />
                </div>
                <div className={styles.myforminput}>
                  <label className={styles.label}>Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    className={styles.input}
                  />
                </div>
                <div className={styles.myforminput}>
                  <label className={styles.label}>Message</label>
                  <textarea
                    required
                    name="message"
                    className={styles.textarea}
                  />
                </div>
                <button
                  className={styles.button}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {ishovered ? (
                    <div className={styles.submitbtn}>
                      Submit
                      <ArrowRightAltIcon
                        className={styles.rightarrow}
                        sx={{ fontSize: "35px" }}
                      />
                    </div>
                  ) : (
                    <div className={styles.submitbtn}>Submit</div>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
        <motion.div
          className="box"
          ref={ref3}
          initial="hidden"
          variants={boxVariant}
          animate={control3}
        >
          <div className={styles.container2content}>
            <p className={styles.para3}>
              WE’RE HERE
              <br />
              14, Ekambaram Street, Chitlapakkam, Chennai 600064.
            </p>
            <p className={styles.para}>
              WORKING HOURS
              <br />
              From 9 am to 8 pm(UTC+5.30)
            </p>
            <p className={styles.para}>
              DROP US A LINE
              <br />
              <a href="mailto:srilekha.rajasekar@gmail.com">
                <span className={styles.font}>
                  srilekha.rajasekar@gmail.com
                </span>
              </a>
              <br />
              +91 9176856135
            </p>
            <p className={styles.para}>
              <a href="https://www.linkedin.com/company/candorbees/">
                <LinkedInIcon sx={{ fontSize: "35px" }} />
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
